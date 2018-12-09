// {list: {movies: Array(5)}
import MovieItem from "./movieItem.js";

const Movielist = props => {
  if (!props.query && props.list.length === 0) {
    return <p>{"add a movie!"}</p>;
  }
  if (props.list.length === 0) {
    return <p>{"no movie by that name found"}</p>;
  }

  //use moveItem component to render each movie title
  //need key for each movieItem
  return (
    <ul>
      {props.list.map((movieObj, index) => (
        <MovieItem
          movieItem={movieObj}
          key={index}
          toggleWatch={props.toggleWatch}
          watchColor={props.watchColor}
        />
      ))}
    </ul>
  );
};

Movielist.propTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  query: React.PropTypes.string.isRequired,
  toggleWatch: React.PropTypes.func.isRequired
};

export default Movielist;

//a mvieList component with proptypes
//don't specify movieItem proptype (array of obj)
