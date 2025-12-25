import React from "react";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";

function ContactPage() {
  return (
    <section>
      <h3>ContactPage</h3>
      <ContactForm />
      <ContactList />
    </section>
  );
}

export default ContactPage;
