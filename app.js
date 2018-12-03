// import React from "../node_modules/react/dist/react.js";
import List from "./List.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <h1>{"MovieList"}</h1>
        <div>
          <List list={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default App;
