// document.addEventListener('DOMContentLoaded', function() {
//     const options = {
//         events: [new Date(2023, 3, 12).toDateString()]
//     }
//     var elems = document.querySelectorAll('.datepicker');
//     var instances = M.Datepicker.init(elems, options);
//   });

// document.addEventListener('DOMContentLoaded', function() {
//     const calendarEl = document.getElementById('calendar')
//     const calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth'
//     })
//     calendar.render()
//   })

const calendarEl = document.getElementById('calendar')
const calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: [
//   //  'interactionPlugin',
//     'dayGrid'
//   ],
  initialView: 'dayGridMonth',
  editable: true, // important for activating event interactions!
  selectable: true, // important for activating date selectability!
  events: [
    { title: 'Meeting', start: new Date() }
  ]
})

calendar.render()


// var calendar = new FullCalendar.Calendar(calendarEl, {
//     plugins: [ 'interaction' ],
//     editable: true,
//   })