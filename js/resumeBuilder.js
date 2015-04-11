//pure JS: document.getElementById('main').innerHTML += (["Fareez Ahmed"]);
//$("#main").append(["Fareez Ahmed"])
// var name = "Fareez Ahmed"
// var role = "Web Developer"
// var formattedName = HTMLheaderName.replace('%data%', name);
// var formattedRole = HTMLheaderRole.replace('%data%', role);

// // document.getElementById('header').innerHTML += (formattedName);
// // document.getElementById('header').innerHTML += (formattedRole);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);




var education = {
    "schools": [{
        "name": "George Washington University",
        "location": "Washington, D.C.",
        "degree": "B.A.",
        "majors": ["Economics (summa cum laude)"],
        "dates": 2005,
        "url": "www.gwu.edu"

    }, {
        "name": "Columbia University",
        "location": "New York, NY",
        "degree": "M.A.",
        "majors": ["Economics", " International Affairs"],
        "dates": 2009,
        "url": "www.columbia.edu"

    }],

    "onlineCourses": [{
            "title": "Front End Development Certificate",
            "school": "TreeHouse",
            "dates": 2015,
            "url": "https://teamtreehouse.com/fareezahmed2"
        },

        {
            "title": "Front End NanoDegree",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/nd001"

        },

        {
            "title": "Javascript Road Trips 1-3",
            "school": "Code School",
            "dates": "2014-5",
            "url": "https://www.codeschool.com/users/1003601"
        }
    ],


    display: function() {

        $("#education").append(HTMLschoolStart);
        for (var i in education.schools) {


            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry:last").append(formattedschoolName);

            var formattedschoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedschoolDate);

            var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedMajors);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedLocation);

        }

        $("#education").append(HTMLonlineClasses);

        for (var i in education.onlineCourses) {

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var schoolInfo = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);

            $("#education").append(formattedTitle + schoolInfo);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

            $("#education").append(formattedDates);
            $("#education").append(formattedURL);



        }
    }

};

education.display();

var work = {
    "jobs": [{
        "employer": "Asana Ventures",
        "title": "CoFounder",
        "location": "Bethesda, MD",
        "dates": "October 2013-Present",
        "description": "Cofounder of emerging markets consulting firm with business lines in International Trade and Energy. Won contract to represent US Cotton Industry in the world’ s fastest growing apparels market. US Cotton penetration (as an input into Bangladeshi apparels manufacturing) has increased from 2 % to roughly 12 % during our engagement."
    }, {
        "employer": "SEAF",
        "title": "Project Manager",
        "location": "Washington, D.C.",
        "dates": "October 2012-2013",
        "description": "Responsible for regulatory (SEC) Compliance for a global portfolio of appx $450 million and Project Manager for SEAF Bangladesh Agriventures, a SME(Small and Medium Enterprise) venture capital fund."
    }, {
        "employer": "US Federal Government",
        "title": "Presidential Management Fellow",
        "location": "Washington, D.C.",
        "dates": "July 2009- October 2012",
        "description": "Rotational Management Development program, where I served in three positions: Economist at US Department of Agriculture, Desk Officer in the Foreign Service, and Auditor at the EPA 's Inspector General."
    }],

    display: function() {

        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }

    }

};

work.display();

var bio = {
    "name": "Fareez Ahmed",
    "role": "Web Developer",
    "contacts": {
        "mobile": "202-677-0160",
        "email": "Fareez.Ahmed@gmail.com",
        "github": "youngfreezy",
        "twitter": "@FareezAhmed",
        "location": "Washington DC"
    },
    "welcomeMessage": "Ready to be a Full-Stack Javascript Ninja!",
    "skills": ["➢Node.js", "➢Functional Programming", "➢MongoDB", "➢Express.js", "➢Angular.js", "➢Web Development", "➢RESTful APIs", "➢Python", "➢Ruby on Rails", "➢Test Driven Development", "➢Data Structures", "➢Algorithms"],

    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/069/30b/22a97f8.jpg",
    display: function() {


        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedHeaderRole);
        $("#header").prepend(formattedHeaderName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGitHub);

        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);

        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);

        var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedPicture);
        $("#header").append(formattedWelcomeMsg);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);

        if (bio.skills) {
            $("#header").append(HTMLskillsStart);
            for (i in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }

        }

    }

}


bio.display();





var projects = {
    "projects": [{
        "title": "Google Maps Twitter Search in Javascript",
        "dates": 2015,
        "description": "Used Twitter/Google Maps APIs to let users search tweets and have them displayed on the Map.",
        "images": ['http://i1142.photobucket.com/albums/n607/fareezzahir/jstwitterresized.jpg'],
        "link": 'https://googlemapsproject.herokuapp.com/'
    }, {
        "title": "Google Maps Twitter Search in Ruby on Rails",
        "dates": 2015,
        "description": "Used Twitter/Google Maps APIs to let users search tweets and have them displayed on the Map.",
        "images": ['http://i1142.photobucket.com/albums/n607/fareezzahir/rubytwitter.png'],
        "link": 'https://ruby-twitter-search.herokuapp.com/'
    }, {
        "title": "MEAN stack CRM application",
        "dates": 2015,
        "description": "Used MongoDB, Express.js, Node.js, and Angular to create a mock CRM app.",
        "images": ['http://i1142.photobucket.com/albums/n607/fareezzahir/crm.png'],
        "link": 'https://fareezuser-crm.herokuapp.com'
    }],

    display: function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].link);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);



            if (projects.projects[project].images.length > 0) {

                for (image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }

        }
    }

    //add some more in
};


projects.display();

// education["name"] = "Columbia University";
// education["years"] = "2007-2009";
// education["city"] = "New York, NY";

// $("#main").append(work["position"]);

// $("#main").append(education.name);