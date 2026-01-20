import Link from "next/link";
import { contactInfo } from "@/lib/data/company";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a4d2e' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#d4a029' }}>
              B&R Marine Energy
            </h3>
            <p className="text-white/80 text-sm">
              Leading mining company in Nigeria specializing in gold exploration and mineral extraction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#d4a029' }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white/80 hover:text-white text-sm">About Us</Link>
              <Link href="/operations" className="text-white/80 hover:text-white text-sm">Operations</Link>
              <Link href="/projects" className="text-white/80 hover:text-white text-sm">Projects</Link>
              <Link href="/equipment" className="text-white/80 hover:text-white text-sm">Equipment</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#d4a029' }}>
              Resources
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/minerals" className="text-white/80 hover:text-white text-sm">Minerals</Link>
              <Link href="/investment" className="text-white/80 hover:text-white text-sm">Investment</Link>
              <Link href="/contact" className="text-white/80 hover:text-white text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#d4a029' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              {/* Emails */}
              <div className="space-y-1">
                <a 
                  href={`mailto:${contactInfo.contact.email}`} 
                  className="text-white/80 hover:text-white block"
                >
                  {contactInfo.contact.email}
                </a>
                <a 
                  href={`mailto:${contactInfo.contact.emailAlt}`} 
                  className="text-white/80 hover:text-white block"
                >
                  {contactInfo.contact.emailAlt}
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-1 mt-2">
                <a 
                  href={`tel:${contactInfo.contact.whatsapp}`} 
                  className="text-white/80 hover:text-white block"
                >
                  {contactInfo.contact.whatsapp} <span className="text-white/60">(WhatsApp)</span>
                </a>
                <a 
                  href={`tel:${contactInfo.contact.phones[1]}`} 
                  className="text-white/80 hover:text-white block"
                >
                  {contactInfo.contact.phones[1]} <span className="text-white/60">(UK)</span>
                </a>
              </div>

              {/* Location */}
              <p className="text-white/80 mt-2">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p style={{ color: '#d4a029' }}>
            © 2025 B&R Marine Energy Logistics Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}