import { NavItem } from "models/generic.model";
import "./index.scss";
import { NavLink } from "react-router-dom";

const NavMenu = ({ className = "", items }: Props) => {
  const content = items.map(({ name, path }) => (
    <NavLink key={name} to={path}>
      {name}
    </NavLink>  
  ));

  return <nav className={`nav-menu ${className}`}>{content}</nav>;
};

type Props = {
  className?: string;
  items: NavItem[];
};

export default NavMenu;
