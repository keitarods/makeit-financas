export function getWhatsAppLink() {
  const whatsappNumber = process.env.WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

  if (!whatsappNumber) {
    return null;
  }

  const whatsappMessage =
    process.env.WHATSAPP_MESSAGE ??
    "Olá, Matheus. Gostaria de agendar uma conversa e entender melhor como funciona seu atendimento.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
