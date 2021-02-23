import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function UseCreateList() {
  const [list, setList] = useState({
    name: "",
    isPosted: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    setList({
      ...list,
      [name]: value,
    });
    console.log("HELLLLO", list);
  };

  const history = useHistory();
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
        `http://localhost:8080/api/lists`,
        list,
        header
      );
      console.log("Result List", result);
      if (result.status === 201) {
        console.log("Result List", result);
        setList({
          ...list,
          isPosted: true,
          errorMessage: null,
        });
        history.push(`/board/${result.data.urlName}`);
      }
    } catch (error) {
      setList({
        ...list,
        isPosted: false,
        errorMessage: error.response,
      });
    }
  };
  return {
    handleSubmit,
    handleChange,
    list,
  };
}
