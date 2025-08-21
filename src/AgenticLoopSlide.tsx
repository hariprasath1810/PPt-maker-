// src/AgenticLoopSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Zap, Search, Repeat, Bot } from 'lucide-react';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

const Arrow = ({ rotation, delay }: { rotation: number, delay: number }) => (
  <motion.svg
    className="loop-arrow-fixed"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <marker id="arrowhead-gradient" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="url(#arrowGradient)" />
      </marker>
    </defs>
    <motion.path
      d="M10,50 Q50,10 90,50"
      stroke="url(#arrowGradient)"
      strokeWidth="4"
      fill="none"
      markerEnd="url(#arrowhead-gradient)"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeInOut" }}
    />
  </motion.svg>
);

export function AgenticLoopSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-loop-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>The Agentic Loop</h2>
      <div className="loop-container-fixed">
        <motion.div className="loop-card-fixed plan" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Bot size={32}/>
          <h3>PLAN</h3>
          <p>Deconstruct goal into steps</p>
        </motion.div>
        <Arrow rotation={0} delay={0.3} />
        <motion.div className="loop-card-fixed act" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <Zap size={32}/>
          <h3>ACT</h3>
          <p>Execute a step using tools</p>
        </motion.div>
        <Arrow rotation={90} delay={0.5} />
        <motion.div className="loop-card-fixed observe" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Search size={32}/>
          <h3>OBSERVE</h3>
          <p>Analyze the outcome</p>
        </motion.div>
        <Arrow rotation={180} delay={0.7} />
        <motion.div className="loop-card-fixed reflect" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
          <Repeat size={32}/>
          <h3>REFLECT</h3>
          <p>Self-correct based on results</p>
        </motion.div>
        <Arrow rotation={270} delay={0.9} />
      </div>
    </article>
  );
}