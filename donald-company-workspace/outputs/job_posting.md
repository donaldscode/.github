# Senior Machine Learning Engineer - Manufacturing AI

**AbiSim Technologies** | San Francisco, CA (Remote-friendly)  
**Type:** Full-time | **Equity:** 0.25%-0.75% | **Salary:** $140k-190k

---

## About AbiSim

We're eliminating manufacturing defects through real-time causal AI. Our product—WDBX + Abi—traces anomalies back to root causes by fusing digital twin simulations with multi-modal sensor data, giving manufacturing engineers deterministic recommendations instead of black-box predictions.

We're live in aerospace and automotive production lines, reducing scrap rates by 30-40% and replacing 48-72 hour manual investigations with real-time causal backtrace. Backed by top investors and technical advisors, we're building the AI infrastructure for the next generation of smart manufacturing.

**Why this matters:** Manufacturing waste costs billions annually. 5-15% of precision parts fail inspection, unplanned downtime costs $50k-250k/hour, and 20-30% of energy goes to rework. We're attacking this at the root cause—literally.

---

## The Role

You'll design and deploy ML systems that process industrial sensor data (vision, acoustic, thermal, force) at 100Hz-10kHz sampling rates, detect anomalies in real-time, and integrate with our proprietary causal inference engine (WDBX). Your models will run on factory floors, preventing real defects and optimizing real production lines.

This is not a research role. You'll ship production ML systems every sprint, collaborate with manufacturing engineers on pilot lines, and see your work deployed on CNC machines, stamping presses, and robotic assembly cells.

---

## What You'll Do

### Core Responsibilities
- **Design and deploy time-series anomaly detection models** for multi-modal sensor data (vision, acoustic, thermal, force) sampled at 100Hz-10kHz on production lines
- **Build and maintain causal inference pipelines** integrating our proprietary WDBX engine—you'll work with structural equation models, DoWhy, and physics-based simulation priors
- **Develop sensor fusion algorithms** that run at the edge (NVIDIA Jetson, industrial PCs) and scale to 100+ production lines
- **Collaborate with manufacturing engineers** to tune model performance on real pilot lines (aerospace, automotive, medical devices)
- **Implement model monitoring, A/B testing, and continuous improvement frameworks**—your models will learn from every recommendation accepted or rejected
- **Contribute to ML infrastructure:** feature stores, model registry, deployment pipelines, edge ML tooling (ONNX, TensorRT)

### Sample Projects (First 6 Months)
- Build multi-modal sensor fusion model for CNC machining lines: combine force sensors (100 Hz), acoustic sensors (10 kHz), and vision cameras (30 fps) to detect tool wear, chatter, and thermal drift
- Deploy edge ML pipeline on NVIDIA Jetson AGX with <100ms inference latency for real-time anomaly alerts
- Train causal inference model to rank root causes: given a detected defect, predict which process parameter adjustment will reduce scrap rate by >30%
- Integrate with customer PLCs (Siemens, Rockwell) via OPC-UA to enable closed-loop actuation (human-approved)
- Build model monitoring dashboard: track precision/recall, recommendation acceptance rate, false positives, latency across 5+ pilot lines

---

## Requirements

### Must-Have
- **5+ years ML engineering experience**, with at least 2 years shipping production ML systems (not just research prototypes)
- **Deep expertise in time-series modeling:** LSTM, Transformers, state-space models, or similar architectures for sequential data
- **Proficiency in PyTorch or TensorFlow**, Python, SQL, Git
- **Experience with sensor data, signal processing, or IoT:** You've worked with noisy, high-frequency data from physical systems (not just clean Kaggle datasets)
- **Strong software engineering practices:** testing, CI/CD, code review, documentation—your code will run on production lines with zero tolerance for crashes
- **Ability to explain complex ML concepts to non-technical stakeholders:** You'll teach manufacturing engineers how to trust your models

### Nice-to-Have (We'll Teach You the Rest)
- Background in manufacturing, robotics, or industrial IoT (CNC machining, stamping, welding, assembly)
- Familiarity with PLC/SCADA systems and industrial protocols (OPC-UA, Modbus, EtherNet/IP)
- Experience with causal inference methods (structural causal models, do-calculus, counterfactuals) or simulation-based modeling (FEA/CFD)
- Knowledge of digital twin technologies or physics-informed neural networks (PINNs)
- Edge ML deployment experience (ONNX, TensorRT, OpenVINO, etc.)

---

## Why Join AbiSim

