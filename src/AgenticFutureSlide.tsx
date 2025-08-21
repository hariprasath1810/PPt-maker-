// src/AgenticFutureSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { User, Bot, Sparkles } from 'lucide-react';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function AgenticFutureSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-future-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>The Future: Autonomous Collaboration</h2>
      <div className="future-collaboration">
        <motion.div className="collab-entity human-entity" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <User size={60} />
          <span>Human Intent</span>
        </motion.div>
        <motion.div className="collab-plus" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>+</motion.div>
        <motion.div className="collab-entity agent-swarm" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Bot size={60} />
          <span>AI Agents</span>
        </motion.div>
      </div>
      <motion.div className="collab-arrow-down" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>↓</motion.div>
      <motion.div className="collab-entity result-entity" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
        <Sparkles size={60} />
        <span>Accelerated Problem Solving</span>
      </motion.div>
    </article>
  );
}