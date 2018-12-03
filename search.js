const search = props => {
  return (
    <form onSubmit={props.handleSearch}>
      <input
        className="search"
        type="text"
        value={props.searchValue}
        onChange={props.handleInput}
      />
      <input type="submit" />
    </form>
  );
};

export default search;
