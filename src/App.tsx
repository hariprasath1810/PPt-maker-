// src/App.tsx
import { KeyboardEventHandler, useCallback, useState } from "react";
import ReactFlow, { useReactFlow, NodeMouseHandler } from "reactflow";
import { Slide, SlideData } from "./Slide";
import { slides, slidesToElements } from "./slides";

// All of your components, including the corrected DemocratisationSlide
import { IntroSlide } from "./IntroSlide";
import { NeuralNetworkSlide } from "./NeuralNetworkSlide";
import { DemocratisationSlide } from "./DemocratisationSlide"; // Correct import
import { EnterpriseAiSlide } from "./EnterpriseAiSlide";
import { TimelineSlide } from "./TimelineSlide";
import { DecadesCardsSlide } from "./DecadesCardsSlide";
import { GenAiIntroSlide } from "./GenAiIntroSlide";
import { LlmSlide } from "./LlmSlide";
import { GenAiTrendsSlide } from "./GenAiTrendsSlide";
import { GenAiUseCasesSlide } from "./GenAiUseCasesSlide";
import { GenAiChallengesSlide } from "./GenAiChallengesSlide";
import { GenAiFutureSlide } from "./GenAiFutureSlide";
import { GenAiEthicsSlide } from "./GenAiEthicsSlide";
import { PrototypeSlide } from "./PrototypeSlide";
import { AgenticAiIntroSlide } from "./AgenticAiIntroSlide";
import { AgenticLoopSlide } from "./AgenticLoopSlide";
import { AgenticToolsSlide } from "./AgenticToolsSlide";
import { AgenticSystemsSlide } from "./AgenticSystemsSlide";
import { AgenticFutureSlide } from "./AgenticFutureSlide";

const nodeTypes = {
  slide: Slide,
  intro: IntroSlide,
  neural: NeuralNetworkSlide,
  democratisation: DemocratisationSlide, // Correct registration
  enterprise: EnterpriseAiSlide,
  timeline: TimelineSlide,
  decadesCards: DecadesCardsSlide,
  genIntro: GenAiIntroSlide,
  llm: LlmSlide,
  trends: GenAiTrendsSlide,
  useCases: GenAiUseCasesSlide,
  challenges: GenAiChallengesSlide,
  future: GenAiFutureSlide,
  ethics: GenAiEthicsSlide,
  prototype: PrototypeSlide,
  agenticIntro: AgenticAiIntroSlide,
  agenticLoop: AgenticLoopSlide,
  agenticTools: AgenticToolsSlide,
  agenticSystems: AgenticSystemsSlide,
  agenticFuture: AgenticFutureSlide,
};

const initialSlide = "01";
const { nodes, edges } = slidesToElements(initialSlide, slides);

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const { fitView } = useReactFlow();

  const handleKeyPress = useCallback<KeyboardEventHandler>(
    (event) => {
      const slide = slides[currentSlide];
      const directionMap: Record<string, keyof SlideData> = {
        ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
      const direction = directionMap[event.key];

      if (direction) {
        event.preventDefault();
        const target = slide[direction];
        if (target) {
          setCurrentSlide(target);
          fitView({ nodes: [{ id: target }], duration: 100 });
        }
      }
    },
    [fitView, currentSlide],
  );

  const handleNodeClick = useCallback<NodeMouseHandler>(
    (_, node) => {
      if (node.id !== currentSlide) {
        setCurrentSlide(node.id);
        fitView({ nodes: [{ id: node.id }], duration: 100 });
      }
    },
    [fitView, currentSlide],
  );

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      edges={edges}
      fitView
      fitViewOptions={{ nodes: [{ id: initialSlide }], duration: 100 }}
      minZoom={0.1}
      onKeyDown={handleKeyPress}
      onNodeClick={handleNodeClick}
    />
  );
}