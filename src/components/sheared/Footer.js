import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-12 pb-6 text-gray-300 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top Section: App Download */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Download Our Shopping App
          </h3>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Shop smarter, anytime, anywhere.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700"
              aria-label="Download on Google Play Store"
            >
              <Image
                width={24}
                height={24}
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="Google Play Store icon"
                className="object-contain"
              />
              <div className="text-left">
                <p className="text-xs text-gray-400">Get it on</p>
                <p className="text-sm font-medium text-white">Google Play</p>
              </div>
            </Link>
            <Link
              href="https://www.apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2 transition duration-200 bg-gray-800 rounded-lg hover:bg-gray-700"
              aria-label="Download on Apple App Store"
            >
              <Image
                width={24}
                height={24}
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="Apple App Store icon"
                className="object-contain"
              />
              <div className="text-left">
                <p className="text-xs text-gray-400">Download on</p>
                <p className="text-sm font-medium text-white">App Store</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Middle Section: Links and Info */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              About Star Tech
            </h4>
            <p className="mt-2 text-sm text-gray-400">
              Your one-stop shop for electronics, gadgets, and more. Quality
              products, unbeatable prices.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-gray-400 transition duration-200 hover:text-orange-500"
              >
                <FaFacebookF className="text-lg" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-gray-400 transition duration-200 hover:text-orange-500"
              >
                <FaTwitter className="text-lg" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-gray-400 transition duration-200 hover:text-orange-500"
              >
                <FaInstagram className="text-lg" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
                className="text-gray-400 transition duration-200 hover:text-orange-500"
              >
                <FaYoutube className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 transition duration-200 hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 transition duration-200 hover:underline-orange-600"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 transition duration-300 hover:underline-orange-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-400 transition duration-200 hover:underline-orange-600"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-100">Contact Us</h4>
            <ul className="mt-2 space-y-4">
              <li className="text-sm text-gray-400">
                Email:{" "}
                <a
                  href="mailto:support@startech.com"
                  className="transition duration-200 hover:text-orange-500"
                >
                  support@startech.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+88017123456789"
                  className="text-sm text-gray-600 transition duration-200 hover:text-orange-500"
                >
                  +880 1712 345 789
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Address: 123 Tech Hub, Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 mt-12 text-center border-t border-gray-700">
          <p className="text-sm text-gray-500">
            &copy; Star Tech Ltd., {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
