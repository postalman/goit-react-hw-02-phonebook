import React from 'react';

class ContactList extends React.Component {
    handleDelete = (contactId) => {
      this.props.deleteContact(contactId);
    };
  
    render() {
      const { contacts } = this.props;
  
      return (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.number} </span>
              <button onClick={() => this.handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      );
    }
  }

  export default ContactList;