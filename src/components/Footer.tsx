import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white mb-4">DYPCET</h3>
            <p className="text-sm">
              Committed to providing world-class education and shaping the leaders of tomorrow.
            </p>
            <div className="flex gap-4 mt-6">
              <Facebook size={20} className="cursor-pointer hover:text-blue-500 transition-colors" />
              <Twitter size={20} className="cursor-pointer hover:text-blue-400 transition-colors" />
              <Linkedin size={20} className="cursor-pointer hover:text-blue-600 transition-colors" />
              <Instagram size={20} className="cursor-pointer hover:text-pink-500 transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Academic Calendar</li>
              <li className="hover:text-white cursor-pointer transition-colors">Student Portal</li>
              <li className="hover:text-white cursor-pointer transition-colors">Faculty</li>
              <li className="hover:text-white cursor-pointer transition-colors">Research</li>
              <li className="hover:text-white cursor-pointer transition-colors">Career Services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Library</li>
              <li className="hover:text-white cursor-pointer transition-colors">Campus Life</li>
              <li className="hover:text-white cursor-pointer transition-colors">Alumni Network</li>
              <li className="hover:text-white cursor-pointer transition-colors">News & Events</li>
              <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Kasaba Bawada, Kolhapur, Maharashtra 416006</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>0231-2601431/32/33.</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>info.dypcet@dypgroup.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 DYPCET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
