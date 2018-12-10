//props = {movieItem : {title:XXX, status: false} }
//individual title rendering from list and give it its own component
//if li movieItem is clicked, send it back to change the state selectedMovie

//level 4: refactor to a class, initialize state to test value of overview, image and year, use those to render the panel
class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      release_date: "",
      overview: "",
      image: "",
      runtime: ""
    };
    this.getPanel = this.getPanel.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  getPanel() {
    return this.props.selectedMovie === this.props.movieItem ? (
      <div>
        <div>
          {"release date: "}
          {this.state.release_date}
        </div>
        <div>
          {"overview: "}
          {this.state.overview}
        </div>
        <div>
          {"runtime: "}
          {this.state.runtime}
          {"min"}
        </div>
        <img src={this.state.image} />

        <button
          className="btn-default"
          onClick={event => this.props.toggleWatch(this.props.movieItem)}
        >
          {this.props.movieItem.watchStatus ? "Watched" : "Not watched"}
        </button>
      </div>
    ) : null;
  }

  getMovieDetails() {
    const api = "be7fec3c03075b25e0f215a32a299657";
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${encodeURIComponent(
      this.props.movieItem.title
    )}`;

    //nested ajax call to get id in order to get image
    $.ajax({
      method: "GET",
      url: movieUrl,
      success: data => {
        const id = data.results[0].id;
        const movieImageUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`;
        $.ajax({
          method: "GET",
          url: movieImageUrl,
          success: dataSecond => {
            this.setState({
              release_date: dataSecond.release_date,
              overview: dataSecond.overview,
              runtime: dataSecond.runtime,
              image: `https://image.tmdb.org/t/p/w200/${dataSecond.poster_path}`
            });
          }
        });
      }
    });
  }
  // var api key = "be7fec3c03075b25e0f215a32a299657";

  render() {
    return (
      <li
        className="list"
        onClick={event => {
          this.props.selectMovie(this.props.movieItem);
          this.getMovieDetails();
        }}
      >
        {this.props.movieItem.title}
        {this.getPanel()}
      </li>
    );
  }
}

//update button text to say "watched" or "not watched"
// props has movieItem object that has title and watchStatus
MovieItem.propTypes = {
  movieItem: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    watchStatus: React.PropTypes.bool.isRequired
  }).isRequired,
  toggleWatch: React.PropTypes.func.isRequired,
  selectMovie: React.PropTypes.func.isRequired,
  selectedMovie: React.PropTypes.object
};
export default MovieItem;
