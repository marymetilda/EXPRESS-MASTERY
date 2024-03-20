const homeController = (req, res) => {
  const data = {
    name: "Metilda",
    userId: 3,
  };

  res.render("index", data);
};

export default homeController;
