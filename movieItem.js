//props = {movieItem : {title:XXX, status: false} }
//individual title rendering from list and give it its own component

const MovieItem = props => {
  return (
    <li className="list">
      {props.movieItem.title}
      <button>{"Watched"}</button>
    </li>
  );
};
// props has movieItem thing,
MovieItem.propTypes = {
  movieItem: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    watchStatus: React.PropTypes.bool.isRequired
  }).isRequired
};
export default MovieItem;
