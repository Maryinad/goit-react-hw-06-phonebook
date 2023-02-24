import React, { useState } from 'react';
import {
  FormField,
  TitleName,
  TitleNumber,
  InputName,
  InputNumber,
  Btn,
} from './PhoneBook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContactsAction } from 'redux/phoneBook/phoneReducer';

export function PhoneBook() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.trim());
        break;

      case 'number':
        setNumber(value.trim());
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`Contact ${name} is already exist`);
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    dispatch(addContactsAction(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormField onSubmit={handleSubmit}>
        <TitleName htmlFor="">Name</TitleName>
        <InputName
          type="text"
          name="name"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          id
          required
        />
        <TitleNumber htmlFor="">Number</TitleNumber>
        <InputNumber
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Btn type="submit">Add contact</Btn>
      </FormField>
    </>
  );
}
