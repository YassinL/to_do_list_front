import React from "react";
import "./CardList.scss";

const style = {
  background: `url(${process.env.PUBLIC_URL}/assets/fond5.png)`,
  backgroundSize: "cover ",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function CardList({ list }) {
  return (
    <>
      <div className="card" style={style}>
        <h3>{list.name}</h3>
      </div>
    </>
  );
}
