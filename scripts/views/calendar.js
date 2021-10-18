(app => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];

    // Add the following method to app.calendarView....
    // ** load(tutorId)
    //      - load tutor from app.scheduler using tutorId 
    //      - select h2 tag and set it's text to 'Schedule for [[Tutor Name]]'
    //      - iteral through days collection (above)
    //            for each day:
    //              - get appointment (if there is one) from app.scheduler using tutor.id and day
    //              - select td from DOM (day should be the ID)
	//				- clear the contents of the td (needed later when navigating back to this screen)
    //              - if appt exists, bind name and notes to td's innerHTML
    //                  - else add 'Book Appointment' button to td that call app.appointmentView.load() (with tutorId and day)
    //      - invoke app._changeView to show calendarView
    app.calendarView = {
        load: function (tutorId) {
            var tutor = app.scheduler.getTutor(tutorId);
            var title = document.querySelector('#scheduleForTitle');
            var table = document.querySelector('#schedule')

            title.innerHTML = 'SCHEDULE FOR ' + tutor.name.toUpperCase();

            days.forEach(function (day) {
                var apointment = app.scheduler.getAppointment(tutorId, day);
                var tableData = table.querySelector('#' + day);

                if (tableData.firstChild) {
                    tableData.removeChild(tableData.firstChild);
                }
                tableData.innerText = "";
                
                if (apointment.length != 0) {
                    var notes = document.createElement('p');

                    tableData.innerText = apointment[0].name;
                    notes.innerText = apointment[0].notes;
                    notes.classList.add('calenderNote');
                    tableData.appendChild(notes);
                } else {
                    var bookButton = document.createElement('button');

                    bookButton.type = 'button';
                    bookButton.classList.add('button');
                    bookButton.innerText = "Book Apointment";
                    bookButton.onclick = function () { app.appointmentView.load(tutorId, day); };
                    tableData.appendChild(bookButton);
                }
            });

            app._changeView('calendarView');
        }
    };

})(app || (app = {}));