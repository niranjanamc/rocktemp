import { GoogleGenerativeAI } from "@google/generative-ai";
import { CHATBOT_SYSTEM_PROMPT } from "@/data/chatbot-knowledge";

export interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

let genAI: GoogleGenerativeAI | null = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      throw new Error("Gemini API key not configured. Please set NEXT_PUBLIC_GEMINI_API_KEY in .env.local");
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
    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: CHATBOT_SYSTEM_PROMPT,
    });

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error("Gemini error:", error);
    return "I'm having trouble connecting right now. Please reach us directly at rocktemp.services@gmail.com or call +91 9148325253. We're happy to help!";
  }
}
