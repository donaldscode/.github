import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Careers() {
  // Read the careers markdown file
  let careersContent = "";
  try {
    const careersPath = path.join(process.cwd(), '..', 'outputs', 'careers.md');
    careersContent = fs.readFileSync(careersPath, 'utf8');
  } catch (error) {
    careersContent = `# Careers at AbiSim Technologies

## Our Mission
We're eliminating manufacturing defects through real-time causal backtrace and adaptive process control.

We're building the AI infrastructure for the next generation of smart manufacturing. Join us!

---

## Open Roles

### Senior Machine Learning Engineer - Manufacturing AI
**Location:** San Francisco, CA (Remote-friendly)  
**Salary:** $140k-190k + 0.25%-0.75% equity

Build ML systems that process industrial sensor data at 100Hz-10kHz sampling rates.

### Senior Manufacturing Systems Engineer
**Location:** San Francisco, CA (Remote-friendly)  
**Salary:** $130k-180k + 0.3%-0.8% equity

Integrate Abi with customer PLCs, SCADA systems, and robotic controllers.

### Simulation / FEA Lead
**Location:** San Francisco, CA (Remote-friendly)  
**Salary:** $130k-180k + 0.3%-0.8% equity

Build digital twin models from customer CAD using FEA/CFD simulations.

---

## Apply

Email **careers@abisim.ai** with your resume and a brief note about why you're interested.
`;
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="section pt-24">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <ReactMarkdown>{careersContent}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </main>
  );
}
