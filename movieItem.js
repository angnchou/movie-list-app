//props = {movieItem : {title:XXX, status: false} }
//individual title rendering from list and give it its own component
//if li movieItem is clicked, send it back to change the state selectedMovie

const MovieItem = props => {
  const panel =
    props.selectedMovie === props.movieItem ? <div>{"hi"}</div> : null;

  return (
    <li className="list" onClick={event => props.selectMovie(props.movieItem)}>
      {props.movieItem.title}
      {panel}
      <button
        className="btn-default"
        onClick={event => props.toggleWatch(props.movieItem)}
      >
        {props.movieItem.watchStatus ? "Watched" : "Not watched"}
      </button>
    </li>
  );
};

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
