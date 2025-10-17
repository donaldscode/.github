# Careers at AbiSim Technologies

## Our Mission
We're eliminating manufacturing defects through real-time causal backtrace and adaptive process control. If you've ever wondered why precision manufacturing still tolerates 5-15% scrap rates despite decades of automation, we're building the answer.

Manufacturing is the backbone of civilization, but it's still plagued by waste, rework, and manual root-cause investigations that take 48-72 hours. We're giving manufacturing engineers a causal AI agent—Abi—that traces anomalies to root causes in real-time and recommends fixes backed by physics simulations, not black-box predictions.

---

## Why Join AbiSim

### 1. **Own Hard Technical Problems**
You'll work on causal inference, multi-modal sensor fusion (vision, acoustic, thermal, force), digital twin simulations (FEA/CFD surrogates), and edge ML deployment at industrial scale (100Hz-10kHz sampling). These are gnarly, unsolved problems at the intersection of manufacturing, ML, and simulation.

### 2. **See Your Work in Production**
Your code will run on factory floors, preventing real defects and saving real energy. You'll visit aerospace and automotive plants to deploy pilots and tune models alongside manufacturing engineers. No abstract metrics—your KPIs are measured in scrap rate reduction and cycle time improvement.

### 3. **Early Team, Meaningful Equity**
We're pre-Series A. Early hires get 0.25%-0.75% equity and own entire technical modules. You'll shape product, architecture, and culture. If you join in the next 6 months, you'll be among the first 5-10 employees.

### 4. **World-Class Problem, Huge Market**
$8B addressable market in 5 years; tier-1 aerospace and automotive customers; active pilots with measurable traction. We're not chasing consumer trends—we're building infrastructure for the physical economy.

### 5. **Technical Excellence + Sustainability**
We solve hard problems with rigorous engineering, but we pace for the long term. Flexible vacation (minimum 3 weeks encouraged), remote-friendly for exceptional candidates, learning budget ($2k/year), and no hero culture. You'll ship meaningful work every sprint without burning out.

---

## Open Roles

### **Senior Machine Learning Engineer - Manufacturing AI**

**Responsibilities:**
- Design and deploy time-series anomaly detection models for multi-modal sensor data (vision, acoustic, thermal, force)
- Build and maintain causal inference pipelines integrating our proprietary WDBX engine
- Develop sensor fusion algorithms that run at the edge (100Hz-10kHz sampling) and scale to 100+ production lines
- Collaborate with manufacturing engineers to tune model performance on real pilot lines
- Implement model monitoring, A/B testing, and continuous improvement frameworks
- Contribute to ML infrastructure: feature stores, model registry, deployment pipelines (MLOps from scratch)

