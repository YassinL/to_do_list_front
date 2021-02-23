import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router";

export default function useSigninForm() {
  const [connexion, setConnexion] = useState({
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConnexion((connexion) => ({
      ...connexion,
      [name]: value,
    }));
  };

  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setConnexion({
        ...connexion,
        isSubmitting: true,
      });
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/signin`,
        connexion
      );
      if (result.status === 200) {
        console.log("Result", result.status);
        history.push("/board");
        return dispatch({ type: "SIGNIN", payload: result });
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.response,
      });
    }
  };

  return {
    handleSubmit,
    handleChange,
    connexion,
  };
}
