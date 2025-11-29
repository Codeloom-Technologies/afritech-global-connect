import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-lg font-bold">Afritech Symposia</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Bridging Languages. Connecting Africa to the World.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Conference Interpreting</li>
              <li className="text-sm text-primary-foreground/80">Document Translation</li>
              <li className="text-sm text-primary-foreground/80">Remote Interpreting</li>
              <li className="text-sm text-primary-foreground/80">Event Language Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@afritechsymposia.com" className="hover:text-accent transition-colors">
                  info@afritechsymposia.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+2348034526617" className="hover:text-accent transition-colors">
                  +234 803 452 6617
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kaduna, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Afritech Symposia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
