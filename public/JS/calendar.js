//calendar page using FullCalender.io
const calendarEl = document.getElementById("calendar");

(async function () {
  const response = await fetch("/api/calendar");
  const data = await response.json();
  const formattedEvents = data.events.map((d) => {
    return { title: d.event_name, start: d.startTime.slice(0, 10) };
  });
  console.log(formattedEvents);
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    editable: true, // important for activating event interactions!
    selectable: true, // important for activating date selectability!
    events: formattedEvents,
  });

calendar.render();
}) ()

// add new event
const newEventHandler = async(event) => {
  event.preventDefault();
  console.log("inside newEventHandler");
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

const addToCalendar = document.querySelector('#addToCalendar');
addToCalendar.addEventListener('click', newEventHandler);

//Modal javascript
// Get the modal
var modal = document.getElementById("addEventModal");

// Get the button that opens the modal
var btn = document.getElementById("addEvent");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
