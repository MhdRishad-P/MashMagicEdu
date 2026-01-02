import { useState } from "react";

export default function ContactForm({ onClose = () => {} }) {
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
    } catch {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="ml-auto mb-2 text-black text-xl font-bold hover:text-red-600"
      >
        ✖
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-700 mb-4">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {["parentName", "studentName", "phone", "whatsapp", "location"].map(
          (field) => (
            <input
              key={field}
              type="text"
              placeholder={field.replace(/([A-Z])/g, " $1")}
              value={formData[field]}
              required
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-300"
            />
          )
        )}

        <button className="w-full bg-teal-600 text-white py-3 rounded-xl text-lg hover:bg-teal-700 transition">
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {success && (
        <p className="text-center text-green-600 font-medium mt-4">
          ✔ Form submitted successfully!
        </p>
      )}
    </div>
  );
}
