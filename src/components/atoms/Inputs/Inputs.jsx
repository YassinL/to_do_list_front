import React from "react";
import "./Inputs.scss";

export default function Inputs({ text, name, type, onChange, value }) {
  return (
    <div className="component">
      <label htmlFor={name}>{text}</label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={`Entrez votre ${text}`}
      />
    </div>
  );
}
