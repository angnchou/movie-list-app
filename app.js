// import React from "../node_modules/react/dist/react.js";
import List from "./List.js";
import Search from "./search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      movieItems: this.props.movies //display full list
    };
  }

  handleInput(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    const query = this.state.searchValue.toLowerCase();
    const searchItems = this.props.movies.filter(movie => {
      //filter original full list
      return movie.title.toLowerCase().includes(query);
    });
    this.setState({ movieItems: searchItems });
  }

  render() {
    return (
      <div className="box">
        <h1>{"MovieList"}</h1>
        <Search
          searchValue={this.state.searchValue}
          handleSearch={this.handleSearch.bind(this)}
          handleInput={this.handleInput.bind(this)}
        />
        <div>
          <List list={this.state.movieItems} />
        </div>
      </div>
    );
  }
}

export default App;
