export const WHATSAPP_NUMBER = "919876543210"; // Replace with your number

export const whatsappLink = (msg) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
