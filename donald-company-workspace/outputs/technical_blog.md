# WDBX & Abi: Causal Backtrace for Manufacturing

**By Donald Filimon, CEO & Technical Lead, AbiSim Technologies**

---

Precision manufacturing has a dirty secret: 5-15% of parts fail first-pass inspection, even in highly automated aerospace and automotive facilities. When a defect appears—a stress crack, a dimensional error, a surface finish issue—manufacturing engineers face a 48-72 hour manual investigation to trace the root cause. Was it a worn tool? A temperature drift? A subtle CAD design flaw that cascades through the process chain?

Existing solutions fall into two camps: legacy MES platforms (Siemens Opcenter, Dassault DELMIA) that collect data but lack intelligence, and black-box AI startups that predict defects without explaining why. Manufacturing engineers distrust both. They need causal reasoning: *why* did this part fail, and *what* should we change to prevent it?

We built WDBX (Weighted Directed Backtrace eXecution) to answer that question. Combined with our AI agent Abi, WDBX traces manufacturing anomalies back to root causes in real-time by integrating digital twin simulations with live sensor data. This post explains how it works, walks through a real-world deployment, and shares the engineering challenges we've solved (and still face).

---

## What is WDBX?

WDBX is a causal inference engine that constructs weighted directed graphs mapping design parameters, process settings, environmental factors, and sensor signals to manufacturing outcomes. Think of it as a "call stack" for physical processes: when a defect occurs, WDBX walks backward through the causal chain to identify the most likely root causes.

**Core innovation:** We fuse two data sources that are usually siloed:
1. **Digital twin simulations:** FEA/CFD models that encode physics-based relationships (e.g., cutting force → residual stress → crack propagation)
2. **Real-time sensor data:** Vision, acoustic, thermal, and force sensors sampling at 100Hz-10kHz on production lines

By combining simulated priors (what *should* happen according to physics) with real-time observations (what *is* happening), WDBX builds causal graphs that are both explainable and accurate.

**Key properties:**
- **Deterministic:** Given the same sensor inputs and process state, WDBX returns the same root-cause ranking (no stochastic sampling)
- **Weighted:** Causal edges have confidence scores derived from simulation + historical data
- **Actionable:** Output is a ranked list of interventions (e.g., "Reduce spindle speed by 8%") with predicted impact
- **Human-in-loop:** All recommendations require approval before actuation

---

## How WDBX Integrates with LCM and Digital Twins

### Step 1: Design → Simulation
When a customer provides a CAD model (SolidWorks, Siemens NX, CATIA), we map it into our simulation pipeline:
- **Parameterized CAD:** We identify design variables (wall thickness, fillet radii, material properties)
- **FEA/CFD runs:** We simulate 1000+ variations to build surrogate models (neural network emulators or Kriging interpolators)
- **Causal priors:** We extract physics-based relationships (e.g., "if wall thickness < 2mm, stress concentration increases 3x")

This creates a **design-to-defect causal prior** that WDBX uses during runtime.

### Step 2: Process → Digital Twin
We model the manufacturing process itself:
- **Machining:** Cutting forces, tool wear, thermal expansion, chip formation
- **Stamping:** Forming loads, springback, thinning, wrinkling
- **Welding:** Thermal distortion, residual stress, porosity

Each process module outputs a **process-to-defect causal graph** linking parameters (spindle speed, feed rate, coolant flow) to failure modes.

### Step 3: Real-time Sensing
On the production line, we deploy multi-modal sensor arrays:
- **Vision (Cognex, Keyence):** Surface defects, dimensional errors
- **Acoustic (ultrasonic microphones):** Tool chatter, bearing faults
- **Thermal (thermocouples, IR cameras):** Temperature drift, hotspots
- **Force (load cells, piezo sensors):** Cutting forces, stamping loads

Sensor data flows into our **edge layer** (running on industrial PCs or edge gateways) at 100Hz-10kHz sampling.

### Step 4: WDBX Backtrace in Action
When an anomaly is detected (e.g., vision system flags a surface crack):
1. **Abi triggers WDBX:** Passes sensor data + process state + part ID to the causal engine
2. **WDBX queries digital twin:** "Given this crack location and shape, what are the top 10 causal factors from simulation?"
3. **WDBX correlates with real-time data:** "Which of those factors show abnormal sensor readings in the past 5 minutes?"
4. **WDBX ranks interventions:** "Reducing spindle speed by 8% has 87% confidence to eliminate this crack; alternative: increase coolant flow by 15%"
5. **Abi recommends to human:** Manufacturing engineer reviews, approves, and applies the change via PLC

### Step 5: Continuous Learning
Every recommendation that's accepted (or rejected) becomes training data:
- **Feedback loop:** Did the intervention reduce defects? Log outcome.
- **Model retraining:** Update causal weights and surrogate models weekly.
- **LCM integration:** Feed insights back to design team (e.g., "Parts with fillet radius < 3mm consistently fail at station 4—consider design rule update")

---

