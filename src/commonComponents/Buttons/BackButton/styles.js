const styles = () => ({
  buttonContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .3s",
    padding: "10px 20px",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ede7f6",
      transition: "all .3s",
    },
  },
  arrow: {
    color: "#6e45d2",
  },
});

export default styles;
