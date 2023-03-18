//calendar page using FullCalender.io

const calendarEl = document.getElementById("calendar");
const calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: "dayGridMonth",
  editable: true, // important for activating event interactions!
  selectable: true, // important for activating date selectability!
  events: [{ title: "Meeting", start: new Date() }],
});

calendar.render();
