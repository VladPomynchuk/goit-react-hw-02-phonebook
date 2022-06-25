const Filter = ({ callback, value }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text " name="filter" onChange={callback} value={value} />
    </label>
  );
};

export default Filter;
