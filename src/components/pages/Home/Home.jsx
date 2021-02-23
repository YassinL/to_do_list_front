import React from "react";
import Button from "../../atoms/Button/Button";
import NavBar from "../../organisms/NavBar/NavBar";
import Footer from "../../organisms/Footer/Footer";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div>
        <NavBar />
      </div>
      <div className="home_presentation">
        <p>
          Avec <b>List It</b>, vous pouvez créer des listes et organiser vos
          projets comme bon vous semble.
        </p>
        <div className="home_presentation_button">
          <Button text={"Commencer c'est ici !"} />
        </div>
      </div>
      <div className="home_details">
        <div className="home_details_image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/image_site_list.png`}
            alt=""
          />
        </div>
        <div className="home_details_paragraphe">
          <p>
            <b>
              Collaborez sur une plateforme centrale et créez un espace
              collaboratif pour gérer l’avancement de vos projets !
            </b>{" "}
            Dites adieux aux réunions sans fin et allez à l’essentiel
            Centralisez vos différentes tâches et leurs attributions pour
            améliorer votre communication à l’aide d’un outil simple et
            pratique.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
