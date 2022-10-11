import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

// Extract contacts and addContact props
export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if contact name is not a duplicate
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  // useEffect hook that checks if the contact name is a duplicate 
  useEffect(() => {
    const nameIsDuplicate = () => {
      const nameFound = contacts.find((contact) => contact.name === name);
      if (nameFound !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate])

  return (
    <div>
      <section>
        {/* Notify user if contact name is a duplicate */}
        <h2>Add Contact {duplicate ? " - This contact name already exists" : ""}</h2>

        {/* Render ContactForm with props */}
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {/* Render TileList with props */}
        <TileList 
          tiles={contacts} 
        />
      </section>
    </div>
  );
};