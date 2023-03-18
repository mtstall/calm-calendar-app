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

// add new event
async function newEventHandler(event) {
  event.preventDefault();
  const event_name = document.querySelector('#event-name').value;
  const description = document.querySelector('#event-description').value;
  const startTime = document.querySelector('#event-start-time').value;
  const endTime = document.querySelector('#event-end-time').value;

  const response = await fetch('/api/calendar', {
    method: 'POST',
    body: JSON.stringify({
      event_name,
      description,
      startTime,
      endTime,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/calendar');
  } else {
    alert('Failed to add event');
  }

}
