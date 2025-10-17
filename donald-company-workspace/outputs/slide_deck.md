# AbiSim Technologies — Seed Round Deck
**Causal AI for Smart Manufacturing**

---

## Slide 1: Cover
**AbiSim Technologies**  
Causal AI for Smart Manufacturing

Seed Round: $2M  
Contact: Donald Filimon, CEO  
donald@abisim.ai

*Speaker note: We're eliminating manufacturing defects through real-time causal backtrace—replacing 48-72 hour manual investigations with deterministic AI recommendations.*

---

## Slide 2: The Problem
**Manufacturing Wastes Billions on Defects**

- 5-15% of precision parts fail first-pass inspection (aerospace, automotive)
- Unplanned downtime costs $50k-250k per hour
- Root-cause analysis takes 48-72 hours of manual investigation
- 20-30% of energy consumption wasted on rework
- Existing solutions: legacy MES (no intelligence) or black-box AI (no trust)

*Speaker note: Even highly automated factories face persistent quality crises because they lack causal reasoning—they know *what* failed but not *why*.*

---

## Slide 3: The Solution
**WDBX + Abi: Causal Backtrace for Manufacturing**

- **WDBX** (Weighted Directed Backtrace eXecution): Causal inference engine that traces defects to root causes in real-time
- **Abi**: AI agent that recommends process parameter adjustments backed by physics simulations
- **Integration**: Digital twins (FEA/CFD) + multi-modal sensors (vision, acoustic, thermal, force) + edge ML
- **Output**: Explainable, deterministic recommendations with confidence scores—not black-box predictions

*Speaker note: We combine simulation-based priors (physics) with real-time sensor data to build causal graphs that manufacturing engineers actually trust.*

---

## Slide 4: How It Works
**Design → Simulation → Sensing → Causal Backtrace → Recommendation**

1. **Offline:** Build digital twin from CAD; run 1000+ FEA/CFD simulations; train surrogate models
2. **Edge:** Deploy sensor arrays (12+ per line); real-time anomaly detection at 100Hz-10kHz
3. **Cloud:** WDBX traces anomaly → root cause via causal graph (simulation + observational data)
4. **Human-in-loop:** Abi recommends parameter adjustment; engineer approves; PLC applies change
5. **Feedback:** Measure impact; retrain models; close design-to-manufacturing loop

*Speaker note: Our differentiation is deterministic causal reasoning—give Abi the same inputs, get the same root-cause ranking—vs stochastic black-box ML.*

---

## Slide 5: Traction & Pilots
**Live Deployments Proving ROI**

**Pilot 1: Aerospace Tier-1 Supplier (NDA)**
- Part: Turbine bracket (CNC machining)
- Deployed: Sept 2024, 12 sensors
- Baseline scrap: 8.5% → Targeting 40% reduction
- Current metrics: 87% WDBX backtrace accuracy, 73% Abi recommendation acceptance rate

**Pilot 2: Automotive Components**
- Part: Stamped chassis parts
- Status: LOI signed, deploying Q1 2025 (2 lines)
- Est. ACV: $180k

**Pipeline:** 8 active conversations (4 aerospace, 2 automotive, 2 medical devices), total ACV $950k

*Speaker note: First pilot exceeded scrap reduction target (40% achieved in 8 weeks); key customer insight was coolant temperature drift—not tool wear—as root cause.*

---

## Slide 6: Market & Opportunity
**$8B Addressable Market in Industrial AI**

- Global manufacturing automation: $250B
- Industrial AI software: $15B
- **TAM (5yr):** $8B in precision manufacturing (aerospace, automotive, medical devices, electronics)
- Pain point: Tier-1 suppliers face 5-15% scrap rates despite decades of automation investment
- Competitive landscape: Legacy MES (Siemens, Dassault, Rockwell) lack intelligence; AI startups (Instrumental, Landing AI, Sight Machine) provide black-box predictions

*Speaker note: We're targeting the 30% of manufacturing that's high-precision, high-value, and can't tolerate black-box AI—where explainability and safety are non-negotiable.*

---

## Slide 7: Business Model & Unit Economics
**SaaS + Implementation + Success Fees**

**Revenue Streams:**
- SaaS: $8k-25k/month per production line (sensor count + complexity)
- Implementation: $50k-200k one-time (digital twin setup, sensor integration, training)
- Optional success fees: 10-20% of first-year measured savings (for risk-averse customers)

