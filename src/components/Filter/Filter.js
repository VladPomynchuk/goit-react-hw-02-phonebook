import PropTypes from 'prop-types';

const Filter = ({ callback, value }) => {
  return (
    <label htmlFor="filter">
      Find contacts by name
      <input type="text " name="filter" onChange={callback} value={value} />
    </label>
  );
};

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
