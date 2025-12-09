import { useState } from "react";

export default function ContactForm({ onClose }) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzu0JKNl0QXFqOud3oVczYhda6pZs84Q1n5cIf9y311E-I1QREmk8WCoHtwjo_IpKiu/exec";

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    whatsapp: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess(true);

      setFormData({
        parentName: "",
        studentName: "",
        phone: "",
        whatsapp: "",
        location: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="
          relative w-full max-w-md 
          backdrop-blur-xl bg-white/80 
          p-8 sm:p-10 rounded-3xl shadow-xl 
          border border-white/40 
          transition-all duration-300 
        "
      >
        {/* EXIT BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute top-3 right-3 
            bg-white text-gray-600 
            w-8 h-8 flex items-center justify-center 
            rounded-full shadow-md
            hover:bg-gray-100 hover:text-black
            transition
          "
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-700 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Fill out this form and we’ll get back to you shortly.
        </p>

        {/* INPUTS */}
        <div className="space-y-5">
          {[
            { label: "Parent Name", field: "parentName" },
            { label: "Student Name", field: "studentName" },
            { label: "Phone Number", field: "phone" },
            { label: "WhatsApp Number", field: "whatsapp" },
            { label: "Location", field: "location" },
          ].map((item, i) => (
            <div className="relative" key={i}>
              <input
                type="text"
                required
                value={formData[item.field]}
                onChange={(e) =>
                  setFormData({ ...formData, [item.field]: e.target.value })
                }
                className="
                  peer w-full px-4 py-3 rounded-xl border 
                  border-gray-300 bg-white/70 
                  focus:border-teal-500 focus:ring-4 focus:ring-teal-100 
                  transition-all outline-none
                "
              />
              <label
                className="
                  absolute left-4 top-1/2 -translate-y-1/2 
                  text-gray-500 text-sm pointer-events-none 
                  transition-all duration-200 
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-teal-600 
                  peer-valid:top-2 peer-valid:text-xs
                "
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            mt-7 w-full py-3 
            bg-gradient-to-r from-teal-600 to-teal-500 
            text-white text-lg font-semibold 
            rounded-xl shadow-md 
            hover:from-teal-700 hover:to-teal-600 
            transition-all duration-300 
            active:scale-95
          "
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {/* Success */}
        {success && (
          <p className="text-green-600 text-center mt-4 font-medium">
            ✔ Your form has been submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
}
