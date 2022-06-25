// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactsList = ({ data, handleDelete }) => {
  return (
    <ul>
      {data.map(el => {
        return (
          <li key={el.name}>
            {`${el.name}: ${el.number}`}
            <button
              onClick={() => {
                handleDelete(el.name);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  data: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactsList;
