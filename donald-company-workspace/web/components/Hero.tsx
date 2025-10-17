import { HERO_TITLE, HERO_SUBTITLE, CONTACT_EMAIL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="section pt-32 pb-20 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        {HERO_TITLE}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed">
        {HERO_SUBTITLE}
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Demo Request`}
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Request Demo
        </a>
        <a
          href="/technology"
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
