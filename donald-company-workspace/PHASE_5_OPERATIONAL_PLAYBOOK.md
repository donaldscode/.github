# Phase 5: Pilot, Hiring & VC Operational Playbook

## 5.1 — Pilot Setup (First Production Pilot)

### Step-by-Step Pilot Deployment

#### 1. Select Part & Partner
**Objective:** Identify ideal pilot line with clear KPI pain

**Criteria:**
- Instrumented sensors already present OR budget for sensor deployment
- Baseline scrap rate >5% (measurable improvement opportunity)
- Clear KPI tracking: scrap rate, cycle time, energy per part, first-pass yield
- Manufacturing engineer champion who trusts data-driven decisions
- Target sectors: Aerospace brackets/components, automotive tier-1 stamping, medical device machining

**Action Items:**
- [ ] Review pipeline conversations (current: 8 active, 4 aerospace, 2 automotive, 2 medical devices)
- [ ] Prioritize partners with: (a) warm intro, (b) existing sensor infrastructure, (c) VP-level sponsor
- [ ] Schedule site visit to assess line readiness

---

#### 2. LOI & Data Access
**Objective:** Secure legal framework and sensor data access

**Required Agreements:**
- Limited LOI for pilot (60-90 days)
- Data access agreement: sensor feeds (vision, acoustic, temp, force), anonymization requirements
- IP ownership: clarify that trained models remain AbiSim property; customer owns their data
- Liability insurance: confirm coverage for incorrect recommendations (human-in-loop gates mandatory)

**Action Items:**
- [ ] Send pilot LOI template (include success metrics, timeline, cost structure)
- [ ] Negotiate data access: prefer edge deployment where processing happens on-prem
- [ ] Obtain sensor feed specs: sampling rates, protocols (OPC-UA, Modbus), network access

---

#### 3. Deploy Digital Twin
**Objective:** Map CAD → simulation inputs; build surrogate models

**Steps:**
1. **Import CAD model** (SolidWorks, Siemens NX, CATIA)
2. **Parameterize design variables** (12-20 vars typical: wall thickness, hole diameter, rib geometry)
3. **Run 100+ FEA/CFD simulations** (vary design + process params)
4. **Train surrogate model** (neural network or Gaussian process; target >90% R² validation accuracy)
5. **Extract causal priors** (physics relationships: e.g., wall thickness < 2mm → stress concentration 3x)

**Timeline:** 2-3 weeks  
**Owner:** Simulation/FEA Lead + CEO

**Action Items:**
- [ ] Request CAD files + manufacturing drawings from customer
- [ ] Set up simulation pipeline (Ansys/Abaqus/COMSOL + Python automation)
- [ ] Validate surrogate accuracy against 10% holdout FEA runs
- [ ] Document causal graph priors for WDBX integration

---

#### 4. Deploy Abi in Recommendation Mode
**Objective:** Integrate sensors, run WDBX backtrace, generate recommendations (no auto-apply)

**Steps:**
1. **Sensor integration:**
   - Deploy 12+ sensors per line (vision, acoustic, thermal, force)
   - Configure edge gateway (NVIDIA Jetson AGX or industrial PC)
   - Integrate with PLC via OPC-UA or Modbus
2. **Shadow mode (weeks 5-6):**
   - Run WDBX in parallel: log recommendations but don't apply
   - Collect 100-200 parts of data (validate backtrace accuracy)
   - Tune confidence thresholds
3. **Live mode (weeks 7-8):**
   - Enable Abi recommendations with human-in-loop approval
   - Manufacturing engineer reviews on shop-floor tablet
   - Track acceptance rate, false positives, safety incidents

**Timeline:** 4-6 weeks  
**Owner:** Manufacturing Systems Engineer + CEO

**Action Items:**
- [ ] Order sensors (Cognex/Keyence vision, ultrasonic mics, thermocouples, load cells)
- [ ] Configure edge ML pipeline (<100ms inference latency)
- [ ] Train manufacturing engineers on Abi interface
- [ ] Define "safe operating bounds" with customer (e.g., spindle speed ±10% max)

---

#### 5. Measure KPIs
**Objective:** Track pilot performance and log all data for case study

