// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

const ContactsList = ({ data, handleDelete }) => {
  return (
    <div>
      <List>
        {data.map(el => {
          return (
            <Item key={el.name}>
              {`${el.name}: ${el.number}`}
              <button
                onClick={() => {
                  handleDelete(el.name);
                }}
              >
                Delete
              </button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
