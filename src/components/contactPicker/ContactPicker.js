import React from "react";

// Extract contacts array, contact names, and onChange callback events
export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    // Render select element with the onChange attribute set to the callback function 
    <select name={name} onChange={onChange}>
      {/* Default option element */}
      <option value={""} key={-1} selected="selected">
        No Contact Selected
      </option>
      {/* Iteratively add option elements using contact names from contacts array */}
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
