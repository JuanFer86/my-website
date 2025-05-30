import { useContext } from "react";
import "./index.css";
import { Context } from "../../context";

interface Props {
  title?: string;
  index: number;
}

const ItemNavBar = ({ title, index }: Props) => {
  const { viewSelected, dispatchtViewSelected, hasManyViews } =
    useContext(Context);

  const handleChangeView = () => {
    dispatchtViewSelected({ type: "set_view", payload: index });
  };

  return (
    <div
      className="container-item-navbar"
      style={{
        bottom: `${(hasManyViews - 1 - index) * 0.9}rem`,
        backgroundColor: viewSelected.view === index ? "#a6c1ea" : "",
      }}
      onClick={handleChangeView}
    >
      <p className="container-item-navbar-paragraph">{title}</p>
    </div>
  );
};

export default ItemNavBar;
