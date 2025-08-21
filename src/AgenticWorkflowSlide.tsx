// src/AgenticWorkflowSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function AgenticWorkflowSlide(_: NodeProps) {
  return (
    <article className="slide agentic-workflow-slide" style={style}>
      <h2>How Agentic Workflows Operate</h2>
      <div className="workflow-steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Plan</h3>
          <p>Break down the goal into smaller, actionable steps.</p>
        </div>
        <div className="step-arrow">→</div>
        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Execute</h3>
          <p>Use tools (e.g., browse web, run code) to perform a step.</p>
        </div>
        <div className="step-arrow">→</div>
        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Observe</h3>
          <p>Analyze the result of the action and assess progress.</p>
        </div>
        <div className="step-arrow">→</div>
        <div className="step-card">
          <div className="step-number">4</div>
          <h3>Reflect</h3>
          <p>Self-correct and adjust the plan based on the outcome.</p>
        </div>
      </div>
    </article>
  );
}