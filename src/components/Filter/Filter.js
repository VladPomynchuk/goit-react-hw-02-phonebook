import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 30px;
`;

const Filter = ({ callback, value }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text " name="filter" onChange={callback} value={value} />
    </>
  );
};

Filter.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
