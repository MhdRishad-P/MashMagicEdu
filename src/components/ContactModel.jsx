import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button that opens the form */}
      <button
        onClick={() => setOpen(true)}
        className="
          bg-[#F8BA2B] text-black font-bold text-sm tracking-wider
          py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl
        "
      >
        Contact
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-[99999] flex justify-center items-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6">
            <ContactForm onClose={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
