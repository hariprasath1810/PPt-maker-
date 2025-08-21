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
        <div className="loop-arrow-fixed h-arrow-top">→</div>
        <motion.div className="loop-card-fixed act" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <Zap size={32}/>
          <h3>ACT</h3>
          <p>Execute a step using tools</p>
        </motion.div>

        <div className="loop-arrow-fixed v-arrow-right">↓</div>

        <motion.div className="loop-card-fixed reflect" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
          <Repeat size={32}/>
          <h3>REFLECT</h3>
          <p>Self-correct based on results</p>
        </motion.div>
        <div className="loop-arrow-fixed h-arrow-bottom">←</div>
        <motion.div className="loop-card-fixed observe" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Search size={32}/>
          <h3>OBSERVE</h3>
          <p>Analyze the outcome</p>
        </motion.div>
        
        <div className="loop-arrow-fixed v-arrow-left">↑</div>
      </div>
    </article>
  );
}