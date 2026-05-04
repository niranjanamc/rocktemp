import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";

export const metadata: Metadata = {
  title: "Rock Temp | HVAC Solutions — Bengaluru & Hyderabad",
  description: "Rock Temp delivers end-to-end HVAC solutions — design, supply, installation & retrofit for manufacturing, hotels, and commercial buildings across Bengaluru and Hyderabad.",
  keywords: "HVAC Bengaluru, chiller installation, VRF systems, AHU supply, HVAC contractor India, energy conservation HVAC, cooling tower, Rock Temp",
  openGraph: {
    title: "Rock Temp | HVAC Solutions",
    description: "Professional HVAC design, supply & installation across Bengaluru and Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
