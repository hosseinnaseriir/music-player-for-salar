import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Box } from "@mui/system";
import { LOGIN } from "../../api";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";
import { contextsStore } from "./../../contexts/index";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loading, setLoading, isLoggedIn, setIsLoggedIn } =
    useContext(contextsStore);
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  React.useEffect(() => {
    isLoggedIn && navigate("/");
  }, []);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("emailet eshtebahe")
      .required("vared kkon namoosan"),
    password: yup
      .string()
      .required("aamoo bishiii")
      .min(6, "ye payam daram barye parsalipe aziz kamtar az 6tan")
      .max(20),
  });

  const handleSubmitForm = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post(LOGIN, {
        email: values.email,
        password: values.password,
      });
      const { data } = await res;
      setCookie("token", data.token, {
        maxAge: 60 * 24 * 24 * 24,
      });
      setLoading(false);
      navigate("/");
      setIsLoggedIn(true);
    } catch (ex) {
      console.log(ex);
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmitForm,
    validationSchema: schema,
  });

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      component="form"
    >
      <TextField
        sx={{ width: "70%", marginBottom: "1rem" }}
        id="standard-basic"
        label="email"
        variant="standard"
        name="email"
        helperText={formik.errors.email}
        error={formik.errors.password}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <TextField
        sx={{ width: "70%", marginBottom: "1rem" }}
        id="standard-basic"
        label="password"
        variant="standard"
        helperText={formik.errors.password}
        error={formik.errors.password}
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Button type="submit" onClick={formik.handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default Login;
