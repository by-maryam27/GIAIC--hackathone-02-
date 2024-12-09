import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <p className="text-gray-700">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div className="text-gray-700">
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-blue-500">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-gray-700">
          <h4 className="font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li>
              <a href="/payment-options" className="hover:text-blue-500">
                Payment Options
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-blue-500">
                Returns
              </a>
            </li>
            <li>
              <a href="/privacy-policies" className="hover:text-blue-500">
                Privacy Policies
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Newsletter</h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2024 Maryam Raza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
