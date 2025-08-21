// src/NeuralNetworkSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function NeuralNetworkSlide(_: NodeProps) {
  return (
    <article className="slide neural-slide" style={style}>
      <h2>Neural Networks: Brain vs. Machine</h2>
      <div className="neural-comparison">
        <div className="neural-side">
          <h3>Human Brain</h3>
          <div className="neuron-diagram">
            <div className="neuron human-neuron">Neuron</div>
            <div className="connection"></div>
            <div className="connection"></div>
            <div className="connection"></div>
          </div>
          <p className="data-label">~86 Billion Neurons</p>
        </div>
        <div className="neural-side">
          <h3>GPT Foundation Model</h3>
          <div className="neuron-diagram gpt-diagram">
            <div className="neuron gpt-neuron">Parameter</div>
             <div className="connection-grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="gpt-connection" style={{ '--i': i } as React.CSSProperties}></div>
              ))}
            </div>
          </div>
          <p className="data-label">Over 1 Trillion Parameters</p>
        </div>
      </div>
    </article>
  );
}