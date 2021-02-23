import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "./InfoTask.scss";

export default function infoTask({ list, fallback }) {
  if (!list || list.length === 0) {
    return fallback;
  }
  return (
    <>
      {list.Tasks.map((task) => {
        return (
          <div className="task">
            <div style={{ textTransform: "capitalize" }} key={task.name}>
              <div>Nom : {task.name}</div>
            </div>
            <div className="icons">
              <TiEdit />
              <RiCloseCircleLine />
            </div>
          </div>
        );
      })}
    </>
  );
}
