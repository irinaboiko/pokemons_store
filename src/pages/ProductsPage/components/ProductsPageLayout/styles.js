const styles = () => ({
  cardsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(179px, 1fr))",
    gridGap: 20,
    margin: "20px 0",
  },
  paginationWrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
  },
});

export default styles;
