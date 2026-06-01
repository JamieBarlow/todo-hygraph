"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Todo } from "@/lib/types";

interface CalendarViewProps {
  todos: Todo[];
}

export default function CalendarView({ todos }: CalendarViewProps) {
  const events = todos
    .filter((todo) => todo.dueDate)
    .map((todo) => ({
      id: todo.id,
      title: todo.title,
      date: todo.dueDate,
      classNames: todo.completed ? ["line-through opacity-50"] : [],
    }));

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      height="auto"
    />
  );
}
