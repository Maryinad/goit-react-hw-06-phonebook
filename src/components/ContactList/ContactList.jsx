import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';

export function ContactList() {
  const contacts = useSelector(state => state.phonebook.contacts);
  const value = useSelector(state => state.phonebook.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(value.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.length > 0 &&
        filteredContacts.map(({ id, name, number }) => (
          <>
            <ContactItem id={id} key={id} name={name} number={number} />
            {/* <button onClick={() => onDeleteBtn(id)}>Delete</button> */}
          </>
        ))}
    </ul>
  );
}
