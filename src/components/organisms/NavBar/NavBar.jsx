/* eslint-disable react/self-closing-comp */
import React from "react";
import "./NavBar.scss";
import Button from "../../atoms/Button/Button";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="navBar">
      <div className="navBar_image">
        <HashLink to={"/#"}>
          <img
            src={`${process.env.PUBLIC_URL}/logo_site_list.png`}
            alt="Logo de l'application to do list"
          />
        </HashLink>
      </div>
      <div className="navBar_button">
        <div className="navBar_button_login">
          <HashLink to={"/login/#"}>
            <Button text={"Connexion"} />
          </HashLink>
        </div>
        <div className="navbar_button_signup">
          <HashLink to={"/signup/#"}>
            <Button text={"Inscription"} />
          </HashLink>
        </div>
      </div>
    </div>
  );
}
