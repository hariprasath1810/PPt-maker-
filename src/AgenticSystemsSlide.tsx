// src/AgenticSystemsSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { User, Users } from 'lucide-react';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function AgenticSystemsSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-systems-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>Types of Agentic Systems</h2>
      <div className="systems-comparison">
        <motion.div className="system-column" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h3>Single-Agent Systems</h3>
          <div className="system-visual">
            <User size={64} className="agent-node" />
            <p>One AI completes a task independently.</p>
          </div>
        </motion.div>
        <motion.div className="system-column" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h3>Multi-Agent Systems</h3>
          <div className="system-visual">
            <Users size={64} className="agent-node" />
            <p>Multiple AIs collaborate, each with specialized roles.</p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}