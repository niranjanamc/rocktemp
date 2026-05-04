import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHATBOT_SYSTEM_PROMPT } from "@/data/chatbot-knowledge";

export interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

const FALLBACK_MSG =
  "Hi! I'm Aria. Our AI chat is warming up — please reach us directly at 📧 rocktemp.services@gmail.com or 📞 +91 9148325253 and we'll respond within 24 hours!";

let genAI: GoogleGenerativeAI | null = null;

function getGenAI(): GoogleGenerativeAI | null {
  if (!genAI) {
    // Decoding the provided base64 API key
    const b64Key = "QUl6YVN5QS1weThfNmxxaldDb21CVlFmR1lBc0pUQkxkd19yWEJz";
    const apiKey = typeof window !== 'undefined' ? atob(b64Key) : Buffer.from(b64Key, 'base64').toString();
    
    if (!apiKey) {
      return null; // Graceful degradation — no throw, no console error
    }
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
}

export async function sendMessage(
  history: ChatMessage[],
  userMessage: string
): Promise<string> {
  try {
    const ai = getGenAI();
    if (!ai) return FALLBACK_MSG;

    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
      systemInstruction: CHATBOT_SYSTEM_PROMPT,
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    // Only log unexpected errors, not config errors
    const msg = error instanceof Error ? error.message : String(error);
    if (!msg.includes("API key")) {
      console.error("Gemini error:", error);
    }
    return "I'm having trouble connecting right now. Please reach us at 📞 +91 9148325253 or ✉️ rocktemp.services@gmail.com — we'll be happy to help!";
  }
}
