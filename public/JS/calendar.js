//calendar page using FullCalender.io
let userEvents = [];
const calendarEl = document.getElementById("calendar");

(async function () {
  const response = await fetch("/api/calendar");
  const data = await response.json();
  const formattedEvents = data.events.map((d) => {
    return { title: d.event_name, start: d.startTime.slice(0, 10) };
  });
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    editable: true, // important for activating event interactions!
    selectable: true, // important for activating date selectability!
    events: formattedEvents,
  });

calendar.render();
}) ()
