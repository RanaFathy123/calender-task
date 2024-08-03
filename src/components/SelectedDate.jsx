"use client";
import { CalendarContext } from "@/context/CalenderContext";
import Link from "next/link";
import { useContext } from "react";
import { memo } from "react";

const SelectedDate = () => {
  const { events, resetSelectedDate } = useContext(CalendarContext);
  console.log(events);

  return (
    <>
      {events.length === 0 && (
        <section className="h-screen flex flex-col justify-center items-center gap-3">
          <header className="text-3xl font-bold">No Selected Date</header>
          <Link
            className="bg-slate-900 text-white p-3 rounded-lg font-bold"
            href="/calender-pick"
          >
            Pick Date
          </Link>
        </section>
      )}
      <section>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-100 text-gray-700 text-center text-lg font-bold border-b border-gray-300">
                  Event
                </th>
                <th className="py-3 px-6 bg-gray-100 text-gray-700 text-center text-lg font-bold border-b border-gray-300">
                  Selected Date
                </th>
              </tr>
            </thead>
            <tbody>
              {events.length > 0 &&
                events.map((event, index) => (
                  <tr
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition duration-150"
                  >
                    <td className="py-4 px-6 border-b text-center border-gray-300 text-sm text-gray-800">
                      {`${event.title}`}
                    </td>
                    <td className="py-4 px-6 border-b text-center border-gray-300 text-sm text-gray-800">
                      {event.date}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={resetSelectedDate}
          className="bg-slate-950 text-white font-bold p-3 rounded-lg ms-auto block mt-5"
        >
          Reset
        </button>
      </section>
    </>
  );
};

export default memo(SelectedDate);
