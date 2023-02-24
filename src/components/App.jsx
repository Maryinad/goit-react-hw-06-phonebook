import { PhoneBook } from './PhoneBook/PhoneBook.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { Filter } from '../components/Filter/Filter.jsx';
import { TitlePhone, TitleCont } from './App.styled';

export function App() {
  //передаем пропсами
  return (
    <>
      <TitlePhone>Phonebook</TitlePhone>
      <PhoneBook />
      <TitleCont>Contacts</TitleCont>
      <Filter />
      <ContactList />
    </>
  );
}
