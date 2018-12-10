const add = props => {
  return (
    <div>
      <form onSubmit={props.handleAdd}>
        <input
          type="text"
          value={props.addInputValue}
          onChange={props.handleAddInput}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default add;
