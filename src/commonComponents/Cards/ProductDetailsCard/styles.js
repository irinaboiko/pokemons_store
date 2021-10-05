const styles = () => ({
  cart: {
    overflow: "hidden",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginBottom: 20,
  },

  ["@media (max-width: 768px)"]: {
    cart: {
      gridTemplateColumns: "1fr",
    },
    productName: {
      fontSize: "2rem",
    },
  },

  ["@media (max-width: 576px) and (min-width: 768px)"]: {
    productImage: {
      height: "400px",
    },
  },
});

export default styles;