## Example Workflow: Aerospace Turbine Bracket

Let's walk through a real pilot deployment (partner under NDA).

**Part:** Titanium turbine bracket for commercial aircraft engines  
**Process:** 5-axis CNC machining (rough + finish passes)  
**Baseline scrap rate:** 8.5% (parts fail final inspection due to stress cracks near mounting holes)  
**Pilot goal:** Reduce scrap by 40%

### Deployment Steps

**Week 1-2: Digital Twin Setup**
- Import CAD model; parameterize 12 design variables (hole diameter, wall thickness, rib geometry)
- Run 800 FEA simulations (static stress analysis + thermal-structural coupled analysis)
- Train neural network surrogate (PyTorch, 10 layers, 95% R² on validation set)
- Output: Causal graph linking design vars + machining params to stress concentration

**Week 3-4: Sensor Integration**
- Install 12 sensors on CNC machine:
  - 4x force sensors (spindle X/Y/Z + table Z)
  - 2x acoustic sensors (spindle bearing + tool chatter)
  - 4x thermocouples (spindle, tool, part, coolant)
  - 2x vision cameras (pre-finish inspection + post-finish)
- Configure edge gateway (NVIDIA Jetson AGX) for real-time processing
- Integrate with Siemens Sinumerik CNC controller via OPC-UA

**Week 5-6: Shadow Mode**
- Run WDBX in parallel: log recommendations but don't apply
- Collect 200 parts worth of data (150 good, 50 failed)
- Validate WDBX root-cause accuracy: 87% of failed parts traced to correct station + parameter
- Tune confidence thresholds; define "safe operating bounds" with customer

**Week 7-8: Live Deployment**
- Enable Abi recommendations with human-in-loop approval
- Manufacturing engineer reviews each recommendation on shop-floor tablet
- Typical workflow: Abi flags "Tool wear exceeds threshold → reduce feed rate by 6%"
- Engineer approves; PLC auto-adjusts feed rate for next part
- Monitor scrap rate, cycle time, energy per part

**Results (8 weeks in):**
- Scrap rate: 8.5% → 5.1% (40% reduction, exceeding target)
- Cycle time: 185 seconds → 172 seconds (7% improvement, originally targeted 12%)
- WDBX backtrace accuracy: 87% on anomaly root-cause identification
- Abi recommendation acceptance rate: 73% (engineers approve ~3 out of 4 suggestions)
- False positive rate: 2% (Abi flags anomaly but part passes final inspection)

**Key insight:** The biggest scrap contributor wasn't tool wear (the customer's hypothesis) but *coolant temperature drift* causing thermal expansion during finish passes. WDBX identified this because the digital twin encoded thermal-structural coupling, which isn't visible in standalone sensor data.

---

## Three Engineering Challenges (and How We're Solving Them)

### Challenge 1: Real-Time Inference at the Edge
**Problem:** FEA simulations take minutes to hours. We need sub-second inference on edge hardware.

**Solution:** Train surrogate models (neural networks or Gaussian process emulators) offline on 1000+ simulation runs. At runtime, query the surrogate instead of running full FEA. We achieve <100ms inference on an NVIDIA Jetson AGX.

**Trade-off:** Surrogate accuracy drops for out-of-distribution inputs. We flag "low confidence" predictions and fall back to heuristics or defer to human judgment.

**Ongoing work:** Exploring physics-informed neural networks (PINNs) to bake conservation laws into the surrogate architecture, improving generalization.

---

### Challenge 2: Sensor Fusion Across Modalities
**Problem:** Vision, acoustic, thermal, and force sensors have different sampling rates (1 Hz to 10 kHz), noise profiles, and failure modes. Naively concatenating them produces garbage.

**Solution:** Multi-stage fusion pipeline:
1. **Preprocessing:** Resample all streams to common timesteps (e.g., 100 Hz); apply domain-specific filtering (Butterworth for force, spectral denoising for acoustic)
2. **Feature extraction:** Per-modality embeddings (CNN for vision, spectrogram + ResNet for acoustic, wavelet transform for force)
3. **Fusion layer:** Transformer-based attention mechanism to weight modalities dynamically (e.g., acoustic sensors matter more during rough passes; vision matters during finish)
4. **Anomaly detection:** Isolation forest + autoencoder to flag deviations

**Trade-off:** Training the fusion model requires labeled data (good vs. bad parts), which takes 4-6 weeks of pilot data collection.

**Ongoing work:** Meta-learning to transfer fusion models across different machine types (e.g., CNC → stamping press) with minimal retraining.

---

### Challenge 3: Causal Graph Construction
**Problem:** Correlation ≠ causation. Sensor data shows *associations* (e.g., "high temperature correlates with cracks"), but WDBX needs causal *interventions* (e.g., "reducing spindle speed *causes* temperature to drop, which *causes* fewer cracks").

