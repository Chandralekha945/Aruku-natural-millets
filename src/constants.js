export const WHATSAPP_NUMBER = "919550972999"; // Replace with your number

export const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
