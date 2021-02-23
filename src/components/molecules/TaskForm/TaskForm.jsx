import axios from "axios";
import React, { useState, useEffect, useRef, useContext } from "react";
import TaskContext from "../../../context/TaskContext";

export default function TaskForm({ listId }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    isPosted: false,
    errorMessage: null,
  });

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const token = localStorage.getItem("token");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/tasks/${listId}`,
        task,
        header
      );
      console.log("Result List", result);
      if (result.status === 201) {
        console.log("Result List", result);
        setTask({
          ...task,
          isPosted: true,
          errorMessage: null,
        });
      }
    } catch (error) {
      setTask({
        ...task,
        isPosted: false,
        errorMessage: error.response,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        <input
          placeholder="Ajouter un nom"
          value={task.name}
          onChange={handleChange}
          name="name"
          ref={inputRef}
        />
        {/* <input
          placeholder="Ajouter une description"
          value={task.description}
          onChange={handleChange}
          name="description"
          ref={inputRef}
        /> */}
        <button onClick={handleSubmit}>Ajouter une Task</button>
      </>
    </form>
  );
}
