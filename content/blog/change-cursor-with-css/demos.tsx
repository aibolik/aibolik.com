import * as React from 'react';
import throttle from 'lodash.throttle';

const BRUSH_ICON_DATA_URI = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3e%3cpath fill-rule='evenodd' d='M17.263 2.177a1.75 1.75 0 0 1 2.474 0l2.586 2.586a1.75 1.75 0 0 1 0 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 0 1-.699.409l-5.523 1.68a.75.75 0 0 1-.935-.935l1.673-5.5a1.75 1.75 0 0 1 .466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371-10.28 9.813a.25.25 0 0 0-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 0 0 .1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 0 0 0-.354l-2.586-2.586a.25.25 0 0 0-.354 0L16.061 5.5 19 8.44z'/%3e%3c/svg%3e";

const containerStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '48px',
}

const text: React.CSSProperties = {
  fontSize: '24px',
  textAlign: 'center',
}

const canvasStyles: React.CSSProperties = {
  marginTop: '16px',
  // cursor: `url("${BRUSH_ICON_DATA_URI}") 2 22, auto`,
  background: 'var(--blue12)',
  borderRadius: '8px',
  minHeight: '120px',
  maxWidth: '200px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const pointerRefStyles: React.CSSProperties = {
  display: 'block',
  position: 'fixed',
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  background: 'rgba(52, 12, 59, .6)',
  pointerEvents: 'none',
}

interface DemoProps {
  headline?: string;
  cursorPos?: string;
  showPointer?: boolean;
}

const DemoUsingInlineSvg = ({ cursorPos = '', showPointer = false, headline }: DemoProps) => {
  const [isIn, setIsIn] = React.useState(false);
  const pointerRef = React.useRef<HTMLSpanElement>(null);


  const handleMouseMove = (e: React.MouseEvent) => {
    const el = pointerRef?.current;
    setIsIn(true);
    if (!el) {
      return;
    }
    const x = e.clientX - 8;
    const y = e.clientY - 8;
    console.log(`x: ${x}; y: ${y}`);
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }

  return (
    <div style={containerStyles}>
      {headline && <div style={text}>
        {headline}
      </div>}
      <div style={{ ...canvasStyles, cursor: `url("${BRUSH_ICON_DATA_URI}")${cursorPos}, auto`, }}
        onMouseEnter={() => setIsIn(true)} 
        onMouseLeave={() => setIsIn(false)} 
        onMouseMove={throttle(handleMouseMove, 20)} 
      />
      {isIn && showPointer && <span style={{ ...pointerRefStyles }} ref={pointerRef} />}
    </div>
  );
}

const DemoWithCoordinates = () => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <DemoUsingInlineSvg cursorPos='' showPointer headline='Without coordinates' />
      <DemoUsingInlineSvg cursorPos='2 22' showPointer headline='With adjusted coordinates' />
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  borderRadius: '4px',
  border: 'none',
  color: 'white',
  padding: '8px 16px',
}

const DemoUsingPrebuiltIcons = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '48px',
    }}>
      <button style={{ cursor: 'wait', background: 'var(--blue3)', ...btnStyle }}>
        wait
      </button>
      <button style={{ cursor: 'zoom-in', background: 'var(--amber3)', ...btnStyle }}>
        zoom-in
      </button>
      <button style={{ cursor: 'not-allowed', background: 'var(--plum3)', ...btnStyle }}>
        not-allowed
      </button>
    </div>
  )
}

export { DemoUsingInlineSvg, DemoUsingPrebuiltIcons, DemoWithCoordinates };