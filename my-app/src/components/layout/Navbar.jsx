import Button from "../reusables/Button";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/logo.png";

function Navbar({ onContactClick }) {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="IvyTech Corporation" className="h-20 w-auto" />
        </div>

        <ul className="flex space-x-8  font-medium text-black">
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#industries"
              className="hover:text-blue-600 transition-colors"
            >
              Industries
            </a>
          </li>
          <li>
            <a
              href="#compliance"
              className="hover:text-blue-600 transition-colors"
            >
              Compliance
            </a>
          </li>
        </ul>

        <Button
          onClick={onContactClick}
          text="Partner With Us"
          icon={<ArrowRight size={18} />}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
        />
      </div>
    </nav>
  );
}

export default Navbar;
