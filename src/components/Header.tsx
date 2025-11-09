import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../logo.jpg";
interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Admissions", id: "admissions" },
    { name: "Departments", id: "departments" },
    { name: "Placements", id: "placements" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavClick("home")}
          >
            <img src={logo} alt="DYPCET Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl text-gray-900">DYPCET</h1>
              <p className="text-xs text-gray-600">Shaping Future Leaders</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors hover:text-blue-600 ${
                  currentPage === item.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm transition-colors hover:text-blue-600 ${
                  currentPage === item.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
