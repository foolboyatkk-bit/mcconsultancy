import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import whatsapp from "../assets/whatsapp.png";

function Layout() {
  return (
    <div>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <img
          src={whatsapp}
          alt="Chat on WhatsApp"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      </a>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
