const styles = () => ({
  wrapper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: 230,
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "#fafafa",
    marginBottom: 20,
  },
  selectWrapper: {
    width: "100%",
    backgroundColor: "#fafafa",
    padding: "5px 20px",
    marginBottom: 20,
  },
  select: {
    width: "100%",
  },
  logInWrapper: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  buttonWrapper: {
    textAlign: "center",
  },
  errorsWrapper: {
    color: "red",
  },
});

export default styles;
