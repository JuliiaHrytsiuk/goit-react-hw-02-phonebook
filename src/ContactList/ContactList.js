import React from "react";
import PropTypes from "prop-types";
import { ContactListField } from "./ContactList.styled";
import ContactListItem from "../ContactItem";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListField>
      {contacts.map((id, name, number) => (
        <ContactListItem
          name={name}
          key={id}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListField>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
