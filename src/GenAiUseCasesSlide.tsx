// src/GenAiUseCasesSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function GenAiUseCasesSlide(_: NodeProps) {
  return (
    <article className="slide use-cases-slide" style={style}>
      <h2>Real-World Use Cases</h2>
      <div className="use-cases-gallery">
        {/* Card 1: Content Creation (Existing Image) */}
        <div 
          className="case-item" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format=fit)` }}
        >
          <span>Content Creation</span>
        </div>

        {/* Card 2: Drug Discovery (NEW Image) */}
        <div 
          className="case-item" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/8533018/pexels-photo-8533018.jpeg)` }}
        >
          <span>Drug Discovery</span>
        </div>
        
        {/* Card 3: Code Generation (NEW Image) */}
        <div 
          className="case-item" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg)` }}
        >
          <span>Code Generation</span>
        </div>
        
        {/* Card 4: Personalized Education (Existing Image) */}
        <div 
          className="case-item" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format=fit)` }}
        >
          <span>Personalized Education</span>
        </div>
      </div>
    </article>
  );
}