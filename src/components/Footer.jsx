export default function Footer() {
  return (
    <footer className="bg-[#071C1F] text-[#C7D4D4] pt-16 pb-10 px-6">
      
      {/* ===================== TOP BRAND SECTION ===================== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* COLUMN 1 — BRAND + TRUST MARKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Mash Magic — India’s One & Only Mentoring-Led Learning Platform
          </h3>

          <ul className="space-y-2 text-sm mt-4">
            <li className="flex items-center gap-2">
              <span className="text-[#2FD1C6]">✔</span>
              3700+ Trusted Parents
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#2FD1C6]">✔</span>
              1000+ Success Stories
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#2FD1C6]">✔</span>
              Operating in 12+ Countries
            </li>
          </ul>
        </div>

        {/* COLUMN 2 — SUPPORT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              📞 <span>+91 701212 8756</span>
            </li>
            <li className="flex items-center gap-2">
              📧 <span>hellomashmagic@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              🕒 <span>Mon–Sat, 9 AM – 7 PM</span>
            </li>
          </ul>

          <p className="mt-6 text-sm">
            <span className="text-white font-medium">Mash Magic Learning Pvt Ltd.</span>
            <br />
            First Floor, Old Bus Stand Building <br />
            Thamarassery <br />
            673 573
          </p>
        </div>

        {/* COLUMN 3 — QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <a href="#whyus "  className="hover:text-[#2FD1C6] transition cursor-pointer" >Why Us</a>
            <a className="hover:text-[#2FD1C6] transition cursor-pointer" href="#programs">Programs</a>
            <a className="hover:text-[#2FD1C6] transition cursor-pointer" href="#testimonial">Testimonials</a>
          </ul>
        </div>

        {/* COLUMN 4 — LEGAL + SOCIALS */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Legal & Connect</h4>

          <ul className="space-y-3 text-sm mb-6">
            <li className="hover:text-[#2FD1C6] transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#2FD1C6] transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#2FD1C6] transition cursor-pointer">Refund Policy</li>
          </ul>

          {/* SOCIAL ICONS */}
          <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>

          <div className="flex items-center gap-4">
            
            {/* Instagram */}
            <a
              href="#"
              className="text-white hover:text-[#2FD1C6] transition text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="text-white hover:text-[#2FD1C6] transition text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>

          </div>
        </div>
      </div>

      {/* ===================== DIVIDER ===================== */}
      <div
        className="w-full border-t mt-14 mb-6"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      ></div>

      {/* ===================== COPYRIGHT ===================== */}
      <p className="text-center text-xs text-[#C7D4D4]">
        © 2025 Mash Magic Learning Pvt. Ltd. All rights reserved.
      </p>
    </footer>
  );
}
