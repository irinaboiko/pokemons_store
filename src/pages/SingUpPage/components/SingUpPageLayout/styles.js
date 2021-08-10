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
  inputWrapper: {
    width: "100%",
    marginBottom: 20,

    "&:Last-of-type": {
      marginBottom: 0,
    },
  },
});

export default styles;
