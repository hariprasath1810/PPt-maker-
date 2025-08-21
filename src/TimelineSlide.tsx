// src/TimelineSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function TimelineSlide(_: NodeProps) {
  return (
    <article className="slide timeline-slide" style={style}>
      <h2>A Timeline of Technological Progression</h2>
      <div className="timeline-container">
        <div className="year-label year-label-start">1700</div>
        
        <div className="timeline-bar">
          <div className="timeline-segment energy">Energy</div>
          <div className="timeline-segment trade">Trade</div>
          <div className="timeline-segment compute">Compute & Comms</div>
          <div className="timeline-segment skill">Skill</div>
        </div>

        <div className="year-label year-label-end">2020</div>

        {/* The triangular markers that point down from the bar */}
        <div className="timeline-markers">
            <div className="marker" style={{ left: '25%' }}></div>
            <div className="marker" style={{ left: '50%' }}></div>
            <div className="marker" style={{ left: '75%' }}></div>
        </div>

        {/* All labels and year circles */}
        <div className="timeline-annotations">
          {/* Top Row */}
          <div className="annotation-group" style={{ left: '12.5%' }}>
            <p>Water, Textiles & Iron</p>
          </div>
           <div className="annotation-group" style={{ left: '37.5%' }}>
            <div className="era-circle orange">1900s</div>
            <p>Electricity, Chemicals & Cars</p>
          </div>
           <div className="annotation-group" style={{ left: '62.5%' }}>
            <div className="era-circle red">1980s</div>
            <p>Software, Internet & Social Media</p>
          </div>
           <div className="annotation-group" style={{ left: '92%' }}>
             <div className="era-circle white">2020s</div>
          </div>

          {/* Bottom Row */}
           <div className="annotation-group bottom" style={{ left: '12.5%' }}>
            <div className="era-circle orange">1800s</div>
            <p>Steam, Railway & Steel</p>
          </div>
           <div className="annotation-group bottom" style={{ left: '37.5%' }}>
            <div className="era-circle red">1920s</div>
            <p>Oil, Electronics & Aviation</p>
          </div>
           <div className="annotation-group bottom" style={{ left: '62.5%' }}>
            <div className="era-circle blue">2010s</div>
          </div>
           <div className="annotation-group bottom" style={{ left: '87.5%' }}>
            <p>AI & Robots</p>
          </div>
        </div>
      </div>
    </article>
  );
}