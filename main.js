// Add an event listener to the dropdown items for scrolling

 

 

document.addEventListener("DOMContentLoaded", function () {

    var scrollButton = document.getElementById("takesurvey");

    var scrollToDiv = document.getElementById("scrollToDiv");

 

    var scrollDropdownOption1 = document.getElementById("surveyCategory01");

    var scrollDropdownOption2 = document.getElementById("surveyCategory02");

    var scrollToQuestionsDiv = document.getElementById("questions");

    scrollButton.addEventListener("click", function () {

        scrollToDiv.scrollIntoView({ behavior: "smooth" });

    });

 

    scrollDropdownOption1.addEventListener("click", function () {

        scrollToQuestionsDiv.scrollIntoView({ behavior: "smooth" });

        debugger;

       fetch();

    });

    scrollDropdownOption2.addEventListener("click", function () {

        scrollToQuestionsDiv.scrollIntoView({ behavior: "smooth" });

    });

});

 

 

// Add an event listener to the dropdown items

var surveyMenu = document.getElementById("survey-menu");

 

 

surveyMenu.addEventListener("click", function (event) {

    event.preventDefault();

    var selectedSurvey = event.target.getAttribute("data-survey");

 

    // Hide all survey divs

    var surveyDivs = document.querySelectorAll(".questions-container > div");

    surveyDivs.forEach(function (div) {

        div.style.display = "none";

    });

 

 

    // Show the selected survey div

    var selectedSurveyDiv = document.querySelector("." + selectedSurvey);

    if (selectedSurveyDiv) {

        selectedSurveyDiv.style.display = "block";

    } else {

       

    }

});

 

//document.getElementById('s1q1number').innerHTML = num;

function fetch()

{

    debugger;

    $.ajax({

        type: "GET",

        crossDomain: true,

        dataType: 'jsonp',

        url: "https://localhost:7063/api/SurveyQuestions/1",

        //headers: {'Access-Control-Allow-Origin': 'https://localhost:7063/api/SurveyQuestions' },

        //data: {catId:1},

        contentType: "application/json; charset=utf-8",

        dataType: "json",

        success: OnSuccess,

        failure: function (response) {

            alert(response);

        }

    });

 

}

function OnSuccess(response)

{

    debugger;

    var str= String(response.d);

    var res= str.split(",")

    document.getElementById('s1q1number').innerHTML = res[0];

    document.getElementById('s1q1').innerHTML = res[0];

}