**Key Metrics:**
- **Scrap rate:** Baseline vs target (e.g., 8.5% → 5.1% = 40% reduction)
- **Cycle time:** Baseline vs optimized (e.g., 185s → 172s = 7% improvement)
- **Energy per part:** kWh before/after
- **First-pass yield:** % parts passing final inspection without rework
- **WDBX backtrace accuracy:** % anomalies traced to correct root cause (target >85%)
- **Abi recommendation acceptance rate:** % recommendations approved by engineers (target >70%)
- **False positive rate:** % Abi flags that don't result in defects (target <5%)

**Action Items:**
- [ ] Set up Grafana/Tableau dashboard for real-time KPI tracking
- [ ] Log every recommendation + approval/rejection + outcome
- [ ] Weekly check-ins with customer manufacturing engineer

---

#### 6. Run WDBX Backtrace on Anomalies
**Objective:** Document root-cause analysis for every defect

**Workflow:**
1. Vision system detects surface crack → triggers Abi
2. Abi queries WDBX: "Given crack location (x,y,z), what are top 5 causal factors?"
3. WDBX correlates sensor data (past 5 min) with digital twin priors
4. WDBX ranks interventions by confidence × predicted impact
5. Abi recommends: "Reduce spindle speed by 8% (87% confidence, 35% defect reduction expected)"
6. Engineer approves → PLC adjusts spindle speed → log outcome

**Action Items:**
- [ ] Create root-cause log template (anomaly type, WDBX top-3 causes, intervention applied, outcome)
- [ ] Review 10 sample backtrace cases with customer for validation

---

#### 7. Deliver Pilot Report
**Objective:** Package results for customer testimonial + sales case study

**Report Contents:**
- Executive summary (1-page)
- Baseline vs optimized KPIs (charts + before/after numbers)
- 3-5 deep-dive root-cause case studies
- ROI analysis: scrap cost savings, cycle time value, payback period
- Next steps: pilot-to-paid conversion, expansion to additional lines
- Customer testimonial (quote from manufacturing engineer or VP Ops)

**Timeline:** Deliver within 2 weeks of pilot completion  
**Owner:** CEO + Marketing (if hired) / BD Manager

**Action Items:**
- [ ] Draft pilot report template
- [ ] Request customer approval for case study + testimonial (anonymized if needed)
- [ ] Create 1-page case study PDF for sales deck

---

## 5.2 — Hiring (First Hires)

### Priority Roles

#### 1. Senior Manufacturing Systems Engineer (PLC/Robotics)
**Why this hire first:** Pilot deployments bottlenecked on sensor integration + PLC connectivity

**Responsibilities:**
- Lead on-site pilot deployments (sensor installation, PLC programming, operator training)
- Integrate Abi with customer PLCs (Rockwell, Siemens, ABB, Fanuc)
- Design edge sensor arrays and real-time actuation protocols
- Build internal tools for sensor QA, calibration, diagnostics

**Key Skills:**
- 5+ years in manufacturing systems / automation / controls engineering
- Deep PLC expertise (Rockwell/Allen-Bradley, Siemens S7, Schneider)
- Industrial networking (OPC-UA, Modbus, EtherNet/IP)
- Hands-on with sensors: vision, force/torque, thermocouples, accelerometers

**Compensation:** $130k-180k base + 0.3%-0.8% equity

---

#### 2. Senior ML Engineer (Time-Series, Anomaly Detection)
**Why this hire:** Scale ML pipeline to 10+ production lines; improve model accuracy

**Responsibilities:**
- Design time-series anomaly detection models for multi-modal sensor data
- Build causal inference pipelines integrating WDBX engine
- Develop sensor fusion algorithms (edge ML, <100ms latency)
- Implement model monitoring, A/B testing, continuous improvement

**Key Skills:**
- 5+ years ML engineering, 2+ years production systems
- Deep expertise in time-series (LSTM, Transformers, state-space models)
- PyTorch/TensorFlow, Python, SQL, Git
- Sensor data / signal processing / IoT experience

**Compensation:** $140k-190k base + 0.25%-0.75% equity

---

