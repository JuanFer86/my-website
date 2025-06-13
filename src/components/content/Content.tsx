import {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import "./index.css";
import { Context } from "../../context";
import ArrowDownIcon from "../../assets/icon-components/arrow-down.icon";
import { views } from "../../constants/views";

type Props = {
  children?: React.ReactNode;
};

const Content = ({ children }: Props) => {
  const {
    viewSelected: { view, direction },
    dispatchtViewSelected,
    hasManyViews,
  } = useContext(Context);

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);

  const [style, setStyle] = useState({
    transformOrigin: "bottom",
  });

  const handleView = (isAdd: boolean) => {
    dispatchtViewSelected({
      type: isAdd ? "increment" : "decrement",
    });
  };

  const handleViewWheel = useCallback(
    (e: WheelEvent) => {
      if (view <= 0 && e.deltaY < 0) return;
      if (view === hasManyViews - 1 && e.deltaY > 0) return;

      handleView(e.deltaY > 0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [view]
  );

  const handleTouchStart = (e: TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (
      (view <= 0 && e.changedTouches[0].clientY >= startY.current) ||
      e.changedTouches[0].clientY === startY.current
    )
      return;
    if (
      view === hasManyViews - 1 &&
      e.changedTouches[0].clientY <= startY.current
    )
      return;
    handleView(e.changedTouches[0].clientY < startY.current);
  };

  useEffect(() => {
    const container = containerRef.current;
    const refEl = ref.current;

    if (!container) return;

    setStyle({ transformOrigin: direction });

    refEl?.classList.remove("rotate-down-enter");

    void refEl?.offsetWidth;

    refEl?.classList.add("rotate-down-enter");

    const animationEnd = () => {
      container?.addEventListener("wheel", handleViewWheel);
      container?.addEventListener("touchstart", handleTouchStart);
      container?.addEventListener("touchend", handleTouchEnd);
    };
    refEl?.addEventListener("animationend", animationEnd);

    return () => {
      refEl?.removeEventListener("animationend", animationEnd);
      container?.removeEventListener("wheel", handleViewWheel);
      container?.removeEventListener("touchstart", handleTouchStart);
      container?.removeEventListener("touchend", handleTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  return (
    <div ref={containerRef} className="container-content">
      {view > 0 && (
        <button
          className="container-content-button"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleView(false);
          }}
          style={{ top: "1rem" }}
        >
          <ArrowDownIcon
            style={{ transform: "rotateZ(180deg) translateY(5px)" }}
          />
        </button>
      )}
      <div ref={ref} className="rotate-down-enter" style={{ ...style }}>
        <h1 style={{ color: "#142f55", fontSize: "30px", textAlign: "center" }}>
          {view !== 0 && views[view].title}
        </h1>
        {children}
      </div>

      {view < hasManyViews - 1 && (
        <button
          className="container-content-button"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            handleView(true);
          }}
          style={{ bottom: "5rem" }}
        >
          <ArrowDownIcon />
        </button>
      )}
    </div>
  );
};

export default Content;
