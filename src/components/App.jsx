import React from 'react';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addName = event => {
    this.setState({ name: event.target.value });
  };

  addNumber = event => {
    this.setState({ number: event.target.value });
  };

  addContact = () => {
    const { name, number, contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <div>
          <div>
            <p>Name</p>
            <input
              onChange={this.addName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div>
            <p>Number</p>
            <input
              onChange={this.addNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <button type="button" onClick={this.addContact}>Add contact</button>
          </div>
        </div>
        <h2>Contacts</h2>
        <p>Search:</p>
          <input
            onChange={this.handleFilterChange}
            type="text"
            name="filter"
          />
        <ul>
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                {contact.name} - {contact.number}
              </li>
          ))}
        </ul>
      </div>
    );
  }
}
