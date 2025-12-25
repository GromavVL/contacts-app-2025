import { connect } from 'react-redux';
import React from 'react';
import { deleteContacts } from '../../store/slices/contactSlice';

function ContactList ({ contacts, deleteContactById }) {
  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          {JSON.stringify(c)}
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ contactList }) => contactList;

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
