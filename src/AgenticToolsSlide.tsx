// src/AgenticToolsSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Globe, Link, Code2 } from 'lucide-react';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function AgenticToolsSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-tools-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>Agents in Action: Using Tools</h2>
      <div className="tools-diagram-fixed">
        <motion.div className="tool-agent-fixed" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>AI Agent</motion.div>
        
        <svg className="tool-lines-fixed" viewBox="0 0 1000 500">
          <motion.line x1="500" y1="250" x2="250" y2="120" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} />
          <motion.line x1="500" y1="250" x2="750" y2="120" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }} />
          <motion.line x1="500" y1="250" x2="500" y2="400" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.8 }} />
        </svg>

        <motion.div className="tool-card-fixed browse" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
          <Globe size={20} /> Web Browsing
        </motion.div>
        <motion.div className="tool-card-fixed api" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Link size={20} /> API Calls
        </motion.div>
        <motion.div className="tool-card-fixed code" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
          <Code2 size={20} /> Code Execution
        </motion.div>
      </div>
    </article>
  );
}