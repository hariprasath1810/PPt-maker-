// src/GenAiIntroSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiIntroSlide(_: NodeProps) {
  return (
    <article className="slide gen-intro-slide" style={style}>
      <h2>What is Generative AI?</h2>
      <div className="gen-intro-content">
        <div className="text-block">
          <p>Models that create **new, original content**—text, images, code, and more—based on the patterns they learned from training data.</p>
        </div>
        <div className="visual-block">
          <div className="prompt-box">PROMPT</div>
          <div className="arrow-flow">→</div>
          <div className="gen-ai-model">GenAI</div>
          <div className="arrow-flow">→</div>
          <div className="output-box">OUTPUT</div>
        </div>
      </div>
    </article>
  );
}