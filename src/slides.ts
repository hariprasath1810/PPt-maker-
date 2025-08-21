// src/slides.ts
import { Edge, Node } from "reactflow";
import { SLIDE_WIDTH, SLIDE_HEIGHT, SLIDE_PADDING, SlideData } from "./Slide";

// Original Slides
const slide01 = { id: "01", type: 'intro', data: { right: "02", source: "" } };
const slide02 = { id: "02", type: 'neural', data: { left: "01", right: "03", source: "" } };
const slide03 = { id: "03", type: 'democratisation', data: { left: "02", right: "04", source: "" } };
const slide04 = { id: "04", type: 'enterprise', data: { left: "03", right: "05", source: "" } };
const slide05 = { id: "05", type: 'timeline', data: { left: "04", right: "06", source: "" } };
const slide06 = { id: "06", type: 'decadesCards', data: { left: "05", right: "07", source: "" } };

// GenAI Slides
const slide07 = { id: "07", type: 'genIntro', data: { left: "06", right: "08", source: "" } };
const slide08 = { id: "08", type: 'llm', data: { left: "07", right: "09", source: "" } };
const slide09 = { id: "09", type: 'trends', data: { left: "08", right: "10", source: "" } };
const slide10 = { id: "10", type: 'useCases', data: { left: "09", right: "11", source: "" } };
const slide11 = { id: "11", type: 'challenges', data: { left: "10", right: "12", source: "" } };
const slide12 = { id: "12", type: 'future', data: { left: "11", right: "13", source: "" } };
const slide13 = { id: "13", type: 'ethics', data: { left: "12", right: "14", source: "" } };
const slide14 = { id: "14", type: 'prototype', data: { left: "13", right: "15", source: "" } };

// Agentic AI Slides
const slide15 = { id: "15", type: 'agenticIntro', data: { left: "14", right: "16", source: "" } };
const slide16 = { id: "16", type: 'agenticLoop', data: { left: "15", right: "17", source: "" } };
const slide17 = { id: "17", type: 'agenticTools', data: { left: "16", right: "18", source: "" } };
const slide18 = { id: "18", type: 'agenticSystems', data: { left: "17", right: "19", source: "" } };
const slide19 = { id: "19", type: 'agenticFuture', data: { left: "18", right: "20", source: "" } };
const slide20 = { id: "20", type: 'thankyou', data: { left: "19", source: "" } };

const allSlides = [
  slide01, slide02, slide03, slide04, slide05, slide06,
  slide07, slide08, slide09, slide10, slide11, slide12, slide13,
  slide14, slide15, slide16, slide17, slide18, slide19, slide20
];

export const slides = Object.fromEntries(
  allSlides.map(({ id, data }) => [id, data]),
) as Record<string, SlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, SlideData>,
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<SlideData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const slideObject = allSlides.find(s => s.id === id);
    const data = slides[id];
    
    if (visited.has(id) || !data) continue;

    const node = { id, type: slideObject?.type || "slide", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = { x: position.x - (SLIDE_WIDTH + SLIDE_PADDING), y: position.y };
      stack.push({ id: data.left, position: nextPosition });
      edges.push({ id: `${id}->${data.left}`, source: id, target: data.left, animated: true });
    }
    if (data.up && !visited.has(data.up)) {
      const nextPosition = { x: position.x, y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING) };
      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up, animated: true });
    }
    if (data.down && !visited.has(data.down)) {
      const nextPosition = { x: position.x, y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING) };
      stack.push({ id: data.down, position: nextPosition });
      edges.push({ id: `${id}->${data.down}`, source: id, target: data.down, animated: true });
    }
    if (data.right && !visited.has(data.right)) {
      const nextPosition = { x: position.x + (SLIDE_WIDTH + SLIDE_PADDING), y: position.y };
      stack.push({ id: data.right, position: nextPosition });
      edges.push({ id: `${id}->${data.right}`, source: id, target: data.right, animated: true });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};