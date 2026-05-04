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
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
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
      model: "gemini-1.5-flash",
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
