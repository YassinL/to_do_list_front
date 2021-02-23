import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Routes from "./components/Routes";
import AuthContext from "./context/AuthContext";
import reducer from "./reducer/AuthReducer";
import TaskContext from "./context/TaskContext";

import "./App.scss";

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
  isFetching: true,
};

export default function App() {
  // authentification
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextAuth = {
    state,
    dispatch,
  };

  //Task
  const [tasks, setTasks] = useState([]);
  const contextTask = {
    tasks,
    setTasks,
  };

  // Fetch de la route User/me pour conserver le state du USER

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const result = await axios(
            `${process.env.REACT_APP_API_URL}/user/me`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (result.status === 200) {
            dispatch({
              type: "LOAD_USER",
              payload: result.data,
              token,
            });
          }
        } catch (error) {
          dispatch({
            type: "LOGOUT",
          });
        }
      } else {
        dispatch({
          type: "NO_USER",
        });
      }
    };
    fetchUser();
  }, []);

  console.log("STATE APP", state);
  return (
    <Router>
      <AuthContext.Provider value={contextAuth}>
        <TaskContext.Provider value={contextTask}>
          <Routes />
        </TaskContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
}
