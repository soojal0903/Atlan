import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/aihubLogo.png";

const options = {
  burgerColor:"#eb4034",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "5vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#061f5f",
  link1Text: "Home",
  link2Text: "Popular",
  link3Text: "Contact",
  link4Text: "About", 
  link1Url: "/",
  link2Url: "/popular",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.8vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  nav1Transition:0.4,
  nav2Transition:0.85,
  nav3Transition:1.3,
  nav4Transition:1.75,
  link1ColorHover: "#eb4034",
  link1Margin: "1.1vmax"
};

const Header = () => {
  return <ReactNavbar {...options}/>;
};

export default Header;