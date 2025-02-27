import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import contacts from "../data/contacts.json";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

function App() {
  const getSavedContacts = () => {
    const savedData = localStorage.getItem("contacts");
    return savedData ? JSON.parse(savedData) : contacts;
  };

  const [contactsList, setContactsList] = useState(getSavedContacts());
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsList));
  }, [contactsList]);

  const filteredContacts = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (userData) => {
    const newContact = { ...userData, id: nanoid() };
    setContactsList((prevContactsList) => {
      return [...prevContactsList, newContact];
    });
  };

  const deleteContact = (contactID) => {
    setContactsList((prevContactsList) => {
      return prevContactsList.filter((contact) => contact.id !== contactID);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setFilter={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  );
}

export default App;
