import React from "react";
import Contact from "../Contact/Contact";
import clsx from "clsx";

import css from "./ContactList.module.css";

function ContactList({ contacts, deleteContact = { deleteContact } }) {
  return (
    <ul className={clsx(css.contactList)}>
      {contacts.map((contact) => (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
