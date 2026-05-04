import emailjs from "emailjs-com";

export interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  requirement: string;
}

export async function sendLeadEmail(lead: LeadData): Promise<boolean> {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: lead.name,
        company_name: lead.company,
        reply_to: lead.email,
        phone: lead.phone,
        industry: lead.industry,
        requirement: lead.requirement,
        to_email: "rocktemp.services@gmail.com",
      },
      publicKey
    );
    return true;
  } catch (error) {
    console.error("EmailJS error:", error);
    return false;
  }
}

export function getWhatsAppUrl(lead: Partial<LeadData>): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919148325253";
  const message = encodeURIComponent(
    `Hi Rock Temp! I'm ${lead.name || "interested"} from ${lead.company || "a company"} and I'd like to enquire about: ${lead.requirement || "your HVAC services"}.`
  );
  return `https://wa.me/${number}?text=${message}`;
}

export async function sendContactForm(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  message: string;
}): Promise<boolean> {
  return sendLeadEmail({
    name: data.name,
    company: data.company,
    email: data.email,
    phone: data.phone,
    industry: data.industry,
    requirement: data.message,
  });
}
