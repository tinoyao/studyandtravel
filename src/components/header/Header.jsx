import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" :  "header"}>
        <a href="/" className="logo">
          <span className="logo-name">Study and Travel</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "ligth-menu menu"}>

            <li>
              <a href="#inicio">Inicio</a>
            </li>

            <li>
              <a href="#quiensoy">Quien soy</a>
            </li>


            <li>
              <a href="#servicios">Servicios</a>
            </li>


            <li>
              <a href="#sstudiar">Estudiar</a>
            </li>

            <li>
              <a href="#vivirenGoldCoast">Vivir en Gold Coast</a>
            </li>

            <li>
              <a href="#faqs">FAQs</a>
            </li>

          <li>
            <a href="#escribeme">Escribeme</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
