import whatsappIcon from "../assets/whatsappicon.jpg";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919550972999?text=Hi! I would like to know more about your products."
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
        zIndex: 9999,
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        style={{
          width: "55px",
          height: "55px",
            borderRadius: "50%",
        }}
      />
    </a>
  );
}