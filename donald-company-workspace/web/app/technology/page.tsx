import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Technology() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="section pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Technology</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            How WDBX + Abi delivers causal AI for manufacturing
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">WDBX: Weighted Directed Backtrace eXecution</h2>
            <p className="text-lg mb-4">
              WDBX is our proprietary causal inference engine that traces manufacturing anomalies
              back to root causes by constructing weighted directed graphs from two data sources:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li><strong>Digital twin simulations:</strong> FEA/CFD models encoding physics-based relationships</li>
              <li><strong>Real-time sensor data:</strong> Vision, acoustic, thermal, and force sensors at 100Hz-10kHz</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Abi: Your Manufacturing AI Agent</h2>
            <p className="text-lg mb-4">
              Abi is the AI agent that manufacturing engineers interact with. When an anomaly is detected,
              Abi:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-lg ml-4">
              <li>Triggers WDBX backtrace to identify root causes</li>
              <li>Queries digital twin for causal relationships</li>
              <li>Correlates with real-time sensor anomalies</li>
              <li>Ranks interventions by confidence × predicted impact</li>
              <li>Recommends parameter adjustments with explanations</li>
              <li>Waits for human approval before actuation</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Architecture</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-lg mb-4">
                <strong>Edge Layer:</strong> Real-time sensor processing, local anomaly detection models
              </p>
              <p className="text-lg mb-4">
                <strong>Cloud Layer:</strong> WDBX causal engine, digital twin simulations, model training
              </p>
              <p className="text-lg">
                <strong>Data Flow:</strong> Sensor data → edge processing → anomaly flags → WDBX backtrace →
                Abi recommendations → human approval → actuation
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Defensibility</h2>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li><strong>IP:</strong> Provisional patent filed on WDBX causal graph construction</li>
              <li><strong>Data moat:</strong> Proprietary sensor-to-defect labeled datasets (10M+ data points expected year 1)</li>
              <li><strong>Switching costs:</strong> Deep integration with customer PLM/MES and trained digital twins</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
