// src/GenAiTrendsSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiTrendsSlide(_: NodeProps) {
  return (
    <article className="slide trends-slide" style={style}>
      <h2>Current Trends in 2025</h2>
      <div className="trends-grid">
        <div className="trend-card">
          <h3>Multimodality</h3>
          <p>Models that understand and generate content across text, images, and audio simultaneously (e.g., GPT-4o).</p>
        </div>
        <div className="trend-card">
          <h3>AI Agents</h3>
          <p>Autonomous systems that can perform complex, multi-step tasks on behalf of a user.</p>
        </div>
        <div className="trend-card">
          <h3>On-Device AI</h3>
          <p>Running smaller, efficient models directly on smartphones and laptops for privacy and speed.</p>
        </div>
      </div>
    </article>
  );
}