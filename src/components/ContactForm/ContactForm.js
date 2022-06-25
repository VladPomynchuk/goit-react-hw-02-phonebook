import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const initialValues = {
  name: '',
  number: '',
};

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const phoneValid =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().matches(phoneValid, 'Phone number is not valid'),
});

const ContactForm = ({ callback }) => {
  const handleSubmit = (value, { resetForm }) => {
    callback(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <div>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" placeholder="Full name"></Field>
            <FormError name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="number">
            Number
            <Field type="tel" name="number" placeholder="Phone number"></Field>
            <FormError name="number" />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
