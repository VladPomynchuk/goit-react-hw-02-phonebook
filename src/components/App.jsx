import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 60px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 1024px;
`;

const WrapperBorder = styled.div`
  padding: 15px;
  width: 500px;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  padding: 15px;
  width: 500px;
`;

const MainTitle = styled.h1`
  margin: 0px 0px 15px 0px;
  padding: 0;
`;
const Title = styled.h2`
  margin: 0px 0px 15px 0px;
  padding: 0;
`;

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = value => {
    const { name } = value;

    if (this.state.contacts.some(el => el.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => {
      const newArray = [...contacts];

      newArray.push(value);

      return { contacts: newArray };
    });
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.name !== id),
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <WrapperBorder>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm callback={this.handleSubmit} />
        </WrapperBorder>

        <Wrapper>
          <Title>Contacts</Title>
          <Filter callback={this.handleFilter} value={filter} />

          {filter === '' ? (
            <ContactsList handleDelete={this.handleDelete} data={contacts} />
          ) : (
            <ContactsList
              handleDelete={this.handleDelete}
              data={filterContacts}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
}