**Solution:** Hybrid approach:
1. **Simulation-based priors:** FEA/CFD encodes known causal physics (cutting force → temperature → thermal expansion)
2. **Observational data:** Time-series sensor data fills in gaps (e.g., coolant effectiveness varies with ambient humidity—not in our simulation)
3. **Causal discovery:** We use DoWhy (Microsoft's causal inference library) + structural equation modeling (SEM) to refine the causal graph over time

**Trade-off:** Requires expert knowledge to encode initial priors. We're automating this by parsing manufacturing process documentation (PFMEA, control plans) with NLP.

**Ongoing work:** Active learning: Abi suggests experiments (e.g., "Run 10 parts with spindle speed +10% to test this causal edge") to accelerate causal graph refinement.

---

## Why This Matters

Manufacturing is the physical backbone of civilization, but it wastes staggering resources. In the US alone, scrap and rework cost the aerospace industry $5B+ annually. Unplanned downtime costs $50k-250k per hour. 20-30% of energy consumption goes to making parts that fail inspection.

WDBX + Abi attacks this waste at the root cause—literally. By giving manufacturing engineers a causal AI agent that explains its reasoning and learns from feedback, we're enabling a shift from reactive firefighting to proactive optimization.

This isn't about replacing humans. It's about giving them superpowers: a digital twin that runs 1000 simulations overnight, a sensor fusion system that detects anomalies invisible to the naked eye, and a causal reasoning engine that pinpoints root causes in seconds instead of days.

If you're a manufacturing engineer tired of chasing ghosts, or an ML engineer who wants to see your models prevent real defects, we'd love to hear from you.

---

**About the Author:** Donald Filimon is the CEO and Technical Lead at AbiSim Technologies. He previously led digital twin deployments at an aerospace OEM and holds a PhD in mechanical engineering (FEA/optimization). Reach out: donald@abisim.ai

**Open Roles:** We're hiring Senior ML Engineers, Manufacturing Systems Engineers, and Simulation/FEA Leads. See [careers page] for details.

---

### Technical Appendix: WDBX Pseudocode

```python
# Simplified WDBX backtrace algorithm
def wdbx_backtrace(anomaly, sensor_data, process_state, digital_twin):
    """
    Traces manufacturing anomaly to root causes.
    
    Args:
        anomaly: Detected defect (type, location, severity)
        sensor_data: Multi-modal time-series (past 5 min)
        process_state: Current machine parameters (speeds, feeds, temps)
        digital_twin: Surrogate models + causal graph
    
    Returns:
        ranked_causes: List[(intervention, confidence, predicted_impact)]
    """
    # Step 1: Query digital twin for causal priors
    sim_priors = digital_twin.query_failure_mode(anomaly.type)
    # Returns: [(cause_1, causal_weight_1), (cause_2, causal_weight_2), ...]
    
    # Step 2: Correlate with real-time sensor anomalies
    sensor_anomalies = detect_anomalies(sensor_data)
    # Returns: [(sensor_X, z_score, timestamp), ...]
    
    # Step 3: Build weighted causal graph
    causal_graph = build_graph(sim_priors, sensor_anomalies, process_state)
    # Nodes: design vars, process params, sensor signals, defect
    # Edges: weighted by simulation + observational data
    
    # Step 4: Backpropagate from defect to root causes
    root_causes = backprop(causal_graph, anomaly)
    # Use belief propagation or gradient-based attribution
    
    # Step 5: Generate interventions
    interventions = []
    for cause in root_causes:
        if cause.type == "process_param":
            # Recommend parameter adjustment
            delta = digital_twin.optimal_adjustment(cause, anomaly)
            impact = digital_twin.predict_defect_reduction(cause, delta)
            confidence = causal_graph.get_edge_weight(cause, anomaly)
            interventions.append((cause, delta, confidence, impact))
    
    # Step 6: Rank by expected value (confidence * impact)
    ranked = sorted(interventions, key=lambda x: x[2] * x[3], reverse=True)
    
    return ranked[:5]  # Top 5 recommendations

# Example usage
anomaly = Defect(type="surface_crack", location=(x, y, z), severity=0.8)
sensor_data = fetch_sensors(machine_id, window="5min")
process_state = fetch_plc_state(machine_id)
digital_twin = load_digital_twin(part_id="turbine_bracket_v2")

recommendations = wdbx_backtrace(anomaly, sensor_data, process_state, digital_twin)

for rec in recommendations:
    print(f"Adjust {rec.cause} by {rec.delta}")
    print(f"Confidence: {rec.confidence:.2f}, Expected reduction: {rec.impact:.1f}%")
```

---

**References:**
- Pearl, J. (2009). *Causality: Models, Reasoning, and Inference*. Cambridge University Press.
- Sharma, A., Kiciman, E. (2020). "DoWhy: A Python library for causal inference." Microsoft Research.
- ISO 13381-1: Condition monitoring and diagnostics of machines — Prognostics
- ASME Y14.5: Geometric Dimensioning and Tolerancing

---

*This post is based on live pilot deployments. Some details have been anonymized per customer NDAs. For technical questions or partnership inquiries, contact: hello@abisim.ai*
