import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#C98A4B]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C98A4B]/10 group-hover:bg-[#C98A4B]/20 transition-colors duration-300">
            <ScissorsIcon />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl font-bold text-[#333333] tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Студия
            </span>
            <span
              className="text-[11px] font-medium text-[#C98A4B] tracking-[0.3em] uppercase -mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              груминга
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Услуги", "Галерея", "О нас", "Контакты"].map((item) => {
            const anchorMap: Record<string, string> = {
              "Услуги": "услуги",
              "Галерея": "галерея",
              "О нас": "о нас",
              "Контакты": "booking"
            };
            return (
              <a
                key={item}
                href={`#${anchorMap[item]}`}
                className="text-sm text-[#555555] hover:text-[#C98A4B] transition-colors duration-200 font-medium tracking-wide"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Contact */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+79961897128"
            className="flex items-center gap-2 text-[#333333] hover:text-[#C98A4B] transition-colors duration-200 font-medium text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <PhoneIcon />
            +7 (996) 189-71-28
          </a>
          <a
            href="https://wa.me/79961897128"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-all duration-200 hover:scale-110"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="#booking"
            className="px-5 py-2.5 bg-[#C98A4B] text-white text-sm font-semibold rounded-full hover:bg-[#b07840] transition-all duration-200 hover:shadow-lg hover:shadow-[#C98A4B]/30 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Записаться
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#333333] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#333333] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#333333] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-[#C98A4B]/10">
          {["Услуги", "Галерея", "О нас", "Контакты"].map((item) => {
            const anchorMap: Record<string, string> = {
              "Услуги": "услуги",
              "Галерея": "галерея",
              "О нас": "о нас",
              "Контакты": "booking"
            };
            return (
              <a
                key={item}
                href={`#${anchorMap[item]}`}
                className="text-sm text-[#555555] hover:text-[#C98A4B] transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
          <a
            href="tel:+79961897128"
            className="flex items-center gap-2 text-[#333333] font-medium text-sm"
          >
            <PhoneIcon />
            +7 (996) 189-71-28
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/79961897128"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] font-medium text-sm"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
          <a
            href="#booking"
            className="inline-block text-center px-5 py-2.5 bg-[#C98A4B] text-white text-sm font-semibold rounded-full"
          >
            Записаться онлайн
          </a>
        </div>
      </div>
    </header>
  );
}

function ScissorsIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C98A4B"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
