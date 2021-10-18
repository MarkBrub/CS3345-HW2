(app => {

    var isLoaded;

    // Add the following method to app.homeView....
    // ** load()
    //      - if !isLoaded
    //            - get list of tutors from app.scheduler
    //            - select profiles container from html
    //            - select profiles template from html
    //            - iterate through tutors
    //                  for each tutur:
    //                  - create clone of profile template's content
    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
    //                  - select and populate clone's h2 element with tutor's name
    //                  - select and populate clone's p element with tutor's skills array
    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
    //                          - (individual spans allow for styling) 
    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
    //                  - append clone to profiles container
    //            - set isLoaded to true so the const list does not have to be loaded again 
    //      - invoke app._changeView to show homeView (regardless of isLoaded status)

    app.homeView = {
        load: function() {
            if(!isLoaded) {
                var tutors = app.scheduler.getTutors();

                var list = document.querySelector('#tutorList');
                var container = list.querySelector('#tutorList_tutors');
                var template = list.querySelector('template');

                var fragment = document.createDocumentFragment();

                tutors.forEach(function(tutor) {
                    var clone = template.content.cloneNode(true);
                    var name = clone.querySelector('span');
                    var skillList = clone.querySelector('.skillsList');

                    tutor.skills.forEach(function(skill) {
                        var newSkill = document.createElement('span');
                        newSkill.classList.add('skill');
                        newSkill.innerText = skill;
                        skillList.appendChild(newSkill);
                    });

                    name.innerText = tutor.name;

                    fragment.appendChild(clone);
                });

                while(container.firstChild) {
                    container.removeChild(container.firstChild);
                }

                container.appendChild(fragment);
            }

            app._changeView('homeView');
        }
    };

})(app || (app = {}));