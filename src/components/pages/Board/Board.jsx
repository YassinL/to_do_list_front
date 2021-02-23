import React from "react";
import GetList from "../../organisms/GetList/GetList";
import PersonnelBar from "../../organisms/PersonnelBar/PersonnelBard";
import "./Board.scss";

export default function Board() {
  return (
    <div className="board">
      <div className="board_personnelBar">
        <PersonnelBar />
      </div>
      <div className="board_personnels">
        <h2>Tableaux personnels</h2>
        <div>
          <GetList />
        </div>
      </div>
    </div>
  );
}
