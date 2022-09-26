import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm  extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleContact = event => {
    const { name, value, number } = event.target;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
     
    this.props.onSubmit({ name, number });
    //   Очищаємо форму
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { nameId, numberId, handleSubmit, handleContact } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={handleContact}
          />

          <label htmlFor={numberId}>Number</label>
          <input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={handleContact}
          />
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
