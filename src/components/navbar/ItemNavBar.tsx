import "./index.css";

interface Props {
  title?: string;
}

const ItemNavBar = ({ title }: Props) => {
  return (
    <div>
      <p className="container-item-navbar-paragraph">{title}</p>
    </div>
  );
};

export default ItemNavBar;
