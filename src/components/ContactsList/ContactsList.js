// import { nanoid } from 'nanoid';

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

export default ContactsList;
