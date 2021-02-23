import React from "react";
import UseSignup from "../../molecules/UseSignUpForm";
import Inputs from "../../atoms/Inputs/Inputs";
import Footer from "../../organisms/Footer/Footer";
import "./Signup.scss";
import { HashLink } from "react-router-hash-link";

export default function Signup() {
  const { data, handleInputChange, handleSubmit } = UseSignup();

  return (
    <div className="signup">
      <div className="signup_image">
        <HashLink to="/#">
          <img
            src={`${process.env.PUBLIC_URL}/logo_site_list.png`}
            alt="logo du site"
          />
        </HashLink>
      </div>
      <div className="signup_title">
        <h2>Inscrivez-vous à votre compte</h2>
      </div>
      <div className="signup_form">
        <form noValidate onSubmit={handleSubmit}>
          <Inputs
            text={"Prénom"}
            name={"firstName"}
            type={"text"}
            onChange={handleInputChange}
            value={data.firstName}
          />
          <Inputs
            text={"Nom"}
            name={"lastName"}
            type={"text"}
            onChange={handleInputChange}
            value={data.lastName}
          />
          <Inputs
            text={"Email"}
            name={"email"}
            type={"email"}
            onChange={handleInputChange}
            value={data.email}
          />
          <Inputs
            text={"Mot de passe"}
            name={"password"}
            type={"password"}
            onChange={handleInputChange}
            value={data.password}
          />
          {data.errorMessage && (
            <div className="span">
              <span>{data.errorMessage.data.errors[0].message}</span>
            </div>
          )}
          <div className="signup_button">
            <button type="submit">S'INSCRIRE</button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
