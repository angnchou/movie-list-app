// import React from "react";
//import title from "./title.js";

// {list: {movies: Array(5)}
const List = props => {
  if (!props.query && props.list.length === 0) {
    return <p>{"add a movie!"}</p>;
  }
  if (props.list.length === 0) {
    return <p>{"no movie by that name found"}</p>;
  }
  return (
    <ul>
      <div>
        {props.list.map((movieObj, index) => (
          <li className="list" key={index}>
            {movieObj.title}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default List;
