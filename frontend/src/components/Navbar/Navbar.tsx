import { Link } from "react-router-dom";
import "./Navbar.scss";

interface NavbarProps {
  position: string;
  tabs: string[];
}

function Navbar({ position, tabs }: NavbarProps) {
  return (
    <nav className={"navbar navbar-" + position}>
      {tabs.map((tab) => (
        <Link
          key={tab}
          to={tab === "Home" ? "/" : `/${tab.toLowerCase()}`}
          className="content"
        >
          {tab}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
