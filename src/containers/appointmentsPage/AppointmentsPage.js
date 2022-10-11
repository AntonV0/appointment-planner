import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// Extract appointments and addAppointment props
export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  //Define state variables
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add appointment info and clear data  
    addAppointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {/* Render AppointmentForm with props */}
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {/* Render TileList with props */}
        <TileList
          tiles={appointments}
        />
      </section>
    </div>
  );
};
