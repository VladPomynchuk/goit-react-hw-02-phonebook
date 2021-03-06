import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, Div, ErrorText } from './ContactForm.styled';

export const initialValues = {
  name: '',
  number: '',
};

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
        <Label htmlFor="name">Name</Label>
        <Div>
          <Field type="text" name="name" placeholder="Full name"></Field>
          <FormError name="name" />
        </Div>

        <Label htmlFor="number">Number</Label>
        <Div>
          <Field type="tel" name="number" placeholder="Phone number"></Field>
          <FormError name="number" />
        </Div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