### 1. **Own Hard Technical Problems**
You'll work on multi-modal sensor fusion, causal inference at scale, edge ML deployment (100Hz-10kHz sampling), and hybrid physics-ML models. These are gnarly, unsolved problems at the intersection of manufacturing, ML, and simulation.

### 2. **See Your Work in Production**
Your models will run on factory floors, preventing real defects and saving real energy. You'll visit aerospace and automotive plants to deploy pilots and tune models alongside manufacturing engineers. No abstract metrics—your KPIs are measured in scrap rate reduction and cycle time improvement.

### 3. **Early Team, Meaningful Equity**
We're pre-Series A. Early hires get 0.25%-0.75% equity and own entire technical modules. You'll shape product, architecture, and culture. If you join now, you'll be among the first 5-10 employees.

### 4. **World-Class Problem, Huge Market**
$8B addressable market in 5 years; tier-1 aerospace and automotive customers; active pilots with measurable traction (8.5% → 5.1% scrap rate in 8 weeks). We're not chasing consumer trends—we're building infrastructure for the physical economy.

### 5. **Technical Excellence + Sustainability**
We solve hard problems with rigorous engineering, but we pace for the long term. Flexible vacation (minimum 3 weeks encouraged), remote-friendly for exceptional candidates, learning budget ($2k/year), and no hero culture.

---

## Interview Process

We respect your time and move quickly:

1. **Recruiter screen (30 min):** Mission fit, background, logistics
2. **Take-home problem (90 min):** Sensor fusion or anomaly detection challenge on real industrial data. We pay $200 for completed submissions.
3. **Technical deep dive (90 min):** Architecture design and ML systems discussion with our founding engineer
4. **Team pairing session (60 min):** Collaborative debugging or feature implementation (you'll meet your potential teammates)
5. **Leadership & culture interview (45 min):** Meet the CEO, discuss values and long-term vision
6. **Offer and negotiation:** We move fast (48-72 hours) and negotiate transparently

**Timeline:** 1-2 weeks from first contact to offer.

---

## Compensation & Benefits

- **Base salary:** $140k-190k (depending on experience and seniority)
- **Equity:** 0.25%-0.75% (early-stage, meaningful ownership)
- **Health insurance:** Medical, dental, vision (we cover 90% of premiums)
- **401k:** Company match up to 4%
- **Vacation:** Flexible (minimum 3 weeks encouraged); parental leave (12 weeks paid)
- **Learning budget:** $2k/year for courses, conferences, books, certifications
- **Hardware:** MacBook Pro or Linux workstation, dual 27" monitors
- **Home office stipend** for remote team members
- **Factory visits:** Occasional travel to deploy pilots and see your work in action

---

## Location & Remote Policy

**Headquarters:** San Francisco, CA  
**Remote policy:** Hybrid-friendly. SF Bay Area presence preferred but open to remote for exceptional candidates. Quarterly in-person sprints required.

**Visa sponsorship:** Open to sponsoring H-1B and other work visas for senior candidates, pending funding close.

---

## Sample KPIs (First 6 Months)

You'll be measured on:
- **Model accuracy on pilot anomaly detection:** >90% precision, >85% recall
- **Recommendation acceptance rate by manufacturing engineers:** >70%
- **Model latency:** <500ms inference time for real-time alerts
- **Code quality:** >80% test coverage; all PRs reviewed and approved
- **Deployment velocity:** Ship model improvements every 2-4 weeks

These aren't aspirational—they're based on our current pilot performance. You'll have support, clear metrics, and direct feedback from manufacturing engineers.

---

## Our Values

- **Technical excellence:** We solve hard problems with rigorous engineering. No shortcuts, no duct tape at scale.
- **Customer obsession:** Manufacturing engineers are our heroes. We build tools they trust, not black boxes they fear.
- **Ownership:** Early team members own entire modules and see direct impact. Your code runs on production lines.
- **Transparency:** Open feedback, shared metrics, honest about risks and unknowns. We learn fast by failing small.
- **Work-life balance:** Sustainable pace; we're building for the long term. No hero culture, no death marches.

---

## Apply

Email **careers@abisim.ai** with:
- Your resume (PDF)
- Brief note (3-5 sentences): Why this problem? Why now? What's the hardest technical challenge you've shipped?
- Link to GitHub / portfolio (optional but appreciated)

We read every application. If you're a fit, we'll respond within 3 business days.

---

**AbiSim is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.**

**Questions?** Email hello@abisim.ai or check out our technical blog at abisim.ai/blog
