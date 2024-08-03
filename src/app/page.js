"use client";
import Link from "next/link";
import SelectedDate from "@/components/SelectedDate";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 overflow-auto">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-gray-100 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Selected Date List
          </h1>
          <Link
            className="bg-slate-900 text-white p-3 rounded-lg font-bold"
            href="/calender-pick"
          >
            Pick Another Date
          </Link>
        </header>
        <section className="p-4 h-screen">
          <SelectedDate />
        </section>
      </article>
    </main>
  );
}
