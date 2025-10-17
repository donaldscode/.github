'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Factory, Brain, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const [metrics, setMetrics] = useState({
    scrapReduction: 0,
    energySavings: 0,
    cycleTimeImprovement: 0,
    firstPassYield: 0
  })

  useEffect(() => {
    // Animate metrics on load
    const timer = setTimeout(() => {
      setMetrics({
        scrapReduction: 23,
        energySavings: 18,
        cycleTimeImprovement: 12,
        firstPassYield: 94
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Eliminate Manufacturing Waste
            <span className="block text-primary-600">Through Causal AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WDBX and AbiSim technology identify root causes of manufacturing defects and waste, 
            delivering measurable improvements in efficiency, quality, and sustainability.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn-primary text-lg px-8 py-4">
              Start Your Pilot <ArrowRight className="inline ml-2" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Proven Results in Pilot Deployments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="metric-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {metrics.scrapReduction}%
              </div>
              <div className="text-secondary-600 font-medium">Scrap Reduction</div>
            </motion.div>
            
            <motion.div 
              className="metric-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {metrics.energySavings}%
              </div>
              <div className="text-secondary-600 font-medium">Energy Savings</div>
            </motion.div>
            
            <motion.div 
              className="metric-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {metrics.cycleTimeImprovement}%
              </div>
              <div className="text-secondary-600 font-medium">Cycle Time Improvement</div>
            </motion.div>
            
            <motion.div 
              className="metric-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {metrics.firstPassYield}%
              </div>
              <div className="text-secondary-600 font-medium">First-Pass Yield</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Revolutionary Technology Stack
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our proprietary WDBX causal AI and AbiSim digital twin platform 
              work together to optimize manufacturing processes in real-time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                WDBX: Causal Backtrace Technology
              </h3>
              <p className="text-secondary-600 mb-6">
                Unlike traditional correlation-based approaches, WDBX identifies true cause-and-effect 
                relationships in manufacturing processes. When defects occur, WDBX traces back through 
                the causal chain to identify root causes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" />
                  <span>Multi-modal sensor fusion</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" />
                  <span>Real-time causal discovery</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-600 mr-3" />
                  <span>Edge computing deployment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <div className="text-center">
                <Brain className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-secondary-900 mb-2">AbiSim Platform</h4>
                <p className="text-secondary-600">
                  Real-time digital twin simulation and optimization platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Massive Market Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card bg-white text-secondary-900">
              <div className="text-3xl font-bold text-primary-600 mb-2">$45B</div>
              <div className="text-secondary-600">Total Addressable Market</div>
            </div>
            <div className="card bg-white text-secondary-900">
              <div className="text-3xl font-bold text-primary-600 mb-2">$12B</div>
              <div className="text-secondary-600">Serviceable Addressable Market</div>
            </div>
            <div className="card bg-white text-secondary-900">
              <div className="text-3xl font-bold text-primary-600 mb-2">$180M</div>
              <div className="text-secondary-600">Serviceable Obtainable Market</div>
            </div>
          </div>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Targeting aerospace, automotive, electronics, and medical device manufacturing 
            where waste reduction and quality optimization are critical.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary-900 mb-6">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            Join leading manufacturers who are already seeing 23% scrap reduction 
            and 18% energy savings with our technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a Demo
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Download Whitepaper
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}