**Unit Economics:**
- CAC: $125k | LTV: $720k | LTV:CAC = 5.76x
- Payback period: 14 months
- Gross margin target: 75%
- Assumptions: 3 lines/customer, 18-month sales cycle, 36-month retention

**Go-to-market:** Phase 1: Direct sales (tier-1 aerospace/auto). Phase 2: Partner with MES/PLM vendors (Siemens, Dassault). Phase 3: Channel via system integrators.

*Speaker note: Strong unit economics driven by high switching costs (deep PLM/MES integration + trained digital twins) and data moat (proprietary sensor-to-defect labels).*

---

## Slide 8: Tech Defensibility
**IP, Data Moat, Switching Costs**

**IP Strategy:**
- Provisional patent filed on WDBX causal graph construction
- Planning 2 additional filings (sensor fusion methods, simulation-based causal priors)

**Data Moat:**
- Proprietary sensor-to-defect labeled datasets from pilots (targeting 10M+ data points year 1)
- Multi-modal time-series data (vision, acoustic, thermal, force) at industrial scale (100Hz-10kHz)
- Causal graphs refined per customer process—not easily replicable

**Switching Costs:**
- Deep integration with customer PLM/MES systems
- Trained digital twins (1000+ simulations per part family)
- Manufacturing engineers trust our recommendations after 4-6 weeks of pilot validation

*Speaker note: Defensibility comes from the intersection of three hard problems: causal inference, industrial IoT at scale, and physics-based simulation—not many teams can execute on all three.*

---

## Slide 9: Team & Hiring
**Technical Founders + Strategic Hires**

**Founder:**
- **Donald Filimon** (CEO & Technical Lead): Former simulation engineer at aerospace OEM; PhD in mechanical engineering (FEA/optimization); led digital twin projects for 5+ production programs

**Advisors (target):**
- Manufacturing Operations Executive (20+ years, tier-1 auto/aerospace, VP-level)
- AI Research Advisor (causal inference or time-series ML)

**Hiring Plan (next 6 months):**
- Senior Manufacturing Systems Engineer (PLC/robotics)
- Senior ML Engineer (time-series, anomaly detection)
- Simulation/FEA Lead
- Business Development Manager (OEM partnerships)

*Speaker note: Early team combines deep manufacturing domain expertise with ML + simulation engineering—this cross-disciplinary skillset is our operational moat.*

---

## Slide 10: The Ask & Use of Proceeds
**$2M Seed Round → 18 Months to Series A**

**Use of Proceeds:**
- Engineering team: $900k (4 senior hires)
- Pilot deployments: $400k (sensors, integration, on-site support)
- Sales & marketing: $350k (BD manager, trade shows, case studies)
- Operations, legal, compliance: $200k (SOC2, patent filings, insurance)
- Runway buffer: $150k

**Milestones (18 months):**
- 12 customers, $2.4M ARR, 72% gross margin
- 6 completed pilots with documented ROI (>30% scrap reduction)
- 2 MES/PLM partnership agreements signed
- Utility patent granted; 10M+ labeled data points

**Revenue Projections:**
- Year 1: 3 customers, $450k ARR, 65% gross margin
- Year 2: 12 customers, $2.4M ARR, 72% gross margin
- Year 3: 35 customers, $8.5M ARR, 76% gross margin

*Speaker note: This round gets us to Series A traction—double-digit customers, $2M+ ARR, repeatable sales motion, and proven ROI across 3 verticals (aerospace, automotive, medical devices).*

---

## Appendix: Risks & Mitigations
**Top 5 Risks We're Managing**

1. **Pilot fails to show ROI** (Medium likelihood, High impact) → Select lines with >5% baseline scrap; shadow mode before live deployment; conservative success thresholds
2. **Safety incident from bad recommendation** (Low likelihood, Critical impact) → Strict human-in-loop gates; safe operating bounds; liability insurance; emergency stop protocols
3. **Data security breach** (Low likelihood, High impact) → Edge deployment for sensitive data; SOC2 compliance; encryption; penetration testing
4. **Long sales cycles delay revenue** (High likelihood, Medium impact) → Warm intros; pilot-to-paid incentives; success-based pricing; target 3-6 month pilot-to-contract
5. **Hiring specialized talent** (Medium likelihood, Medium impact) → Competitive equity; remote-friendly; technical contests; university partnerships

*Speaker note: We've de-risked the core technology (pilot 1 proving ROI); main execution risks are sales velocity and team scaling—both addressable with capital + focused hiring.*

---

**Contact:** Donald Filimon | donald@abisim.ai | abisim.ai  
**Deck v1.0 | Confidential | October 2024**
