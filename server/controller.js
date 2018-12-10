const data = [
  {
    title: "movie 1",
    release_date: "2017",
    overview:
      "movie 1 of 2017, movie 1 of 2017, movie 1 of 2017, movie 1 of 2017, movie 1 of 2017, movie 1 of 2017 ",
    runtime: "100 min"
  },
  {
    title: "movie 2",
    release_date: "2017",
    overview:
      "movie 2 of 2017, movie 2 of 2017, movie 2 of 2017, movie 2 of 2017, movie 2 of 2017, movie 2 of 2017 ",
    runtime: "200 min"
  }
];

module.exports = {
  movies: {
    get: (req, res) => {
      res.send(data);
    },

    post: (req, res) => {
      res.send("Hello World");
    }
  }
};
