import React, { useState } from "react";
import axios from "axios";
// import UseCreateList from "../../molecules/UseCreateList";
import {
  Modal,
  FormControl,
  Grid,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    padding: theme.spacing(2, 4, 3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
  paper: {
    borderRadius: "7px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  title: {
    fontSize: 16,
  },
}));

export default function ModalList() {
  const classes = useStyles();
  // const { list, handleChange, handleSubmit } = UseCreateList();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();
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
        `${process.env.REACT_APP_API_URL}/lists`,
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
        // setOpen(false);
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

  return (
    <div className="modal">
      <div>
        <div onClick={handleOpen}>
          <h3>Créer une Liste</h3>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
      >
        <div className={classes.paper}>
          <Grid className={classes.button}>
            <h2 className={classes.title}>Créer Votre liste</h2>
          </Grid>

          <FormControl action="POST" onSubmit={handleSubmit}>
            <Grid>
              <TextField
                id="outlined-full-width"
                name="name"
                label="Nom"
                type="text"
                placeholder="Nom"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={handleChange}
                value={list.name}
              />
            </Grid>
            <Grid className={classes.button}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // onClick={() => {
                //   handleSubmit();
                //   setOpen(false);
                // }}
                onClick={handleSubmit}
              >
                Créer
              </Button>
            </Grid>
            {list.errorMessage && (
              <div className="span">
                <span>{list.errorMessage.data.errors[0].message}</span>
              </div>
            )}
          </FormControl>
        </div>
      </Modal>
    </div>
  );
}
