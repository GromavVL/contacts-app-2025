import { connect } from 'react-redux';
import React from 'react';
import { deleteContacts, updateContact } from '../../store/slices/contactSlice';

function ContactList ({ contacts, deleteContactById, updateContactById }) {
  const changeIsFavorite = (id, checked) =>
    updateContactById(id, { isFavorite: checked });

  return (
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <label>
            <input
              type='checkbox'
              checked={c.isFavorite}
              onChange={({ target: { checked } }) =>
                changeIsFavorite(c.id, checked)
              }
            />{' '}
            {JSON.stringify(c)}
          </label>
          <button onClick={() => deleteContactById(c.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ contactList }) => contactList;

const mapDispatchToProps = dispatch => ({
  deleteContactById: id => dispatch(deleteContacts(id)),
  updateContactById: (id, data) => dispatch(updateContact({ id, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
