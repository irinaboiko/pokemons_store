const styles = () => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 30,
  },
  inputWrapper: {
    position: "relative",
    marginBottom: 25,

    "&:Last-of-type": {
      marginBottom: 0,
    },
  },
  signUpWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  errorsWrapper: {
    color: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: 11,
    position: "absolute",
    marginTop: 5,
  },
  ["@media (max-width: 576px)"]: {
    text: {
      fontSize: "1.1rem",
    },
  },
  ["@media (min-width: 576px)"]: {
    wrapper: {
      position: "fixed",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
});

export default styles;
