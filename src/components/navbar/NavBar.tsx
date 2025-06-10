import { useContext, useEffect, useRef, useState, type JSX } from "react";
import ItemNavBar from "./ItemNavBar";
import { Context } from "../../context";
import CloseIcon from "../../assets/icon-components/close.icon";
import MenuIcon from "../../assets/icon-components/menu.icon";

interface Props {
  items?: { title: string; icon: JSX.Element }[];
}

const NavBar = ({ items = [{ title: "empty", icon: <></> }] }: Props) => {
  const { viewSelected, dispatchtViewSelected } = useContext(Context);

  const [toggle, setToggle] = useState(false);

  const refAnimation = useRef<HTMLDivElement>(null);
  const refNav = useRef<HTMLElement>(null);

  const handleChangeView = (index: number) => {
    dispatchtViewSelected({ type: "set_view", payload: index });
  };

  useEffect(() => {
    const refLi = refAnimation.current;
    const refNavigation = refNav.current;

    if (!refLi || !refNavigation) return;

    refLi.classList.remove("animation-toggle");
    void refLi?.offsetWidth;
    refLi.classList.add("animation-toggle");

    setTimeout(() => {
      if (toggle) {
        refNavigation.classList.remove("animation-nav-reverse");
        refNavigation.classList.add("animation-nav");
      } else {
        refNavigation.classList.remove("animation-nav");
        refNavigation.classList.add("animation-nav-reverse");
      }
    }, 300);
  }, [toggle]);

  return (
    <nav
      ref={refNav}
      className="container-navbar"
      style={{ top: toggle ? "25dvh" : "" }}
    >
      <ul>
        <>
          <li>
            <div ref={refAnimation} onClick={() => setToggle((prev) => !prev)}>
              {toggle ? (
                <CloseIcon color="#142f55" />
              ) : (
                <MenuIcon color="#142f55" />
              )}
            </div>
            <ItemNavBar />
          </li>
          {toggle &&
            items.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                onClick={() => handleChangeView(i)}
              >
                <div
                  style={{
                    backgroundColor: viewSelected.view === i ? "#9fb4d8" : "",
                    transform: viewSelected.view === i ? "scale(1.2)" : "",
                  }}
                >
                  {item.icon}
                </div>
                <ItemNavBar title={item.title} />
              </li>
            ))}
        </>
      </ul>
    </nav>
  );
};

export default NavBar;
