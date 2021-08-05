const styles = () => ({
  wrapper: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    marginBottom: 20,

    "&:Last-of-type": {
      marginBottom: 0,
    },
  },
  signInWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default styles;
