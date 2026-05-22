import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import whatsapp from "../assets/whatsapp.png";

function Layout() {
  return (
    <div>
      {/* ── WhatsApp FAB ── */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed z-9999 cursor-pointer
          bottom-4 right-4
          sm:bottom-6 sm:right-6
          w-12 h-12
          sm:w-14 sm:h-14
          lg:w-15 lg:h-15
          rounded-full
          flex items-center justify-center
          shadow-[0_4px_12px_rgba(0,0,0,0.3)]
          hover:scale-110 hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
          active:scale-95
          transition-transform duration-200 ease-out
        "
      >
        <img
          src={whatsapp}
          alt="Chat on WhatsApp"
          className="
            rounded-full
            w-8 h-8
            sm:w-9 sm:h-9
            lg:w-10 lg:h-10
          "
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