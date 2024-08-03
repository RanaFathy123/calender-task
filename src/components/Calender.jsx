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
        end:
          window.innerWidth > 768
            ? "dayGridMonth,timeGridWeek,timeGridDay"
            : "dayGridMonth",
      }}
      height="auto"
      selectable={true}
      select={addEvent}
      events={events}
      eventClick={addEvent}
      handleWindowResize={true} 
      longPressDelay={1000} 
      eventLongPressDelay={1000} 
      selectLongPressDelay={1000} 
    />
  );
};

export default memo(Calender);
