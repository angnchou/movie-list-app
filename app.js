// import React from "../node_modules/react/dist/react.js";
import List from "./List.js";
import Search from "./search.js";
import Add from "./add.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchQuery: "", //filter with the value you search with
      movieItems: [],
      addInputValue: "" //can be local state
    };
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
      movieItems: [toAdd, ...this.state.movieItems],
      addInputValue: ""
    });
  }

  handleAddInput(event) {
    this.setState({ addInputValue: event.target.value });
  }

  searchItems() {
    const query = this.state.searchQuery.toLowerCase();
    return this.state.movieItems.filter(movie => {
      //filter original full list
      return movie.title.toLowerCase().includes(query);
    });
  }

  //toggle watch status
  //button on each title to toggle status
  //on click the status of the title is set to true and added to watched list
  //a watchedList in state so "watched" button can render only these titles
  //on click the page only renders these titles

  render() {
    return (
      <div className="box">
        <h1>{"MovieList!"}</h1>
        <button>{"Watched"}</button>
        <button>{"To watch"}</button>
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
          <List list={this.searchItems()} query={this.state.searchQuery} />
        </div>
      </div>
    );
  }
}

export default App;
//render elements that match search query
