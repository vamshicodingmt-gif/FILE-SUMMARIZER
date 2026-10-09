"use client";

import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Premium Car Wash on WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-2xl shadow-green-500/40 transition hover:scale-110 sm:bottom-7 sm:right-7 sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
