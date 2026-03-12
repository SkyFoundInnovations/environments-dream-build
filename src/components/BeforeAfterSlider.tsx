import { useState, useRef, useCallback, useEffect } from "react";
import { ImageIcon } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string | null;
  afterSrc: string | null;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "",
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Placeholder if no images
  if (!beforeSrc || !afterSrc) {
    return (
      <div className={`relative w-full h-72 md:h-80 bg-muted rounded-xl flex flex-col items-center justify-center gap-3 ${className}`}>
        <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
        <span className="text-sm text-muted-foreground font-body">
          Before & After — Photos coming soon
        </span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-72 md:h-80 rounded-xl overflow-hidden cursor-col-resize select-none touch-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full width, behind) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw', maxWidth: 'none' }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-background shadow-lg z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-primary" />
            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-primary" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-foreground/70 text-background text-xs font-medium px-2.5 py-1 rounded-full font-body z-20">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 bg-foreground/70 text-background text-xs font-medium px-2.5 py-1 rounded-full font-body z-20">
        {afterLabel}
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
