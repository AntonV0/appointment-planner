import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>

      {/* Contact name input */}
      <label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />

      {/* Phone number input */}
      <label>
        <input
          name="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="Phone Number"
          // Regex for UK mobile numbers
          pattern="^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$"
        />
      </label>
      <br />

      {/* Email address input */}
      <label>
        <input 
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email Address"
        />
      </label>
      <br />

      {/* Submit */}
      <input 
        type="submit"
        value="Add Contact"
      />
    </form>
  );
};
