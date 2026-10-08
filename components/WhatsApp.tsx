import { clinic } from "@/lib/content";

export const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.92-9.88 9.92Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export default function WhatsApp() {
  const waUrl = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
    "Hi Smilora Dental Care, I would like to inquire about dental treatments and appointments."
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat directly on WhatsApp with Smilora Dental reception"
      className="group fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-xl shadow-[#25D366]/40 transition-all hover:scale-105 hover:bg-[#1ebd59] md:bottom-6 md:right-6 md:px-5 md:py-3.5"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold tracking-wide md:inline">
        Chat with us
      </span>
    </a>
  );
}
