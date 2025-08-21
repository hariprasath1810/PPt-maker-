// src/AgenticAiIntroSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { Target, Bot, CheckCircle, Plane, Hotel, CalendarCheck } from 'lucide-react';

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function AgenticAiIntroSlide(_: NodeProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <article ref={ref} className={`slide agentic-intro-slide ${inView ? 'is-in-view' : ''}`} style={style}>
      <motion.p 
        className="agentic-subtitle"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        An autonomous system that perceives its environment, makes decisions, and takes actions to achieve a specific goal.
      </motion.p>
      <div className="agentic-intro-diagram">
        <motion.div className="agent-box goal" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Target className="agent-icon" />
          <span>USER GOAL</span>
          <p>"Plan a team offsite in Chennai"</p>
        </motion.div>
        <motion.div className="agent-arrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>↓</motion.div>
        <motion.div className="agent-box agent-core" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Bot className="agent-icon" />
          <span>AI AGENT</span>
          <p>Reasons, Plans, Executes</p>
        </motion.div>
        <motion.div className="agent-arrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>↓</motion.div>
        <motion.div className="agent-box result" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}>
          <CheckCircle className="agent-icon" />
          <span>COMPLETED TASK</span>
          <div className="task-list">
            <div className="task-item"><Plane size={24} /><span>SEARCHED FLIGHTS & HOTELS</span></div>
            <div className="task-item"><Hotel size={24} /><span>BOOKED REFUNDABLE OPTIONS</span></div>
            <div className="task-item"><CalendarCheck size={24} /><span>DRAFTED TEAM ITINERARY</span></div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}