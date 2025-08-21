// src/IntroSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function IntroSlide(_: NodeProps) {
  return (
    <article className="slide intro-slide" style={style}>
      <div className="intro-content">
        <h1>Introduction to AI</h1>
        <p className="subtitle">A technology projected to become a **$1.8 trillion** market by 2030.</p>
        <div className="ai-sphere"></div>
      </div>
    </article>
  );
}