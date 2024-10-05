"use client";
// context/CalendarContext.js
import React, { createContext, useCallback, useState } from "react";
import Swal from "sweetalert2";

// Create a Context5
export const CalendarContext = createContext(null);

// Create a Provider Component
export const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { title: "Meeting with Team", date: "2024-08-05" },
    { title: "Doctor Appointment", date: "2024-08-08" },
    { title: "Project Deadline", date: "2024-08-12" },
    { title: "Workshop", date: "2024-08-20" },
  ]);

  const [eventData, setEventData] = useState({ title: "", date: "" });
  // today Date
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;
  const formattedDate = `${year}-${month}-${day}`;

  //  add event with inputs
  const handleAddEvent = () => {
    if (formattedDate <= eventData.date && eventData.title != "") {
      setEvents([...events, eventData]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Date Not Avaliable",
      });
    }
    setEventData({ title: "", date: "" });
  };
  // enhance performance
  useCallback(handleAddEvent, []);

  // add event with select
  const addEvent = (event) => {
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
    // enhance performance
  useCallback(addEvent, []);
  // clear selected Date
  const resetSelectedDate = () => {
    setEvents([]);
  };
    // enhance performance
  useCallback(resetSelectedDate, []);

  return (
    <CalendarContext.Provider
      value={{
        events,
        addEvent,
        eventData,
        handleAddEvent,
        setEventData,
        resetSelectedDate,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
