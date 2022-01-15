import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ContactListField,
  DeleteButton,
  ContactTitle,
  ContactItem,
  ContactInfo,
} from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListField>
      <ContactTitle>Total amount of contacts:</ContactTitle>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactInfo>
            {name}: {number}
          </ContactInfo>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
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
