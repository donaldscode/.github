import Link from "next/link";
import { COMPANY_NAME, CONTACT_EMAIL, CAREERS_EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl text-white mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm">
              Causal AI for Smart Manufacturing
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/technology" className="hover:text-white">Technology</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">General: {CONTACT_EMAIL}</a></li>
              <li><a href={`mailto:${CAREERS_EMAIL}`} className="hover:text-white">Careers: {CAREERS_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2024 {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
