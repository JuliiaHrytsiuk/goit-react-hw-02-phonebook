import React from "react";
import PropTypes from "prop-types";
import { ContactItem, ContactInfo, DeleteButton } from "./ContactItem.styled";

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
