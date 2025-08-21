// src/GenAiChallengesSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiChallengesSlide(_: NodeProps) {
  return (
    <article className="slide challenges-slide" style={style}>
      <h2>Challenges and Risks</h2>
      <div className="challenges-container">
        {/* Bias & Fairness */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="icon-item">⚠️</div>
            <h3>Bias & Fairness</h3>
          </div>
          <ul className="challenge-points">
            <li>AI models can inherit and amplify biases present in their training data, leading to unfair or discriminatory outcomes.</li>
          </ul>
        </div>

        {/* Hallucinations */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="icon-item">❓</div>
            <h3>Hallucinations</h3>
          </div>
          <ul className="challenge-points">
            <li>Generative models can confidently produce incorrect or nonsensical information that is not based on their training data.</li>
          </ul>
        </div>

        {/* Data Privacy */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="icon-item">🔒</div>
            <h3>Data Privacy</h3>
          </div>
          <ul className="challenge-points">
            <li>Models may inadvertently memorize and reproduce sensitive information from their training data, such as personal details.</li>
          </ul>
        </div>

        {/* Energy Consumption */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="icon-item">⚡</div>
            <h3>Energy Consumption</h3>
          </div>
          <ul className="challenge-points">
            <li>Training large-scale AI models requires immense computational power, leading to a significant carbon footprint.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}