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

const ToolCard = ({ icon, title, description, delay, position }: { icon: React.ReactNode, title: string, description: string, delay: number, position: string }) => (
  <motion.div
    className={`tool-card-fixed ${position}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
  >
    <div className="tool-card-icon">{icon}</div>
    <div className="tool-card-text">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </motion.div>
);

export function AgenticToolsSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-tools-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <h2>Agents in Action: Using Tools</h2>
      <div className="tools-diagram-fixed">
        <motion.div
          className="tool-agent-fixed"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Bot size={50} />
          <span>AI Agent</span>
        </motion.div>

        <svg className="tool-lines-fixed" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <motion.path d="M600,400 C400,400 300,250 300,250" stroke="url(#lineGradient)" strokeWidth="3" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
          <motion.path d="M600,400 C800,400 900,250 900,250" stroke="url(#lineGradient)" strokeWidth="3" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} />
          <motion.path d="M600,400 C600,550 600,600 600,600" stroke="url(#lineGradient)" strokeWidth="3" fill="none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} />
        </svg>

        <ToolCard
          icon={<Globe size={32} />}
          title="Web Browsing"
          description="Accesses live information from the internet to answer questions or complete research tasks."
          delay={0.6}
          position="browse"
        />
        <ToolCard
          icon={<Link size={32} />}
          title="API Calls"
          description="Connects to external services like weather, stocks, or internal enterprise systems."
          delay={0.8}
          position="api"
        />
        <ToolCard
          icon={<Code2 size={32} />}
          title="Code Execution"
          description="Writes and runs code to perform complex calculations or data manipulations."
          delay={1.0}
          position="code"
        />
      </div>
    </article>
  );
}