import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import InfoTask from "../../molecules/InfoTask/InfoTask";
import TaskForm from "../../molecules/TaskForm/TaskForm";
import PersonnelBar from "../../organisms/PersonnelBar/PersonnelBard";
import TaskComponent from "../../organisms/TaskComponent/TaskComponent";

export default function List() {
  const [list, setList] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const result = await axios(
            `${process.env.REACT_APP_API_URL}/lists/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setList(result.data);
          console.log("list", result.data);
        } catch (error) {
          setError(error.response.data);
        }
      }
    };

    fetchData();
  }, []);

  console.log("list", list.id);
  return (
    <div>
      <div className="board_personnelBar">
        <PersonnelBar />
      </div>
      {error !== "" ? (
        <div className="span">
          <span>{error.description}</span>
        </div>
      ) : null}
      <div>{list.name}</div>
      <div>
        <TaskForm listId={list.id} />
      </div>
      <div>
        <InfoTask list={list} fallback="Loading..." />
      </div>
      {/* <div>
        <TaskComponent listId={list.id} />
      </div> */}
    </div>
  );
}
