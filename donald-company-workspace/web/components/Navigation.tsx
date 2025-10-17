"use client";

import Link from "next/link";
import { COMPANY_NAME } from "@/lib/constants";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl gradient-text">
            {COMPANY_NAME}
          </Link>
          <div className="flex gap-8">
            <Link href="/technology" className="hover:text-blue-600 transition-colors">
              Technology
            </Link>
            <Link href="/careers" className="hover:text-blue-600 transition-colors">
              Careers
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
