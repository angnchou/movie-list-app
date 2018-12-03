// import React from "../node_modules/react/dist/react.js";
import List from "./List.js";
import Search from "./search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchQuery: "", //filter with the value you search with
      movieItems: [],
      addInputValue: ""
    };
  }

  handleInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({ searchQuery: this.state.searchValue });
  }

  handleAdd(event) {
    event.preventDefault();
    const toAdd = { title: this.state.addInputValue };
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

  render() {
    return (
      <div className="box">
        <h1>{"MovieList"}</h1>
        <div>
          <form onSubmit={this.handleAdd.bind(this)}>
            <input
              type="text"
              value={this.state.addInputValue}
              onChange={this.handleAddInput.bind(this)}
            />
            <input type="submit" value="Add" />
          </form>
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
