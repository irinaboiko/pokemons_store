const styles = () => ({
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    margin: "15px 0",
  },
  itemInfo: {
    display: "flex",
    alignItems: "center",
  },
  itemButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  quantityButtons: {
    marginBottom: 10,
  },
  buttonQuantity: {
    fontSize: 20,
    fontWeight: "bold",
    cursor: "pointer",
    margin: "0 5px",
  },
  itemQuantity: {
    fontWeight: "bold",
    margin: "0 10px",
  },
  removeButton: {
    fontSize: 12,
    cursor: "pointer",
  },
  itemPrice: {
    fontWeight: "bold",
    textAlign: "right",
  },
  ["@media (max-width: 576px)"]: {
    cartItem: {
      padding: "20px 5px",
    },
    productName: {
      fontSize: 18,
    },
  },
});

export default styles;
