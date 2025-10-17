import { CONTACT_EMAIL } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="section bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Eliminate Manufacturing Defects?
      </h2>
      <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
        Join aerospace and automotive leaders using AbiSim to reduce scrap rates by 30-40%
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Pilot Request`}
          className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Request Pilot
        </a>
        <a
          href="/careers"
          className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
        >
          Join Our Team
        </a>
      </div>
    </section>
  );
}
