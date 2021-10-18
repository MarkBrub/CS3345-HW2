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
    app.calendarView = {};

})(app || (app = {}));