#### 3. Simulation/FEA Lead
**Why this hire:** Build digital twins faster; reduce simulation turnaround to <1 hour

**Responsibilities:**
- Build digital twin models from customer CAD (FEA/CFD for machining, stamping, welding)
- Train surrogate models on 1000+ design/process variations per part family
- Integrate simulation outputs into WDBX causal graphs
- Develop rapid simulation pipelines: CAD → mesh → solve → postprocess

**Key Skills:**
- 5+ years in FEA/CFD (Ansys, Abaqus, LS-DYNA, COMSOL)
- Expertise in structural mechanics, thermal analysis, or fluid dynamics
- Parameterized CAD (SolidWorks API, Siemens NX scripting)
- Python for simulation automation

**Compensation:** $130k-180k base + 0.3%-0.8% equity

---

#### 4. Business Development / OEM Partnerships Manager
**Why this hire:** Scale sales pipeline; establish MES/PLM vendor partnerships

**Responsibilities:**
- Build pipeline: outreach to tier-1 aerospace/automotive manufacturers
- Manage pilot-to-paid conversions
- Establish partnerships with MES/PLM vendors (Siemens, Dassault, Rockwell)
- Attend trade shows, produce case studies, manage CRM

**Key Skills:**
- 5+ years in B2B sales or partnerships (industrial automation, MES, or similar)
- Existing relationships with tier-1 manufacturers or MES vendors
- Track record closing $100k+ deals (18-month sales cycles)

**Compensation:** $120k-160k base + 0.2%-0.5% equity + commission (10% of ACV)

---

### Interview Flow (All Roles)

**Stage 1: Recruiter Screen (30 min)**
- Mission fit: Why manufacturing AI? Why causal reasoning?
- Background review: key projects, technical depth
- Logistics: compensation expectations, timeline, location preference

**Stage 2: Take-Home Problem (90 min)**
- Role-specific technical challenge:
  - **ML Engineer:** Sensor fusion or anomaly detection on real industrial data
  - **Manufacturing Engineer:** PLC integration design or sensor deployment plan
  - **Simulation Lead:** Surrogate modeling or rapid FEA pipeline design
  - **BD Manager:** Mock pilot proposal + ROI analysis
