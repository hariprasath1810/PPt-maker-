// src/DemocratisationSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function DemocratisationSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide democratisation-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>AI is the Democratization of Skill</h2>
      <div className="democratisation-timeline">
        <div className="timeline-line"></div>
        <div className="timeline-item">
          <div className="timeline-icon">💻</div>
          <div className="timeline-content">
            <h3>Coding & Development</h3>
            <p>AI assists with code generation and debugging, lowering the barrier to creating software.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">🎨</div>
          <div className="timeline-content">
            <h3>Content & Design</h3>
            <p>Generative models empower anyone to create high-quality text, art, and music.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">📊</div>
          <div className="timeline-content">
            <h3>Data Analysis</h3>
            <p>AI automates data processing and insight extraction, making data science accessible.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-icon">🔬</div>
          <div className="timeline-content">
            <h3>Scientific Research</h3>
            <p>AI accelerates discovery by analyzing complex datasets and simulating experiments.</p>
          </div>
        </div>
      </div>
    </article>
  );
}