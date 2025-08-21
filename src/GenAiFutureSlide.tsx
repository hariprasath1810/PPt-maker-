// src/GenAiFutureSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiFutureSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide gen-ai-future-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        The Future: Human-AI Co-evolution
      </motion.h2>

      <div className="co-evolution-container">
        {/* Human Card */}
        <motion.div 
          className="future-card-fixed human-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="card-icon-fixed">👤</div>
          <div className="card-text-fixed">
            <h4>Creativity, Empathy, Imagination</h4>
            <p>Human qualities providing context, ethics, and novel ideas.</p>
          </div>
        </motion.div>

        {/* Connector Line */}
        <motion.div className="card-connector" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 1.1 }} />

        {/* Overlap Card */}
        <motion.div 
          className="future-card-fixed overlap-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="card-icon-fixed">🚀</div>
          <div className="card-text-fixed">
            <h4>New Frontiers, Innovation</h4>
            <p>Synergistic breakthroughs in science, art, and problem-solving.</p>
          </div>
        </motion.div>
        
        {/* Connector Line */}
        <motion.div className="card-connector" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 1.1 }} />

        {/* AI Card */}
        <motion.div 
          className="future-card-fixed ai-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="card-icon-fixed">🤖</div>
          <div className="card-text-fixed">
            <h4>Augmentation, Speed, Precision</h4>
            <p>AI capabilities providing data analysis, scale, and efficiency.</p>
          </div>
        </motion.div>
      </div>
    </article>
  );
}