- **We pay $200 for completed submissions** (respect candidates' time)

**Stage 3: Technical Deep Dive (90 min)**
- Architecture design discussion
- Systems thinking: how would you scale this to 100 lines?
- Problem-solving: walk through a real pilot challenge (sensor failure, model drift, etc.)

**Stage 4: Team Pairing Session (60 min)**
- Collaborative debugging or feature implementation
- Meet potential teammates
- Assess code quality, communication, teamwork

**Stage 5: Leadership & Culture Interview (45 min)**
- Meet CEO (Donald)
- Discuss values, long-term vision, ownership expectations
- Assess mission alignment

**Stage 6: Offer and Negotiation**
- Move fast: 48-72 hours after final interview
- Transparent negotiation: base, equity, start date, remote/hybrid

**Timeline:** 1-2 weeks from application to offer

---

### Compensation Philosophy

**Principles:**
- **Market-competitive base:** 75th percentile for Bay Area / remote senior roles
- **Meaningful equity:** Early hires (first 5-10) get 0.25%-0.8% depending on role + seniority
- **Benefits:** Health/dental/vision (90% premium coverage), 401k (4% match), flexible vacation (3+ weeks)
- **Perks:** Learning budget ($2k/year), latest hardware, factory visits

**Equity Vesting:**
- 4-year vesting, 1-year cliff
- Early exercise available
- 409A valuation: $0.10/share (post-seed will increase)

---

## 5.3 — VC Approach & Materials

### Deck Content (10 Slides)
✅ **Already created:** See `outputs/slide_deck.md`

**Key Slides:**
1. Cover
2. The Problem (manufacturing waste, 5-15% scrap, 48-72h root-cause analysis)
3. The Solution (WDBX + Abi: causal backtrace)
4. How It Works (design → simulation → sensing → backtrace → recommendation)
5. Traction & Pilots (aerospace: 8.5% → 5.1% scrap; automotive LOI signed)
6. Market & Opportunity ($8B TAM, legacy MES vs black-box AI)
7. Business Model & Unit Economics (LTV:CAC = 5.76x, 14-month payback)
8. Tech Defensibility (IP, data moat, switching costs)
9. Team & Hiring (founder + 4 key hires in next 6 months)
10. The Ask ($2M seed → 18 months → Series A at $2.4M ARR)

---

### Due Diligence Packet

**Contents:**
1. **Code repo access** (non-sensitive modules):
   - Open-source sensor fusion helpers
   - Simulation pipeline (anonymized)
   - Model monitoring dashboard screenshots
2. **Pseudonymized pilot data:**
   - Anonymized sensor time-series (remove part IDs, customer names)
   - KPI charts (before/after scrap rates, cycle times)
   - Root-cause case studies (3-5 examples)
3. **Data Access & IP Terms (DAL):**
   - Standard customer data agreement template
   - IP ownership: models = AbiSim, data = customer, trained models = AbiSim
   - Security: SOC2 roadmap, encryption specs, penetration test results
4. **Financial model:**
   - Revenue projections (3-year: $450k → $2.4M → $8.5M ARR)
   - Unit economics assumptions (CAC, LTV, payback, gross margin)
   - Use of proceeds breakdown
5. **Patent filings:**
   - Provisional patent abstract (WDBX causal graph construction)
   - Planned filings: sensor fusion methods, simulation-based causal priors

---

### Investor Targets

**Stage:** Seed ($2M round)

**Target Investor Profile:**
- **Sector focus:** Deep tech, industrial AI, manufacturing automation, enterprise SaaS
- **Check size:** $500k-1M lead; $100k-250k angels/syndicates
- **Value-add:** Intros to tier-1 manufacturers, OEM partnerships, MES/PLM vendor connections

**Top Target VCs:**
- **Industrial AI specialists:** Energize Ventures, Eclipse Ventures, Foundry Group
- **Enterprise SaaS:** Bessemer, Lightspeed, Accel (enterprise practice)
- **Deep tech:** DCVC, Lux Capital, Prime Movers Lab
- **Strategic:** Siemens Next47, Dassault Ventures, Rockwell Automation Ventures

**Warm Intro Strategy:**
- Leverage pilot customer intros (aerospace supplier → their VC connections)
- Technical advisors: recruit AI research advisor with VC network
- Trade shows: Hannover Messe, Automate, IMTS (meet strategic investors)

---

### Pitch Cadence

**Pre-meeting prep:**
- [ ] Pilot metrics updated (latest scrap rate, acceptance rate, case studies)
- [ ] Deck customized (if strategic investor, emphasize partnership potential)
- [ ] Due diligence packet ready

**Meeting structure (45-60 min):**
- 15 min: Deck presentation (focus on traction, unit economics, defensibility)
- 15 min: Q&A (anticipate: "Why not black-box ML?", "How do you scale?", "What's your data moat?")
- 10 min: Live demo (AbiSim canvas or recorded pilot video)
- 5 min: Next steps

**Follow-up (within 24 hours):**
- Send: Deck PDF, pilot case study, due diligence packet (if requested)
- Offer: Pilot visit invitation ("See Abi on a production line")

---

## 5.4 — Risk & Mitigation Checklist

### Top 5 Risks (from `canonical.json`)

#### 1. Pilot Fails to Show Measurable ROI
**Likelihood:** Medium | **Impact:** High

**Mitigation:**
- [ ] Select lines with baseline scrap >5% (clear improvement opportunity)
- [ ] Implement robust sensor QA (validate 95%+ uptime before live mode)
- [ ] Run 4-6 week shadow mode before applying recommendations
- [ ] Set conservative success thresholds (20% improvement = win)
- [ ] Weekly check-ins with customer to address blockers early

---

#### 2. Safety Incident from Incorrect Abi Recommendation
**Likelihood:** Low | **Impact:** Critical

**Mitigation:**
- [ ] Strict human-in-loop gates: ALL parameter changes require approval
- [ ] Define safe operating bounds per process (e.g., spindle speed ±10% max)
- [ ] Liability insurance: $2M+ coverage for product liability
- [ ] Emergency stop protocols: Abi can suggest but never auto-apply critical changes
- [ ] Log all recommendations + approvals + outcomes (audit trail)

---

#### 3. Customer Data Security Breach
**Likelihood:** Low | **Impact:** High

**Mitigation:**
- [ ] Edge deployment: sensitive processing happens on-prem (customer network)
- [ ] SOC2 compliance roadmap: start audit Q1 2025
- [ ] Encryption: at rest (AES-256) and in transit (TLS 1.3)
- [ ] Annual penetration testing (hire external firm)
- [ ] Clear data ownership contracts: customer owns sensor data, AbiSim owns models

---

#### 4. Long Sales Cycles Delay Revenue
**Likelihood:** High | **Impact:** Medium

**Mitigation:**
- [ ] Prioritize warm intros (existing pilot customer referrals)
- [ ] Offer pilot-to-paid conversion incentives (waive first month SaaS fee if signed within 30 days)
- [ ] Success-based pricing: reduce upfront risk (10-20% of first-year savings)
- [ ] Target 3-6 month pilot-to-contract timeline (set clear milestones)
- [ ] Expand within existing customers (start 1 line → scale to 3+ lines)

---

#### 5. Difficulty Hiring Specialized Talent (Manufacturing + ML + Simulation)
**Likelihood:** Medium | **Impact:** Medium

**Mitigation:**
- [ ] Competitive equity grants (0.25%-0.8% for early hires)
- [ ] Highlight mission-driven work (your code prevents real defects)
- [ ] Sponsor technical contests (Kaggle-style challenge using sanitized dataset, reward winners with interviews)
- [ ] Partner with universities (co-op programs with ME/CS departments)
- [ ] Remote-first for specialized roles (widen talent pool beyond SF Bay Area)

---

## Next Steps (Immediate Actions)

### Week 1-2: Finalize Seed Round Materials
- [ ] Update pitch deck with latest pilot metrics (8.5% → 5.1% scrap rate)
- [ ] Create 1-page executive summary (investor memo excerpt)
- [ ] Record 2-min demo video (Abi recommending parameter adjustment + engineer approval)
- [ ] Build target investor list (20 VCs, prioritize 5 with warm intros)

### Week 3-4: Pilot Execution
- [ ] Complete aerospace pilot and deliver results report
- [ ] Secure customer testimonial + case study approval
- [ ] Deploy automotive pilot (2 lines, LOI already signed)
- [ ] Hire Senior Manufacturing Systems Engineer (offer extended)

### Month 2-3: Fundraising Sprint
- [ ] Pitch 15-20 VCs (3-4 meetings per week)
- [ ] Target: 3-5 term sheets by end of month 3
- [ ] Negotiate lead investor + terms
- [ ] Close $2M seed round

### Month 3-4: Team Scaling
- [ ] Onboard Senior ML Engineer (offer extended)
- [ ] Hire Simulation/FEA Lead (final interviews in progress)
- [ ] Hire BD Manager (post-funding close)

### Month 4-6: Scale Pilots
- [ ] Deploy 2 additional pilots (medical device + aerospace #2)
- [ ] Expand aerospace pilot #1 to 3 lines (pilot-to-paid conversion)
- [ ] Reach $450k ARR (3 customers, avg 3 lines each)

---

## Appendix: Quick Reference

### Pilot Success Criteria
- [ ] Scrap rate reduction: >30%
- [ ] WDBX backtrace accuracy: >85%
- [ ] Abi acceptance rate: >70%
- [ ] Zero safety incidents
- [ ] Customer testimonial secured

### Hiring Success Criteria
- [ ] 4 key hires onboarded within 6 months post-funding
- [ ] All hires have 5+ years relevant experience
- [ ] Team diversity: 30%+ underrepresented backgrounds (gender, race, geography)

### Fundraise Success Criteria
- [ ] $2M seed round closed
- [ ] 18-month runway secured
- [ ] Lead investor brings OEM/MES vendor connections
- [ ] Board seat: 1 founder, 1 lead investor, 1 independent (recruit ops advisor)

---

**Document Owner:** Donald Filimon (CEO)  
**Last Updated:** 2024-10-16  
**Next Review:** Every 30 days or upon milestone completion
