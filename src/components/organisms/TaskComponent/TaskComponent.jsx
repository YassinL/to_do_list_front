import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function TaskComponent({ listId }) {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setIsLoading(true);
          const result = await axios(
            `${process.env.REACT_APP_API_URL}/tasks/${listId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setTasks(result.data);
          setIsLoading(false);
        } catch (error) {
          setError(error.response.data);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        tasks.map((task, index) => (
          <div key={index}>
            <div key={task.id}>
              {task.name} {task.description}
            </div>
            <div className="icons">
              <RiCloseCircleLine />
              <TiEdit />
            </div>
          </div>
        ))
      )}
    </>
  );
}
