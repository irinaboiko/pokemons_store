const styles = () => ({
  cardWrapper: {
    padding: "20px 40px",
  },

  ["@media (max-width: 768px)"]: {
    cardWrapper: {
      padding: "20px 10px",
    },
    caption: {
      fontSize: "1.5rem",
    },
  },
});

export default styles;
