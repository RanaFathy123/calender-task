"use client";
// context/CalendarContext.js
import React, { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

// Create a Context
export const CalendarContext = createContext(null);

// Create a Provider Component
export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);

    if (formattedDate <= event.startStr) {
      setEvents([...events, { title: "Event", date: event.startStr }]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Date Not Avaliable",
      });
    }
  };

  return (
    <CalendarContext.Provider value={{ events, addEvent }}>
      {children}
    </CalendarContext.Provider>
  );
};
