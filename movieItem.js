//props = {movieItem : {title:XXX, status: false} }
//individual title rendering from list and give it its own component

const MovieItem = props => {
  return (
    <li className="list">
      {props.movieItem.title}
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
  toggleWatch: React.PropTypes.func.isRequired
};
export default MovieItem;
