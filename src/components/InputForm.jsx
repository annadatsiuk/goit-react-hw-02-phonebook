import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

export class InputForm extends Component {
  state = {
      contacts: [],
  };

  addContact = data => {
      this.setState(prev => {
          const newContact = {
              id: nanoid(),
              ...data
        }
      return {
        contacts: [...prev.contacts, newContact]
      };
    });
  };

  render() {
    const { addContact } = this;
    const { contacts } = this.state;
    return (
      <div>

          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        
        <h2>Contacts</h2>
        <ContactList items={contacts} />
      </div>
    );
  }
}

export default InputForm;
