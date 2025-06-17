import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import "./index.css";

type PropsCarousel = {
  children: ReactNode;
};

const Carousel = ({ children }: PropsCarousel) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<"forward" | "backward">("forward");
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    addedInterval();

    return () =>
      clearInterval(interval.current as ReturnType<typeof setInterval>);
  }, []);

  const addedInterval = () => {
    const track = trackRef.current;
    if (!track) return;

    interval.current = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (directionRef.current === "forward") {
        track.scrollLeft += 2;
        if (track.scrollLeft >= maxScroll) {
          directionRef.current = "backward";
        }
      } else {
        track.scrollLeft -= 2;
        if (track.scrollLeft <= 0) {
          directionRef.current = "forward";
        }
      }
    }, 16); // ~60fps
  };

  const onDragStart = (e: MouseEvent) => {
    if (!trackRef.current) return;

    isDragging.current = true;
    startX.current = e.clientX - trackRef.current?.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onDragEnd = (/* e: MouseEvent */) => {
    isDragging.current = false;
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();

    const x = e.clientX - trackRef.current.offsetLeft;
    const walk = x - startX.current;

    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      className="container-carousel"
      onTouchStartCapture={(e) => e.stopPropagation()}
      onTouchEndCapture={(e) => e.stopPropagation()}
    >
      <div
        className="container-carousel-track"
        ref={trackRef}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseMove={handleDrag}
        onMouseEnter={() =>
          clearInterval(interval.current as ReturnType<typeof setInterval>)
        }
        onMouseLeave={addedInterval}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
