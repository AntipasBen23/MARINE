import Link from "next/link";
import { contactInfo } from "@/lib/data/company";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(107, 42, 0)' }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
              B&R Marine Energy
            </h3>
            <p className="text-white/80 text-sm">
              Leading mining company in Nigeria specializing in gold exploration and mineral extraction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
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
            <h4 className="font-semibold mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
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
            <h4 className="font-semibold mb-4" style={{ color: 'rgb(224, 151, 65)' }}>
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`mailto:${contactInfo.contact.email}`} className="text-white/80 hover:text-white">
                {contactInfo.contact.email}
              </a>
              <a href={`tel:${contactInfo.contact.direct}`} className="text-white/80 hover:text-white">
                {contactInfo.contact.direct}
              </a>
              <p className="text-white/80">
                Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p style={{ color: 'rgb(224, 151, 65)' }}>
            © 2025 B&R Marine Energy Logistics Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}