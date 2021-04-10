import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logo from "../images/rick-and-morty-logo.png";

export default function Navigation() {
  return (
    <div className="header-wrapper">
      <img
        className="logo hidden-mobile"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/799px-Rick_and_Morty.svg.png"
        alt="rick and morty logo"
      />
      <img
        className="logo hidden-desktop"
        src={logo}
        alt="rick and morty logo"
      />
      <nav className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </div>
  );
}
