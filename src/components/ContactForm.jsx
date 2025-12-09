import { useState } from "react";

export default function ContactForm() {
  const scriptURL = "https://script.google.com/macros/s/AKfycbzu0JKNl0QXFqOud3oVczYhda6pZs84Q1n5cIf9y311E-I1QREmk8WCoHtwjo_IpKiu/exec"; // paste the URL here


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

      // Clear form
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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-teal-700 mb-4">
        Contact Form
      </h2>

      {/* Parent Name */}
      <input
        type="text"
        placeholder="Parent Name"
        className="border p-2 w-full rounded"
        required
        value={formData.parentName}
        onChange={(e) =>
          setFormData({ ...formData, parentName: e.target.value })
        }
      />

      {/* Student Name */}
      <input
        type="text"
        placeholder="Student Name"
        className="border p-2 w-full rounded"
        required
        value={formData.studentName}
        onChange={(e) =>
          setFormData({ ...formData, studentName: e.target.value })
        }
      />

      {/* Phone Number */}
      <input
        type="tel"
        placeholder="Phone Number"
        className="border p-2 w-full rounded"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      {/* WhatsApp Number */}
      <input
        type="tel"
        placeholder="WhatsApp Number"
        className="border p-2 w-full rounded"
        value={formData.whatsapp}
        required
        onChange={(e) =>
          setFormData({ ...formData, whatsapp: e.target.value })
        }
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        className="border p-2 w-full rounded"
        required
        value={formData.location}
        onChange={(e) =>
          setFormData({ ...formData, location: e.target.value })
        }
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {/* Success Message */}
      {success && (
        <p className="text-green-600 text-center mt-2">
          ✔ Your form has been submitted successfully!
        </p>
      )}
    </form>
  );
}
