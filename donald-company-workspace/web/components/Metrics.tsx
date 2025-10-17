import { METRICS } from "@/lib/constants";

export default function Metrics() {
  return (
    <section className="section bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Proven Results from Live Pilots</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Real metrics from aerospace and automotive production lines
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {METRICS.map((metric, index) => (
          <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">
              {metric.value}
            </div>
            <div className="text-lg font-semibold mb-2">{metric.label}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {metric.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
