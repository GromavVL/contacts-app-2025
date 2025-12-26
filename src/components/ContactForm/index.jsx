import { connect } from 'react-redux';
import React from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validatiosnShemas';
import { createContact } from '../../store/slices/contactSlice'

function ContactForm ({ createNewContact }) {
  const initialValues = {
    fullName: '',
    phoneNumber: '',
  };
  const submitHandler = (values, { resetForm }) => {
    createNewContact(values);
    console.log('values :>> ', values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      <Form>
        <label>
          Name:{' '}
          <Field
            name='fullName'
            type='text'
            autoFocus
            placeholder='Contact Name'
          />
          <ErrorMessage name='fullName' component={'div'} />
        </label>
        <br />
        <label>
          Phone Number:
          <Field name='phoneNumber' type='text' placeholder='+380' />
          <ErrorMessage name='phoneNumber' component={'div'} />
        </label>
        <br />
        <button type='submit'>
          Add
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewContact: data => dispatch(createContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
