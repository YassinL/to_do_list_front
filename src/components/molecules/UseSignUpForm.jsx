import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function useSignupForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleInputChange = (event) => {
    event.persist();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        data
      );
      if (result.status === 201) {
        console.log("bien inscrit", result.status);
        setData({
          ...data,
          isSubmitting: true,
          errorMessage: null,
        });
        history.push("/login");
      }
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    data,
  };
}
