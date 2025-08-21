// src/DecadesCardsSlide.tsx
import React from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

// Correctly mapped image URLs
const cardImages = {
  expertSystems: 'https://images.pexels.com/photos/7598913/pexels-photo-7598913.jpeg',
  chess: 'https://images.pexels.com/photos/17986658/pexels-photo-17986658.jpeg',
  speechVision: 'https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg', // A more suitable, stable link
  perception: 'https://qualitytraining.be/content/uploads/2024/09/comment-lia-modifie-la-perception-des-competences-humaines.jpg',
  generativeAI: 'https://images.pexels.com/photos/16629368/pexels-photo-16629368.jpeg',
  agenticAI: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdlbnRpYyUyMGFpfGVufDB8fDB8fHww',
};

const decadesData = [
    { year: "1950s", title: "Expert Systems", imageUrl: cardImages.expertSystems },
    { year: "1990s", title: "Beating in Chess", imageUrl: cardImages.chess },
    { year: "2000s", title: "Speech and Vision", imageUrl: cardImages.speechVision },
    { year: "2010s", title: "Perception", imageUrl: cardImages.perception },
    { year: "2015s", title: "Generative AI", imageUrl: cardImages.generativeAI },
    { year: "Since 2022", title: "Agentic AI", imageUrl: cardImages.agenticAI },
];

export function DecadesCardsSlide(_: NodeProps) {
  return (
    <article className="slide decades-cards-slide" style={style}>
      <h2>AI Over The Decades: Key Milestones</h2>
      <div className="decades-grid">
        {decadesData.map((decade, index) => (
          <div
            key={index}
            className="decade-card"
            style={{ backgroundImage: `url(${decade.imageUrl})` }}
          >
            <div className="card-overlay">
              <h3>{decade.title}</h3>
              <p>{decade.year}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}