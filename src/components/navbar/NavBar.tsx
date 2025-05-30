import ItemNavBar from "./ItemNavBar";

interface Props {
  items?: string[];
}

const NavBar = ({ items = ["empty", "empty2"] }: Props) => {
  return (
    <footer className="container-navbar">
      {items.map((item, i) => (
        <ItemNavBar key={`${item}-${i}`} title={item} index={i + 1} />
      ))}
    </footer>
  );
};

export default NavBar;
