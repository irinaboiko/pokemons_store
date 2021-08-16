const styles = () => ({
  cartItem: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    padding: "20px 50px",
    margin: "15px 0",
  },

  itemInfo: {
    display: "flex",
    alignItems: "flex-start",
  },

  itemTitle: {
    //color: "#512da8",
  },

  itemButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  quantityButtons: {
    marginBottom: 10,
  },

  itemQuantity: {
    //color: "#512da8",
    fontWeight: "bold",
    margin: "0 10px",
  },

  itemPrice: {
    //color: "#512da8",
    fontWeight: "bold",
    textAlign: "right",
  },

  totalPrice: {
    color: "#512da8",
    fontWeight: "bold",
  },
});

export default styles;
