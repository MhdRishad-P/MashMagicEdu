import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold tracking-tight">MASH MAGIC</h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Mash Magic — Smart Learning, Magical Results
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              MASH MAGIC
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white text-gray-400 transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white text-gray-400 transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white text-gray-400 transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white text-gray-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#docs" className="hover:text-white text-gray-400 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white text-gray-400 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white text-gray-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white text-gray-400 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to get the latest news, updates and special offers.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social icons */}
            <div className="mt-5 flex space-x-4">
              {/* Twitter */}
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.46 7.28c.01.17.01.34.01.51 0 5.21-3.96 11.21-11.21 11.21-2.23 0-4.3-.65-6.05-1.78.31.03.62.05.94.05 1.85 0 3.55-.63 4.9-1.7a3.96 3.96 0 01-3.7-2.75c.24.04.48.06.73.06.35 0 .69-.05 1.01-.13a3.95 3.95 0 01-3.17-3.87v-.05c.53.29 1.13.46 1.77.48a3.94 3.94 0 01-1.76-3.29c0-.73.2-1.4.55-1.98a11.21 11.21 0 008.13 4.12 3.95 3.95 0 016.72-3.6 7.84 7.84 0 002.51-.96 3.96 3.96 0 01-1.74 2.18 7.9 7.9 0 002.27-.62 8.5 8.5 0 01-1.98 2.05z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.25c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.48.55-3-1.22-3-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.37 1.11 2.95.85.09-.67.35-1.11.63-1.36-1.98-.23-4.06-1.03-4.06-4.6 0-1.02.36-1.86.95-2.52-.1-.24-.42-1.22.09-2.54 0 0 .78-.26 2.55.97A8.5 8.5 0 0112 7.5c.79 0 1.59.11 2.34.32 1.77-1.23 2.55-.97 2.55-.97.51 1.32.19 2.3.09 2.54.59.66.95 1.5.95 2.52 0 3.58-2.09 4.37-4.08 4.6.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.04 10.04 0 0022 12.25C22 6.58 17.52 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 6.5A2.5 2.5 0 114 4a2.5 2.5 0 012.5 2.5zM4.25 9h4.5v11h-4.5V9zM14 9c-2.33 0-3.75 1.27-4.19 2.39-.12.29-.16.65-.16 1.03V20h4.5v-6.07c0-.37.03-.75.18-1.02.32-.64.94-1.3 2.04-1.3 1.44 0 2.26 1.02 2.26 2.63V20H23v-6.78C23 10.74 21.37 9 18.9 9 16.98 9 15.7 9.86 15.14 10.76H15.1V9H14z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#privacy" className="hover:text-white transition">
              Privacy
            </a>
            <span className="h-3 w-px bg-gray-700" />
            <a href="#terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
