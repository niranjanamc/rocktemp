"use client";
import { useState, useCallback, useRef } from "react";
import { sendMessage, ChatMessage } from "@/services/geminiService";
import { sendLeadEmail, getWhatsAppUrl, LeadData } from "@/services/emailService";

type ChatPhase = "chatting" | "collecting_lead" | "lead_sent";

interface LeadState {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  requirement?: string;
}

export function useChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "aria"; text: string }[]>([
    { role: "aria", text: "👋 Hi! I'm Aria, Rock Temp's HVAC advisor. I'm here to help you find the right climate control solution. What can I help you with today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phase, setPhase] = useState<ChatPhase>("chatting");
  const [lead, setLead] = useState<LeadState>({});
  const [exchangeCount, setExchangeCount] = useState(0);
  const historyRef = useRef<ChatMessage[]>([]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((o) => !o), []);

  const addMessage = (role: "user" | "aria", text: string) => {
    setMessages((prev) => [...prev, { role, text }]);
  };

  const send = useCallback(async (text?: string) => {
    const userText = text ?? input.trim();
    if (!userText || isLoading) return;

    // Client-side rate limiting (20 messages per day per browser)
    const today = new Date().toISOString().split("T")[0];
    const savedDate = localStorage.getItem("rocktemp_chat_date");
    let dailyCount = parseInt(localStorage.getItem("rocktemp_chat_count") || "0", 10);

    if (savedDate !== today) {
      dailyCount = 0;
      localStorage.setItem("rocktemp_chat_date", today);
    }

    if (dailyCount >= 20) {
      addMessage("aria", "You've reached the daily chat limit! Please call us at +91 9148325253 or connect on WhatsApp to continue the conversation.");
      return;
    }

    setInput("");
    addMessage("user", userText);
    setIsLoading(true);

    historyRef.current.push({ role: "user", parts: [{ text: userText }] });

    try {
      const reply = await sendMessage(historyRef.current.slice(0, -1), userText);
      historyRef.current.push({ role: "model", parts: [{ text: reply }] });
      addMessage("aria", reply);

      const newCount = exchangeCount + 1;
      setExchangeCount(newCount);
      localStorage.setItem("rocktemp_chat_count", (dailyCount + 1).toString());

      // After 3 exchanges, transition to lead capture
      if (newCount >= 3 && phase === "chatting") {
        setPhase("collecting_lead");
      }
    } catch {
      addMessage("aria", "I'm having a technical issue. Please call us at +91 9148325253.");
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, exchangeCount, phase]);

  const submitLead = useCallback(async (leadData: LeadData) => {
    setLead(leadData);
    const success = await sendLeadEmail(leadData);
    setPhase("lead_sent");
    if (success) {
      addMessage("aria", `✅ Thank you, ${leadData.name}! Our team will reach out within 24 hours at ${leadData.email}. You can also WhatsApp us for faster response!`);
    } else {
      addMessage("aria", `Thank you ${leadData.name}! Please also WhatsApp us at +91 9148325253 to connect faster.`);
    }
    setExchangeCount(0);
  }, []);

  const getWhatsApp = useCallback(() => getWhatsAppUrl(lead), [lead]);

  const skipLead = useCallback(() => {
    setPhase("chatting");
    setExchangeCount(0);
    addMessage("aria", "No problem! Feel free to keep chatting. I'm here to help.");
  }, []);

  return { isOpen, open, close, toggle, messages, input, setInput, isLoading, send, phase, submitLead, skipLead, getWhatsApp };
}
