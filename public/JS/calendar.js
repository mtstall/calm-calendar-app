document.addEventListener('DOMContentLoaded', function() {
    const options = {
        events: [new Date(2023, 3, 12).toDateString()]
    }
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });