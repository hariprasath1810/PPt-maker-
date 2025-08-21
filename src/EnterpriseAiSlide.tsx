// src/EnterpriseAiSlide.tsx
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

const style = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
} satisfies React.CSSProperties;

export function EnterpriseAiSlide(_: NodeProps) {
  return (
    <article className="slide enterprise-slide" style={style}>
        <h2>What AI Unlocks in the Enterprise</h2>
        <div className="enterprise-grid">
            <div className="enterprise-card">
                <div className="icon">⚙️</div>
                <h3>Automate</h3>
                <p>Reduces operational costs by up to 40%</p>
            </div>
            <div className="enterprise-card">
                <div className="icon">📊</div>
                <h3>Analyze</h3>
                <p>Improves forecasting accuracy by over 50%</p>
            </div>
            <div className="enterprise-card">
                <div className="icon">👤</div>
                <h3>Personalize</h3>
                <p>Can lift revenue by 5-15% with custom experiences</p>
            </div>
            <div className="enterprise-card">
                <div className="icon">🚀</div>
                <h3>Optimize</h3>
                <p>Cuts supply chain costs by 15% through efficiency</p>
            </div>
        </div>
    </article>
  );
}