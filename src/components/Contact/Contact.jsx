import React from "react";
import clsx from "clsx";

import css from "./Contact.module.css";

function Contact({ name, number, id, deleteContact }) {
  return (
    <li className={clsx(css.contactItem)}>
      <div>
        <span>👤</span>
        <span>{name}</span>
      </div>
      <div>
        <span>📞</span>
        <span>{number}</span>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
}

export default Contact;
