// src/GenAiEthicsSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiEthicsSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide ethics-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        The Ethical Imperative
      </motion.h2>
      
      <div className="ethics-balance">
        <div className="scale-beam">
          <div className="balance-side left">
            <div className="scale-pan">
              <h3>Innovation</h3>
              <p>Breakthroughs</p>
            </div>
          </div>
          <div className="balance-side right">
            <div className="scale-pan">
              <h3>Responsibility</h3>
              <p>Transparency</p>
            </div>
          </div>
        </div>
        <div className="scale-base"></div>
      </div>

      <p className="ethics-caption">
        Balancing progress with guiding principles is essential for trustworthy AI.
      </p>

      <div className="principles-container">
          <motion.div className="principle-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <h4>Accountability</h4>
            <p>Clear ownership for AI system outcomes.</p>
          </motion.div>
          <motion.div className="principle-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
            <h4>Human Oversight</h4>
            <p>Ensuring human control and intervention.</p>
          </motion.div>
          <motion.div className="principle-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}>
            <h4>Explainability (XAI)</h4>
            <p>Making AI decisions understandable to users.</p>
          </motion.div>
      </div>
    </article>
  );
}