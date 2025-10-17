"use client";

import { useEffect, useRef, useState } from "react";

export default function AbiSimCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 500;

    // Node positions for causal graph
    const nodes = [
      { x: 100, y: 250, label: "Defect\nDetected", color: "#ef4444" },
      { x: 250, y: 150, label: "High\nTemperature", color: "#f59e0b" },
      { x: 250, y: 350, label: "Excessive\nVibration", color: "#f59e0b" },
      { x: 400, y: 100, label: "Coolant\nFlow Low", color: "#10b981" },
      { x: 400, y: 200, label: "Spindle\nSpeed High", color: "#10b981" },
      { x: 400, y: 300, label: "Tool\nWear", color: "#10b981" },
      { x: 550, y: 150, label: "Root Cause:\nCoolant Temp\nDrift", color: "#3b82f6", isRoot: true },
    ];

    const edges = [
      { from: 0, to: 1, weight: 0.87 },
      { from: 0, to: 2, weight: 0.65 },
      { from: 1, to: 3, weight: 0.92 },
      { from: 1, to: 4, weight: 0.45 },
      { from: 2, to: 5, weight: 0.38 },
      { from: 3, to: 6, weight: 0.95 },
      { from: 4, to: 6, weight: 0.52 },
    ];

    let animationProgress = 0;

    function drawGraph() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw title
      ctx.fillStyle = "#374151";
      ctx.font = "bold 20px Arial";
      ctx.textAlign = "center";
      ctx.fillText("WDBX Causal Backtrace", 400, 30);

      // Draw edges
      edges.forEach((edge, idx) => {
        const from = nodes[edge.from];
        const to = nodes[edge.to];
        
        const progress = Math.max(0, Math.min(1, (animationProgress - idx * 0.15) / 0.3));
        
        if (progress > 0) {
          const currentX = from.x + (to.x - from.x) * progress;
          const currentY = from.y + (to.y - from.y) * progress;

          ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 + progress * 0.5})`;
          ctx.lineWidth = 2 + edge.weight * 3;
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(currentX, currentY);
          ctx.stroke();

          // Draw arrow
          if (progress > 0.7) {
            const angle = Math.atan2(to.y - from.y, to.x - from.x);
            ctx.fillStyle = `rgba(59, 130, 246, ${progress})`;
            ctx.beginPath();
            ctx.moveTo(currentX, currentY);
            ctx.lineTo(currentX - 10 * Math.cos(angle - 0.3), currentY - 10 * Math.sin(angle - 0.3));
            ctx.lineTo(currentX - 10 * Math.cos(angle + 0.3), currentY - 10 * Math.sin(angle + 0.3));
            ctx.closePath();
            ctx.fill();
          }

          // Draw weight label
          if (progress === 1) {
            ctx.fillStyle = "#6b7280";
            ctx.font = "12px Arial";
            ctx.textAlign = "center";
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2 - 10;
            ctx.fillText(`${(edge.weight * 100).toFixed(0)}%`, midX, midY);
          }
        }
      });

      // Draw nodes
      nodes.forEach((node, idx) => {
        const nodeProgress = Math.max(0, Math.min(1, (animationProgress - idx * 0.1) / 0.2));
        
        if (nodeProgress > 0) {
          const radius = node.isRoot ? 50 : 35;
          
          // Node circle
          ctx.fillStyle = node.color;
          ctx.globalAlpha = nodeProgress;
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect for root cause
          if (node.isRoot && animationProgress > 0.9) {
            ctx.strokeStyle = node.color;
            ctx.lineWidth = 3;
            ctx.globalAlpha = 0.3 + Math.sin(animationProgress * 10) * 0.3;
            ctx.beginPath();
            ctx.arc(node.x, node.y, radius + 5, 0, Math.PI * 2);
            ctx.stroke();
          }

          // Label
          ctx.globalAlpha = nodeProgress;
          ctx.fillStyle = "#ffffff";
          ctx.font = node.isRoot ? "bold 14px Arial" : "bold 12px Arial";
          ctx.textAlign = "center";
          const lines = node.label.split("\n");
          lines.forEach((line, lineIdx) => {
            const yOffset = (lineIdx - (lines.length - 1) / 2) * 14;
            ctx.fillText(line, node.x, node.y + yOffset + 4);
          });

          ctx.globalAlpha = 1;
        }
      });

      // Draw inference time
      if (animationProgress > 0.95) {
        ctx.fillStyle = "#10b981";
        ctx.font = "bold 18px Arial";
        ctx.textAlign = "center";
        ctx.fillText("⚡ Inference time: 87ms", 400, 470);
      }
    }

    function animate() {
      if (isAnimating) {
        animationProgress += 0.008;
        if (animationProgress > 1.2) {
          animationProgress = 0;
        }
      }
      drawGraph();
      requestAnimationFrame(animate);
    }

    animate();
  }, [isAnimating]);

  return (
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800"
      />
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        {isAnimating ? "⏸ Pause Animation" : "▶ Start Animation"}
      </button>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        This visualization shows WDBX tracing a surface defect back through temperature anomalies
        to the root cause: coolant temperature drift (95% confidence). Each edge shows causal weight.
      </p>
    </div>
  );
}
