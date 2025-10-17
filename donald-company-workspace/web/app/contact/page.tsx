import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, CAREERS_EMAIL } from "@/lib/constants";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="section pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Ready to eliminate manufacturing defects? Get in touch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">General Inquiries</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For pilot requests, partnerships, or general questions
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Email {CONTACT_EMAIL}
              </a>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Careers</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Interested in joining our team?
              </p>
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Email {CAREERS_EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Request a Demo</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              See WDBX + Abi in action on your manufacturing line. We&apos;ll show you:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
              <li>✓ Real-time anomaly detection on multi-modal sensor data</li>
              <li>✓ WDBX causal backtrace from defect to root cause</li>
              <li>✓ Abi recommendations with confidence scores and predicted impact</li>
              <li>✓ Integration with your PLCs, SCADA, and MES systems</li>
              <li>✓ ROI projections based on your current scrap rates and cycle times</li>
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Demo Request&body=Please include:%0D%0A- Company name%0D%0A- Manufacturing process (e.g., CNC machining, stamping, welding)%0D%0A- Current scrap rate or quality challenge%0D%0A- Preferred demo date/time`}
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
