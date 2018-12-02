class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="MovieListTitle">MovieList Title</div>
        {JSON.stringify(this.props.movies)}
      </div>
    );
  }
}

export default App;
