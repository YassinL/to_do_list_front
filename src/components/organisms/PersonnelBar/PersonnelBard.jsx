import React from "react";
import "./PersonnelBar.scss";
import SquareComponent from "../../atoms/SquareComponent/SquareComponent";
import AdditionSign from "../../atoms/SVG/Addition";
import Profil from "../../atoms/SVG/Profil";
import List from "../../atoms/SVG/List";
import HomeSign from "../../atoms/SVG/HomeSign";
import { HashLink } from "react-router-hash-link";

export default function PersonnelBard() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <div>
          <SquareComponent>
            <>
              <List />
              <h4>Tableaux</h4>
            </>
          </SquareComponent>
        </div>
        <div>
          <SquareComponent>
            <HomeSign />
          </SquareComponent>
        </div>
      </div>
      <div className="navbar_image">
        <HashLink to="/board/#">
          <img src={`${process.env.PUBLIC_URL}/logo_site_list.png`} alt="" />
        </HashLink>
      </div>
      <div className="navbar_right">
        <div className="navbr_right_addition">
          <SquareComponent>
            <AdditionSign />
          </SquareComponent>
        </div>
        <div>
          <SquareComponent>
            <Profil />
          </SquareComponent>
        </div>
      </div>
    </div>
  );
}
