// {list: {movies: Array(5)}
import MovieItem from "./movieItem.js";

const List = props => {
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
        <MovieItem movieItem={movieObj} key={index} />
      ))}
    </ul>
  );
};

export default List;

//a movieItem component functional,
//have a separate button that shows "watched" and "to watch" buttons
/*
return (
    <ul>
      {props.list.map((movieObj, index) => (
        <li className="list" key={index}>
          {movieObj.title}
          <button id="watchedToggle" onClick={props.watchStatus}>
            {"Watched"}
          </button>
        </li>
      ))}
    </ul>
  );
  */
