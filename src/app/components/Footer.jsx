import { FacebookIcon, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/40 backdrop-blur-3xl text-white py-10 rounded-t-2xl px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-500">CredScrap</h3>
          <p className="text-gray-400 mt-2">
            Empowering financial transactions with seamless payouts and collections.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-lg font-semibold text-green-500">Menu</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">News & Insights</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Sectors */}
        <div>
          <h4 className="text-lg font-semibold text-green-500">Sectors</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Marketplaces & Platforms</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Pensions, Payroll & EOR</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">E-Commerce</a></li>
          </ul>
        </div>

        {/* Our Platform */}
        <div>
          <h4 className="text-lg font-semibold text-green-500">Our Platform</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Global Payouts</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Collections</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-10 border-t border-gray-700 pt-5">
        <p className="text-gray-400">© Navro 2025. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Regulations</a>
          <a href="#" className="text-gray-400 hover:text-white">Whistleblowing</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FacebookIcon />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;