// src/PrototypeSlide.tsx
import React, { useState, useRef, useEffect } from 'react';
import { type NodeProps } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "./Slide";

// --- NOTE: All helper hooks (useTypewriter) and Icon components remain the same ---
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  useEffect(() => {
    setDisplayText('');
    stop();
    if (text) {
      let i = 0;
      intervalRef.current = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          stop();
        }
      }, speed);
    }
    return stop;
  }, [text, speed]);
  return [displayText, stop] as const;
};

const IconLoader = ({ className = 'w-5 h-5' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>);
const IconClose = ({ className = 'w-6 h-6' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const IconStop = ({ className = 'w-5 h-5' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="6" y="6" width="12" height="12" rx="2" /></svg>);
const IconSend = ({ className = 'w-5 h-5' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>);
// Logos for Quadrants
const IconSummarize = ({ className = 'w-12 h-12' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>);
const IconImage = ({ className = 'w-12 h-12' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>);
const IconData = ({ className = 'w-12 h-12' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"></path><path d="M18.7 8a6 6 0 0 0-8.37-8.37"></path><path d="M11 10.3a6 6 0 0 0-8.36 8.36"></path></svg>);
const IconMultimodal = ({ className = 'w-12 h-12' }: { className?: string }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>);


// --- Feature Content Components ---
function SummarizerContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [finalSummary, setFinalSummary] = useState('');
  const [fileName, setFileName] = useState('');
  const [displayedSummary, stopTyping] = useTypewriter(finalSummary, 20);
  const HARDCODED_SUMMARY = "Tata Consultancy Services (TCS) reported strong performance in the last fiscal year, driven by broad-based growth across all industry verticals. Key achievements include the expansion of their cloud and digital transformation services, securing major deals in the BFSI sector, and significant investments in AI and machine learning capabilities. The company's focus on employee reskilling and talent development has been a cornerstone of its strategy to maintain a competitive edge in the global IT market.";
  const handleSummarize = async () => { if (!fileName) { return; } setIsLoading(true); setFinalSummary(''); await new Promise(resolve => setTimeout(resolve, 2000)); setFinalSummary(HARDCODED_SUMMARY); setIsLoading(false); };
  const isTyping = finalSummary && displayedSummary.length < finalSummary.length;

  return (<div className="flex flex-col h-full"><h2 className="text-4xl font-semibold text-white mb-6 flex-shrink-0">Document Summarization</h2><div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0"><label className="w-full sm:w-auto flex-1 cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors text-white font-bold py-3 px-5 rounded-md text-center text-lg">{fileName || 'Upload PDF File'}<input type="file" className="hidden" accept=".pdf" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} /></label><button onClick={handleSummarize} disabled={isLoading || !fileName} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors text-white font-bold py-3 px-5 rounded-md disabled:bg-gray-500 text-lg">Summarize</button></div>{isLoading && <div className="mt-8 flex items-center justify-center gap-2 text-gray-300 text-xl"><IconLoader className="w-6 h-6 animate-spin" /><span>Processing...</span></div>}{finalSummary && (<div className="mt-6 p-6 bg-black/30 rounded-lg flex-1 overflow-y-auto"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-2xl text-gray-100">Summary:</h3>{isTyping && (<button onClick={stopTyping} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-lg" aria-label="Stop generating summary"><IconStop className="w-5 h-5" /> Stop</button>)}</div><p className="text-gray-300 text-xl leading-relaxed">{displayedSummary}</p></div>)}</div>);
}

function ImageGeneratorContent() {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const HARDCODED_IMAGES = [
    { model: 'Midjourney', src: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg' }, { model: 'DALL·E 3', src: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg' }, { model: 'Stable Diffusion', src: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg' }, { model: 'Imagen', src: 'https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg' }, { model: 'Firefly', src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg' }, { model: 'TCS AI', src: 'https://images.pexels.com/photos/20787/pexels-photo.jpg' }
  ];
  const handleGenerate = async () => { if (!prompt) { return; } setIsLoading(true); setIsGenerated(false); await new Promise(resolve => setTimeout(resolve, 3000)); setIsGenerated(true); setIsLoading(false); };

  return (<div className="flex flex-col h-full"><h2 className="text-4xl font-semibold text-white mb-6 flex-shrink-0">Image Generation</h2><div className="flex items-center gap-2 flex-shrink-0"><input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt to generate images..." className="flex-1 w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg" /><button onClick={handleGenerate} disabled={isLoading || !prompt} className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md disabled:bg-gray-500"><IconSend className="w-6 h-6" /></button></div>{isLoading && <div className="mt-8 flex items-center justify-center gap-2 text-gray-300 text-xl"><IconLoader className="w-6 h-6 animate-spin" /><span>Generating...</span></div>}{isGenerated && (<div className="mt-6 grid grid-cols-3 grid-rows-2 gap-4 flex-1 overflow-y-auto">{HARDCODED_IMAGES.map((img) => (<div key={img.model} className="relative group overflow-hidden rounded-lg aspect-[16/10]"><img src={img.src} alt={`Generated by ${img.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><div className="image-model-name">{img.model}</div></div>))}</div>)}</div>);
}

function DataAnalysisContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [finalAnalysis, setFinalAnalysis] = useState('');
    const [fileName, setFileName] = useState('');
    const [question, setQuestion] = useState('');
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [displayedAnalysis, stopTyping] = useTypewriter(finalAnalysis, 20);
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => { const file = e.target.files?.[0]; if (file) { setFileName(file.name); setIsFileUploaded(true); setFinalAnalysis(''); } };
    const handleAnalyze = async () => { if (!fileName || !question) { return; } setIsLoading(true); setFinalAnalysis(''); await new Promise(resolve => setTimeout(resolve, 2500)); setFinalAnalysis("Based on the provided sales data, Q4 showed the highest revenue at $1.8M, a 20% increase from Q3. The 'Gadgets' category was the top performer, accounting for 45% of total sales. A key insight is the strong correlation between marketing spend and sales in the 'Apparel' category, suggesting an opportunity for growth with increased budget allocation."); setIsLoading(false); };
    const renderChart = () => { // @ts-ignore
      if (!window.Chart) { return; } if (chartInstance.current) chartInstance.current.destroy(); const chartOptions = { maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, ticks: { color: '#9ca3af', font: { size: 12 } } }, x: { ticks: { color: '#9ca3af', font: { size: 12 } } } } }; if (chartRef.current) { const ctx = chartRef.current.getContext('d'); if (ctx) { // @ts-ignore
        chartInstance.current = new window.Chart(ctx, { type: 'bar', data: { labels: ['Q1', 'Q2', 'Q3', 'Q4'], datasets: [{ label: 'Revenue ($M)', data: [1.2, 1.4, 1.5, 1.8], backgroundColor: ['rgba(255, 99, 132, 0.5)','rgba(54, 162, 235, 0.5)','rgba(255, 206, 86, 0.5)','rgba(75, 192, 192, 0.5)',] }] }, options: chartOptions }); } } };
    useEffect(() => { if (isFileUploaded) { renderChart(); } }, [isFileUploaded]);
    const isTyping = finalAnalysis && displayedAnalysis.length < finalAnalysis.length;

    return (<div className="flex flex-col h-full"><h2 className="text-4xl font-semibold text-white mb-6 flex-shrink-0">Talk to Your Data</h2><div className="flex flex-col md:flex-row gap-6 h-full overflow-hidden"><div className="md:w-1/2 flex flex-col gap-4 flex-shrink-0"><label className="w-full flex cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-5 rounded-md text-center text-lg">{fileName || 'Upload CSV File'}<input type="file" className="hidden" accept=".csv" onChange={handleFileChange} /></label><div className="relative"><input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask a question about your data..." className="w-full bg-gray-800 border border-gray-600 rounded-md pl-4 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-lg" /></div><button onClick={handleAnalyze} disabled={isLoading || !fileName || !question} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-md disabled:bg-gray-500 text-lg">Get Insight</button></div><div className="md:w-1/2 flex flex-col gap-4 min-h-0">{isFileUploaded && (<div className="p-4 bg-black/20 rounded-lg animate-fade-in"><h4 className="text-center text-lg mb-2">Quarterly Revenue</h4><div className="h-48"><canvas ref={chartRef}></canvas></div></div>)}{isLoading && <div className="flex-1 flex items-center justify-center gap-2 text-gray-300 text-xl"><IconLoader className="w-6 h-6 animate-spin" /><span>Analyzing...</span></div>}{finalAnalysis && (<div className="p-6 bg-black/30 rounded-lg flex-1 overflow-y-auto"><div className="flex items-center justify-between mb-2"><h3 className="font-bold text-2xl text-gray-100">Insight:</h3>{isTyping && (<button onClick={stopTyping} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-lg"><IconStop className="w-5 h-5" /> Stop</button>)}</div><p className="text-gray-300 text-xl leading-relaxed">{displayedAnalysis}</p></div>)}</div></div></div>);
}

function VoiceToTextContent() {
    const [isLoading, setIsLoading] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [finalTranscription, setFinalTranscription] = useState('');
    const [displayedTranscription, stopTyping] = useTypewriter(finalTranscription, 20);
    const handleInteraction = async (type: 'v2v' | 'vid2v') => {
        setIsLoading(true);
        setIsRecording(false);
        setFinalTranscription('');
        await new Promise(r => setTimeout(r, 2000));
        if (type === 'v2v') {
            setFinalTranscription("[Audio response would play here, converting the user's speech to another voice.]");
        } else {
            setFinalTranscription("Our quarterly earnings call highlighted a significant uptick in cloud adoption, with revenue from digital services growing by over thirty percent year-over-year. We've also successfully expanded our footprint in the European market, securing three major contracts in the financial sector.");
        }
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-4xl font-semibold text-white mb-6 flex-shrink-0">Multimodal Interactions</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <button onClick={() => handleInteraction('v2v')} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-5 rounded-md text-lg">Voice to Voice</button>
                <label className="w-full cursor-pointer bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-5 rounded-md text-lg text-center">
                    <input type="file" className="hidden" onChange={() => handleInteraction('vid2v')} />
                    Video to Voice/Text
                </label>
            </div>
            {isLoading && <div className="mt-8 flex items-center justify-center gap-2 text-gray-300 text-xl"><IconLoader className="w-6 h-6 animate-spin" /><span>Processing...</span></div>}
            {isRecording && <div className="mt-8 flex items-center justify-center gap-2 text-green-400 text-xl"><Waveform /><span>Recording...</span></div>}
            {finalTranscription && (
                <div className="mt-6 p-6 bg-black/30 rounded-lg flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-2xl text-gray-100">Output:</h3>
                        {displayedTranscription.length < finalTranscription.length && (
                            <button onClick={stopTyping} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-lg">
                                <IconStop className="w-5 h-5" /> Stop
                            </button>
                        )}
                    </div>
                    <p className="text-gray-300 text-xl leading-relaxed">{displayedTranscription}</p>
                </div>
            )}
        </div>
    );
}

// --- Main Quadrant Component ---
function Prototype() {
  const [activeFeatureId, setActiveFeatureId] = useState<string | null>(null);

  useEffect(() => { const scriptId = 'chartjs-script'; if (!document.getElementById(scriptId)) { const script = document.createElement('script'); script.id = scriptId; script.src = 'https://cdn.jsdelivr.net/npm/chart.js'; script.async = true; document.body.appendChild(script); } }, []);

  const features = [
    { id: 'summarizer', title: 'Document Summarization', icon: <IconSummarize />, content: <SummarizerContent /> },
    { id: 'imageGenerator', title: 'Image Generation', icon: <IconImage />, content: <ImageGeneratorContent /> },
    { id: 'dataAnalysis', title: 'Talk to Your Data', icon: <IconData />, content: <DataAnalysisContent /> },
    { id: 'voiceToText', title: 'Multimodal Interactions', icon: <IconMultimodal />, content: <VoiceToTextContent /> },
  ];

  const activeFeature = features.find(f => f.id === activeFeatureId);

  return (
    <div className="w-full h-full relative font-sans bg-gray-900 text-white overflow-hidden">
      <div className={`prototype-grid ${activeFeatureId ? 'blurred' : ''}`}>
        {features.map((feature) => (
          <div key={feature.id} className="quadrant" onClick={() => setActiveFeatureId(feature.id)}>
            <div className="quadrant-content">
              <div className="quadrant-icon">{feature.icon}</div>
              <h3 className="quadrant-title">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={`prototype-content-viewer ${activeFeatureId ? 'visible' : ''}`}>
        <div className="viewer-content-container">
          <button onClick={() => setActiveFeatureId(null)} className="viewer-close-button">
            <IconClose />
          </button>
          <div className="viewer-inner-content">
            {activeFeature?.content}
          </div>
        </div>
      </div>
    </div>
  );
}


// --- Main Slide Component ---
const slideStyle: React.CSSProperties = {
  width: `${SLIDE_WIDTH}px`,
  height: `${SLIDE_HEIGHT}px`,
  padding: 0,
};

export function PrototypeSlide(_: NodeProps) {
  return (
    <article className="slide prototype-slide" style={slideStyle}>
      <Prototype />
    </article>
  );
}