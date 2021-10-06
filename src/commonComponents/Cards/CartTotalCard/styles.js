const styles = () => ({
  cardWrapper: {
    textAlign: "right",
    padding: 20,
    margin: "20px 0",
  },
  ["@media (max-width: 576px)"]: {
    cardWrapper: {
      textAlign: "center",
    },
  },
});

export default styles;
