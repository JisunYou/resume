var bio = {
  "name" : "Jisun You",
  "role" : "Front-end Web Developer",
};

var picture = {
  "biopic" : "images/Lisa-Simpson.png",
};

var contacts = {
  "email" : "jisun.you [at] gmail.com",
  "site" : "jisunyou.github.io",
  "location" : "Houston, Texas"
};

var formattedBioPic = HTMLbioPic.replace("%data%", picture.biopic);
$("#picture").append(formattedBioPic);

var resumeName = HTMLheaderName.replace("%data%", bio.name);
$("#bio").append(resumeName);
var resumeRole = HTMLheaderRole.replace("%data%", bio.role);
$("#bio").append(resumeRole);

var resumeMobile = HTMLmobile.replace("%data%", contacts.mobile);
$("#contact").append(resumeMobile);
var resumeEmail = HTMLemail.replace("%data%", contacts.email);
$("#contact").append(resumeEmail);
var resumeSite = HTMLsite.replace(/%data%/g, contacts.site);
$("#contact").append(resumeSite);
var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
$("#contact").append(formattedLocation);

var technicalskills = {
  "skills" : [
  	{
      "title": "Web Development",
      "keywords": ["HTML5", "CSS3", "Bootstrap", "Javascript", "Jquery", "GitHub", "Responsive Web Design"]
  	},
    {
      "title": "Graphic design",
      "keywords": ["Adobe Photoshop", "Adobe Illustrator"]
  	},
    {
      "title": "Microsoft office specialist",
      "keywords": ["MS Word core", "MS Excel core", "MS Power point core"]
  	},
  ]
};

function displaySkills() {
	if (technicalskills.skills.length > 0) {
		$("#skills").append(HTMLskillsStart);
		for (var i=0; i<technicalskills.skills.length; i++) {
			var formattedskillsTitle = HTMLskillsTitle.replace("%data%", technicalskills.skills[i].title);
			$(".skills-entry").append(formattedskillsTitle);
			$(".skills-entry").append(HTMLskillsList);
			for (var j=0; j<technicalskills.skills[i].keywords.length; j++) {
				var formattedSkills = HTMLskills.replace("%data%", technicalskills.skills[i].keywords[j]);
				$(".skillsList:last").append(formattedSkills);
        if([j]<technicalskills.skills[i].keywords.length - 1) {
        $(".skillsList:last").append(HTMLcomma);
      };
			};
		};
	};
}

displaySkills();


var education = {
  "schools" : [
    {
      "name" : "Codecademy",
      "location" : "",
      "dates" : "June 2017 - August 2017",
      "degree" : "",
      "major" : "PRO Intensive Program: Build Websites from Scratch",
      "description": [
	      "Relevant courseworks: HTML5, CSS3, Bootstrap, Javascript",
	      "Certificate available upon request"
      ]
    },
    {
      "name" : "Udacity",
      "location" : "",
      "dates" : "May 2017",
      "degree" : "",
      "major" : "Web Development Program",
      "description": [
	      "Intro to HTML and CSS",
	      "JavaScript Foundations"
      ]
    },
    {
      "name" : "Ewha Womans University",
      "location" : "Seoul, South Korea",
      "dates" : "March 2000 - February 2005",
      "degree" : "B.A., ",
      "major" : ["Educational Technology"],
      "description": ""
    }
  ]
};

function displayEducation() {
  if (education.schools.length > 0) {
    for (var i=0; i<education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      $(".education-entry:last").append(formattedSchoolDegree);

      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
      $(".majorTitle:last").append(formattedSchoolMajor);

      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      $(".education-entry:last").append(formattedSchoolDates);

      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      $(".education-entry:last").append(formattedSchoolName);

      if(education.schools[i].location.length>0) {
        $(".schoolName:last").append(HTMLcomma);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".schoolName:last").append(formattedSchoolLocation);        
        };
      if (education.schools[i].description.length>0) {
        $(".education-entry:last").append(HTMLschoolDescriptionStart);
        for (var j=0; j<education.schools[i].description.length; j++) {
          var formattedschoolDescription = HTMLschoolDescription.replace("%data%", education.schools[i].description[j]);
          $("ul:last").append(formattedschoolDescription);
        };
      };
    };
  };
}

displayEducation();

var work = {
  "jobs" : [
  	{
      "employer": "Freelance",
      "title": "WEB DEVELOPER",
      "location": "",
      "dates": "December 2017",
      "summery": "",
      "description": ""
  	},
    {
      "employer": "Austin Korean School",
      "title": "TEACHER",
      "location": "Austin, Texas, United States",
      "dates": "January 2014 - December 2015",
      "summery": "Directed the activities of preschool children in a warm and caring manner.",
      "description": [
	      "Developed a variety of instructional materials such as digital contents and creative learning activities to improve students’ learning achievement.",
	      "Established collaborative family-school relationships through parental involvement in promoting children’s learning.",
	      "Worked effectively in cooperation with staffs for enhancing curriculum planning and school objectives."
      ]
  	},
    {
      "employer": "Bae, Kim and Lee LLC",
      "title": "LEGAL ADMINISTRATOR",
      "location": "Seoul, South Korea",
      "dates": "October 2004 - August 2009",
      "summery": "Worked for Telecommunications, Media and Technology group. Enhanced attorneys' effectiveness by providing administrative support.",
      "description": [
	      "Communicated with clients and other staffs so that attorneys can work according to plan.",
	      "Assisted lawyers with preparation of pleadings, affidavits, briefs and court applications. Collected, organized and sorted litigation files and other legal documentation. Maintained and updated files.",
	      //"Organized conference calls, meetings, appointments, and other calendar items.",
	      "Managed billing records for litigation partner. Set up invoices and statements, tracked and inputted attorneys' time data. Sent bills to clients and communicated with billing team and clients.",
	      //"Reviewed and prepare attorney’s travel and expense reimbursement documents. And categorized and file expenditure of company credit card every month.",
	      "Prepared PowerPoint presentations for legal seminars."
      ]
  	},
  ]
};

function displayWork() {
  if (work.jobs.length > 0) {
    for (var i=0; i<work.jobs.length; i++) {
      $("#experience").append(HTMLworkStart);
      var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
      $(".work-entry:last").append(formattedworkTitle);
      var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      $(".workTitle:last").append(formattedworkDates);
      var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      $(".work-entry:last").append(formattedworkEmployer);

      if(work.jobs[i].location.length>0) {
        $(".work-entry:last").append(HTMLcomma);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedworkLocation);        
        };

      if (work.jobs[i].summery.length>0) {
        var formmattedworkSummery = HTMLworkSummery.replace("%data%", work.jobs[i].summery);
        $(".work-entry:last").append(formmattedworkSummery)
      };
      if (work.jobs[i].description.length>0) {
        $(".work-entry:last").append(HTMLworkDescriptionStart);
        for (var j=0; j<work.jobs[i].description.length; j++) {
          var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
          $("ul:last").append(formattedworkDescription);
        };
      };
    };
  };
}


displayWork();


