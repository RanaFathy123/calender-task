"use client";
import { CalendarContext } from "@/context/CalenderContext";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Fullcalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { memo, useContext } from "react";

const Calender = () => {
  const { events, addEvent } = useContext(CalendarContext);

  return (
    <Fullcalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      height="80vh"
      selectable={true}
      select={addEvent}
      events={events}
      eventClick={addEvent}
      longPressDelay={1000}
    />
  );
};

export default memo(Calender);
