import React from "react";
import { HashLink } from "react-router-hash-link";
import Inputs from "../../atoms/Inputs/Inputs";
import UseSignin from "../../molecules/UseSignInForm";
import Footer from "../../organisms/Footer/Footer";
import "./Login.scss";

export default function Login() {
  const { handleSubmit, handleChange, connexion } = UseSignin();

  return (
    <div>
      <div className="sigin">
        <div className="signin_image">
          <HashLink to="/#">
            <img
              src={`${process.env.PUBLIC_URL}/logo_site_list.png`}
              alt="logo du site"
            />
          </HashLink>
        </div>
        <div className="signin_title">
          <h2>Vous pouvez désormais vous connecter</h2>
        </div>
        <div className="signin_form">
          <form noValidate onSubmit={handleSubmit}>
            <Inputs
              text={"Email"}
              name={"email"}
              type={"email"}
              onChange={handleChange}
              value={connexion.email}
            />
            <Inputs
              text={"Mot de passe"}
              name={"password"}
              type={"password"}
              onChange={handleChange}
              value={connexion.password}
            />
            {connexion.errorMessage && (
              <div className="span">
                <span>{connexion.errorMessage.data.description}</span>
              </div>
            )}
            <div className="signin_button">
              <button type="submit">Log In !</button>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
