// import React from "../node_modules/react/dist/react.js";
import Movielist from "./movieList.js";
import Search from "./search.js";
import Add from "./add.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchQuery: "", //filter with the value you search with
      addInputValue: "", //can be local state
      movieItems: [],

      //the list view the user selects (watched/to watch); use this to filter movieItems and pass to movieList
      //store the conditional to use for rendering in the state/props
      watchedList: false,
      //the state for the panel
      selectedMovie: null
    };

    this.toggleWatch = this.toggleWatch.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  handleInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchQuery: this.state.searchValue, searchValue: "" });
  }

  handleAdd(event) {
    event.preventDefault();
    const toAdd = { title: this.state.addInputValue, watchStatus: false };
    this.setState({
      //copies old state first
      movieItems: [toAdd, ...this.state.movieItems],
      addInputValue: ""
    });
  }

  handleAddInput(event) {
    this.setState({ addInputValue: event.target.value });
  }

  searchItems() {
    //update searchItems to filter list for each view
    const query = this.state.searchQuery.toLowerCase();
    return this.state.movieItems.filter(movie => {
      return (
        movie.watchStatus === this.state.watchedList &&
        movie.title.toLowerCase().includes(query)
      );
    });
  }

  toggleWatch(movieObj) {
    const newMovieItems = [...this.state.movieItems]; // to change state, create new movieItems list , new object then setState by copying title and watchStatus from current movieList
    const index = newMovieItems.indexOf(movieObj);
    newMovieItems[index] = {
      title: movieObj.title,
      watchStatus: !movieObj.watchStatus
    };
    this.setState({ movieItems: newMovieItems });
  }

  //toggle watch status
  //button on each title to toggle status
  //on click the status of the title is set to true and added to watched list
  //a watchedList in state so "watched" button can render only these titles
  //on click the page only renders these titles

  selectMovie(movieObj) {
    this.setState({ selectedMovie: movieObj });
  }

  render() {
    return (
      <div className="box">
        <h1>{"MovieList!"}</h1>
        <button
          className="btn-default"
          onClick={() => {
            this.setState({ watchedList: true });
          }}
        >
          {"Watched"}
        </button>
        <button
          className="btn-default"
          onClick={() => {
            this.setState({ watchedList: false });
          }}
        >
          {"To watch"}
        </button>
        <br />
        <div>
          <Add
            handleAdd={this.handleAdd.bind(this)}
            addInputValue={this.state.addInputValue}
            handleAddInput={this.handleAddInput.bind(this)}
          />
        </div>
        <br />
        <div>
          <Search
            searchValue={this.state.searchValue}
            handleSearch={this.handleSearch.bind(this)}
            handleInput={this.handleInput.bind(this)}
          />
        </div>
        <div>
          <Movielist
            list={this.searchItems()}
            query={this.state.searchQuery}
            toggleWatch={this.toggleWatch}
            selectMovie={this.selectMovie}
            selectedMovie={this.state.selectedMovie}
          />
        </div>
      </div>
    );
  }
}

export default App;

//data fetcher: a function that gets data from state
//do not pass to the children,  pass the data the fetcher returns as props to children

//level 4
//add new state to render panel when movie selected
//action changes state, state decides how the page renders
//when changing between watch and to watch, reset selectedMovie to null
//

//create hardcode panel for now
//fetch data from API
//
