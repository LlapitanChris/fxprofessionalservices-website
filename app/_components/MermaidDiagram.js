
import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ chart }) => {
  const ref = useRef();

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    mermaid.render('theGraph', chart, (svgCode) => {
      ref.current.innerHTML = svgCode;
    });
  }, [chart]);

  return <div ref={ref} />;
};

export default MermaidDiagram;