**Required Skills:**
- 5+ years ML engineering experience, 2+ years shipping production ML systems
- Deep expertise in time-series modeling (LSTM, Transformers, state-space models)
- Proficiency in PyTorch or TensorFlow; Python; SQL; Git
- Experience with sensor data, signal processing, or IoT
- Strong software engineering practices: testing, CI/CD, code review
- Ability to explain complex ML concepts to non-technical stakeholders (you'll teach manufacturing engineers how to trust your models)

**Preferred Skills:**
- Background in manufacturing, robotics, or industrial IoT
- Familiarity with PLC/SCADA systems and industrial protocols (OPC-UA, Modbus)
- Experience with causal inference methods or simulation-based modeling
- Knowledge of FEA/CFD or digital twin technologies
- Edge ML deployment experience (ONNX, TensorRT, etc.)

**Sample KPIs (first 6 months):**
- Model accuracy on pilot anomaly detection: >90% precision, >85% recall
- Recommendation acceptance rate by manufacturing engineers: >70%
- Model latency: <500ms inference time for real-time alerts
- Code quality: >80% test coverage; all PRs reviewed and approved
- Deployment velocity: ship model improvements every 2-4 weeks

**Compensation:** $140k-190k base + 0.25%-0.75% equity (depending on experience and seniority). Health, dental, vision, 401k, flexible vacation, remote-friendly.

---

### **Senior Manufacturing Systems Engineer - PLC/Robotics**

**Responsibilities:**
- Integrate Abi with customer PLCs, SCADA systems, and robotic controllers (Rockwell, Siemens, ABB, Fanuc)
- Design and deploy edge sensor arrays (vision, acoustic, thermal, force) on pilot production lines
- Develop real-time actuation protocols with human-in-loop safety gates
- Collaborate with customer manufacturing engineers to define safe operating bounds and tune process parameters
- Lead on-site pilot deployments: sensor installation, network configuration, PLC programming, operator training
- Build internal tools for sensor QA, calibration, and diagnostics

**Required Skills:**
- 5+ years in manufacturing systems, automation, or controls engineering
- Deep expertise with industrial PLCs (Rockwell/Allen-Bradley, Siemens S7, Schneider) and SCADA systems
- Experience with industrial networking (EtherNet/IP, Profinet, OPC-UA, Modbus)
- Hands-on with sensors: vision (Cognex, Keyence), force/torque, thermocouples, accelerometers
- Comfortable in factory environments: safety protocols, troubleshooting on the floor, working with operators
- Strong communication: you'll be the technical bridge between our ML team and customer production teams

**Preferred Skills:**
- Robotics integration (ABB, Fanuc, KUKA, Universal Robots)
- CNC machining, stamping, or assembly line experience
- Familiarity with MES/PLM systems (Siemens Opcenter, Dassault DELMIA)
- Python or C++ for edge processing / data pipelines
- Experience with ISO/aerospace/medical compliance

**Sample KPIs (first 6 months):**
- Lead deployment of 2 pilot lines with full sensor integration and PLC connectivity
- Achieve <1% sensor downtime across all active pilots
- Zero safety incidents; all actuation protocols pass customer safety review
- Train 10+ customer manufacturing engineers on Abi usage
- Document integration playbooks for 3 common PLC/SCADA platforms

**Compensation:** $130k-180k base + 0.3%-0.8% equity. Health, dental, vision, 401k, flexible vacation.

---

### **Simulation / FEA Lead**

**Responsibilities:**
- Build digital twin models from customer CAD: FEA/CFD simulations for manufacturing processes (machining, stamping, casting, welding)
- Train surrogate models on 1000+ design/process variations per part family
- Integrate simulation outputs into WDBX causal graphs (e.g., stress concentrations → defect risk)
- Develop rapid simulation pipelines: parameterized CAD → mesh → solve → postprocess in <1 hour
- Collaborate with ML team to create hybrid physics-ML models
- Work with customers to validate simulation predictions against real production data

**Required Skills:**
- 5+ years in FEA/CFD or simulation engineering (Ansys, Abaqus, LS-DYNA, COMSOL, or similar)
- Expertise in structural mechanics, thermal analysis, or fluid dynamics
- Experience with parameterized CAD (SolidWorks API, Siemens NX, CATIA scripting)
- Python for simulation automation and postprocessing
- Ability to balance accuracy vs speed: we need fast surrogates, not publication-quality meshes
- Strong communication with non-simulation experts (ML engineers, manufacturing engineers)

**Preferred Skills:**
- Manufacturing process simulation: machining (cutting forces, tool wear), stamping (forming), welding (thermal distortion)
- Surrogate modeling / reduced-order models (POD, Kriging, neural network emulators)
- HPC / cloud simulation at scale (AWS Batch, Azure CycleCloud, Rescale)
- Familiarity with ML libraries (scikit-learn, PyTorch) for hybrid modeling

**Sample KPIs (first 6 months):**
- Build digital twins for 3 pilot part families with validated surrogate accuracy (>90% correlation to full FEA)
- Reduce simulation turnaround time to <1 hour per design variation
- Integrate surrogates into WDBX pipeline for real-time root-cause analysis
- Publish 1 technical blog post on causal simulation methods
- Train ML team on simulation workflows and best practices

**Compensation:** $130k-180k base + 0.3%-0.8% equity. Health, dental, vision, 401k, flexible vacation, remote-friendly.

---

## Early Team Culture

**Our values:**
- **Technical excellence:** We solve hard problems with rigorous engineering. No shortcuts, no duct tape at scale.
- **Customer obsession:** Manufacturing engineers are our heroes. We build tools they trust, not black boxes they fear.
- **Ownership:** Early team members own entire modules and see direct impact. Your code runs on production lines.
- **Transparency:** Open feedback, shared metrics, honest about risks and unknowns. We learn fast by failing small.
- **Work-life balance:** Sustainable pace; we're building for the long term. No hero culture, no death marches.

**What to expect:**
- Weekly all-hands with transparent metrics (pilot KPIs, sales pipeline, runway)
- Quarterly in-person sprints (even for remote team members)
- Occasional factory visits to see your work deployed
- Learning budget: $2k/year for courses, conferences, books
- Latest hardware: MacBook Pro / Linux workstation, dual monitors, external display

---

## Location & Remote Policy

**Headquarters:** San Francisco, CA  
**Remote policy:** Hybrid-friendly. SF Bay Area presence preferred but open to remote for exceptional candidates. Quarterly in-person sprints required.

**Visa sponsorship:** We're open to sponsoring H-1B and other work visas for senior candidates, pending funding close and business needs.

---

## Perks & Benefits

- Competitive salary + meaningful early-stage equity (0.25%-0.8% depending on role and seniority)
- Health, dental, vision insurance (we cover 90% of premiums)
- 401k with company match (up to 4%)
- Flexible vacation policy (minimum 3 weeks encouraged)
- Parental leave (12 weeks paid)
- Learning budget: $2k/year for courses, conferences, books, certifications
- Latest hardware: MacBook Pro or Linux workstation, dual 27" monitors
- Home office stipend for remote team members
- Occasional factory visits to deploy pilots and see your work in action

---

## Interview Process

We respect your time and move quickly:

1. **Recruiter screen (30 min):** Mission fit, background, logistics
2. **Take-home problem (90 min):** Role-specific technical challenge (sensor fusion, anomaly detection, PLC integration, or simulation). We pay $200 for completed submissions.
3. **Technical deep dive (90 min):** Architecture design, systems discussion, problem-solving
4. **Team pairing session (60 min):** Collaborative debugging or feature implementation with your potential teammates
5. **Leadership & culture interview (45 min):** Meet the founders, discuss values and long-term vision
6. **Offer and negotiation:** We move fast (48-72 hours) and negotiate transparently

**Timeline:** Typically 1-2 weeks from first contact to offer.

---

## Apply

Email **careers@abisim.ai** with:
- Your resume (PDF)
- Role you're applying for
- Brief note (3-5 sentences): Why this problem? Why now? What's the hardest technical challenge you've shipped?

We read every application. If you're a fit, we'll respond within 3 business days.

---

**AbiSim is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.**
