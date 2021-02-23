import axios from "axios";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import CardList from "../../molecules/CardList/CardList";
import ModalList from "../ModalList/ModalList";
import "./GetList.scss";

export default function GetList() {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const result = await axios(`${process.env.REACT_APP_API_URL}/lists`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setLists(result.data);
        } catch (error) {
          setError(error.response.data);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="getList">
      {error !== "" ? (
        <div className="span">
          <span>{error.description}</span>
        </div>
      ) : null}
      <div className="getList_card">
        {lists.map((list) => {
          return (
            <HashLink to={`/board/${list.id}`}>
              <CardList key={list.id} list={list} />
            </HashLink>
          );
        })}
      </div>
      <div className="getList_create">
        <ModalList />
      </div>
    </div>
  );
}
