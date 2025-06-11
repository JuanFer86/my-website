import { useContext, useEffect, useRef, useState, type JSX } from "react";
import ItemNavBar from "./ItemNavBar";
import { Context } from "../../context";
import CloseIcon from "../../assets/icon-components/close.icon";
import MenuIcon from "../../assets/icon-components/menu.icon";

interface Props {
  items?: { title: string; icon: JSX.Element }[];
}

const NavBar = ({ items = [{ title: "empty", icon: <></> }] }: Props) => {
  // const isMobile = useMediaQuery("(max-width: 430px)");

  const { viewSelected, dispatchtViewSelected } = useContext(Context);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleList, setToggleList] = useState(false);

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

    if (toggleMenu) {
      refNavigation.classList.remove("animation-nav-back");
      refNavigation.classList.add("animation-nav");

      setToggleList(true);
    } else {
      refNavigation.classList.remove("animation-nav");
      refNavigation.classList.add("animation-nav-back");
      setTimeout(() => {
        setToggleList(false);
      }, 500);
    }
  }, [toggleMenu]);

  return (
    <nav
      ref={refNav}
      className="container-navbar"
      // style={{ top: toggleMenu && !isMobile ? "25dvh" : "" }}
    >
      <ul>
        <>
          <li>
            <div
              ref={refAnimation}
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              {toggleMenu ? (
                <CloseIcon color="#142f55" />
              ) : (
                <MenuIcon color="#142f55" />
              )}
            </div>
            <ItemNavBar />
          </li>
          {toggleList &&
            items.map((item, i) => (
              <li
                key={`${item.title}-${i}`}
                onClick={() => handleChangeView(i)}
                style={{
                  backgroundColor: toggleList ? "#c7d5eb96" : "",
                  borderRadius: "3rem",
                }}
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
