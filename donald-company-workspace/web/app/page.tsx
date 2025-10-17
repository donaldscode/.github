import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Features from "@/components/Features";
import AbiSimCanvas from "@/components/AbiSimCanvas";
import CTA from "@/components/CTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Metrics />
      <Features />
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live AbiSim Visualization</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Watch WDBX trace a manufacturing anomaly to its root cause in real-time
          </p>
        </div>
        <AbiSimCanvas />
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
