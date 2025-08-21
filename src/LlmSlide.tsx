// src/LlmSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

const inputs = [
  { icon: '📚', label: 'Books' }, { icon: '🌐', label: 'Websites' }, { icon: '💻', label: 'Code' },
  { icon: '📝', label: 'Text' }, { icon: '🖼️', label: 'Images' }, { icon: '🎵', label: 'Audio' }
];
const outputs = [
  { icon: '💡', label: 'Answers' }, { icon: '📑', label: 'Summaries' }, { icon: '🌍', label: 'Translations' },
  { icon: '⚙️', label: 'Code' }, { icon: '✨', label: 'Stories' }, { icon: '🔍', label: 'Insights' }
];

const InfoCard = ({ item, index, type }: { item: { icon: string, label: string }, index: number, type: 'input' | 'output' }) => (
  <motion.div
    className="llm-info-card group"
    initial={{ opacity: 0, x: type === 'input' ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
    whileHover={{ scale: 1.05, y: -5 }}
  >
    <div className="card-icon">{item.icon}</div>
    <div className="card-label">{item.label}</div>
  </motion.div>
);

export function LlmSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide llm-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        The Engine: Large Language Models
      </motion.h2>

      <div className="llm-pipeline">
        <div className="llm-column">
          <h3 className="column-title">Input Sources</h3>
          {inputs.map((item, index) => <InfoCard key={index} item={item} index={index} type="input" />)}
        </div>
        <div className="llm-column center-column">
          <motion.div
            className="llm-engine-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="engine-icon"></div>
            <div className="engine-label">LLM</div>
          </motion.div>
        </div>
        <div className="llm-column">
          <h3 className="column-title">Output Examples</h3>
          {outputs.map((item, index) => <InfoCard key={index} item={item} index={index} type="output" />)}
        </div>
      </div>
      
      <svg className="llm-arrows" viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" />
          </marker>
        </defs>
        {inputs.map((_, i) => (
            <motion.line 
                key={`in-${i}`} x1="450" y1={120 + i * 110} x2="700" y2="400" 
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 1.2 + i * 0.1 }} 
                markerEnd="url(#arrowhead)"
            />
        ))}
        {outputs.map((_, i) => (
            <motion.line 
                key={`out-${i}`} x1="900" y1="400" x2="1150" y2={120 + i * 110} 
                initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} 
                transition={{ duration: 0.7, delay: 1.8 + i * 0.1 }} 
                markerEnd="url(#arrowhead)"
            />
        ))}
      </svg>

      <motion.div 
        className="llm-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        "LLMs are trained on vast datasets, powering human-like understanding and generation."
      </motion.div>
    </article>
  );
}