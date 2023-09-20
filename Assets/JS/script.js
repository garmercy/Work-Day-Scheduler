//Time variables that are connected with html
var hour9 = $("#9AM");
var hour10 = $("#10AM");
var hour11= $("#11AM");
var hour12 = $("#12PM");
var hour13 = $("#13PM");
var hour14 = $("#14PM");
var hour15 = $("#15PM");
var hour16 = $("#16PM");
var hour17 = $("#17PM");

//These variables contains each time
var time9 = moment().hour(9);
var time10 = moment().hour(10);
var time11 = moment().hour(11);
var time12 = moment().hour(12);
var time13 = moment().hour(13);
var time14 = moment().hour(14);
var time15 = moment().hour(15);
var time16 = moment().hour(16);
var time17 = moment().hour(17);
var time18 = moment().hour(18);

//Get the value of the content that it's saved in the localstorage
$("#saveContent9").val( JSON.parse(localStorage.getItem('content9')));
$("#saveContent10").val( JSON.parse(localStorage.getItem('content10')));
$("#saveContent11").val( JSON.parse(localStorage.getItem('content11')));
$("#saveContent12").val( JSON.parse(localStorage.getItem('content12')));
$("#saveContent13").val( JSON.parse(localStorage.getItem('content13')));
$("#saveContent14").val( JSON.parse(localStorage.getItem('content14')));
$("#saveContent15").val( JSON.parse(localStorage.getItem('content15')));
$("#saveContent16").val( JSON.parse(localStorage.getItem('content16')));
$("#saveContent17").val( JSON.parse(localStorage.getItem('content17')));

//Display at the top of the calendar the current day using moment format.
var currentDateEl = $('#currentDay');
var todayDate = moment().format('dddd MMMM, Do');
currentDateEl.text(todayDate);

//Function to change the colour of the timetables depending of the current time.
$(function changeColor () {
  // Check if the current time matches with the timetables
  currentTime = moment().format("hh:mm:ss");

  //Change the colour of the background based on the current time
  //Hour 9
  if (moment().isBetween(time9, time10)) {
      $("#9AM").css("background-color", "#ff6961");
  }
  else if(moment().isAfter(time10)){
    $("#9AM").css("background-color", "#d3d3d3");
  }
  else{
    $("#9AM").css("background-color", "#77dd77");
  }

  //Hour 10
  if (moment().isBetween(time10, time11)) {
    $("#10AM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time11)) {
    $("#10AM").css("background-color", "#d3d3d3");
  }
  else {
    $("#10AM").css("background-color", "#77dd77");
  }

  //Hour 11
  if (moment().isBetween(time11, time12)) {
    $("#11AM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time12)) {
    $("#11AM").css("background-color", "#d3d3d3");
  }
  else {
    $("#11AM").css("background-color", "#77dd77");
  }

  //Hour 12
  if (moment().isBetween(time12, time13)) {
    $("#12PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time13)) {
    $("#12PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#12PM").css("background-color", "#77dd77");
  }

  //Hour 13
  if (moment().isBetween(time13, time14)) {
    $("#13PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time14)) {
    $("#13PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#13PM").css("background-color", "#77dd77");
  }

  //Hour 14
  if (moment().isBetween(time14, time15)) {
    $("#14PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time15)) {
    $("#14PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#14PM").css("background-color", "#77dd77");
  }

  //Hour 15
  if (moment().isBetween(time15, time16)){
    $("#15PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time16)) {
    $("#15PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#15PM").css("background-color", "#77dd77");
  }

  //Hour 16
  if (moment().isBetween(time16, time17)) {
    $("#16PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time17)) {
    $("#16PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#16PM").css("background-color", "#77dd77");
  }

  //Hour 17
  if (moment().isBetween(time17, time18)) {
    $("#17PM").css("background-color", "#ff6961");
  }
  else if (moment().isAfter(time18)) {
    $("#17PM").css("background-color", "#d3d3d3");
  }
  else {
    $("#17PM").css("background-color", "#77dd77");
  };
  
});

$(function savingContent() {
// This function records the data on the local storage when the user click the button.
    $("#button9").on("click", function () { 
        var square9 = $("#saveContent9").val().trim();
        localStorage.setItem('content9', JSON.stringify(square9));
    })
    $("#button10").on("click", function () {
        var square10 = $("#saveContent10").val().trim();
        localStorage.setItem('content10', JSON.stringify(square10));
    })
    $("#button11").on("click", function () {
        var square11 = $("#saveContent11").val().trim();
        localStorage.setItem('content11', JSON.stringify(square11));
    })
    $("#button12").on("click", function () {
        var square12 = $("#saveContent12").val().trim();
        localStorage.setItem('content12', JSON.stringify(square12));
    })
    $("#button13").on("click", function () {
        var square13 = $("#saveContent13").val().trim();
        localStorage.setItem('content13', JSON.stringify(square13));
    })
    $("#button14").on("click", function () {
        var square14 = $("#saveContent14").val().trim();
        localStorage.setItem('content14', JSON.stringify(square14));
    })
    $("#button15").on("click", function () {
        var square15 = $("#saveContent15").val().trim();
        localStorage.setItem('time15', JSON.stringify(square15));
    })
    $("#button16").on("click", function () {
        var square16 = $("#saveContent16").val().trim();
        localStorage.setItem('content16', JSON.stringify(square16));
    })
    $("#button17").on("click", function () {
        var square17 = $("#saveContent17").val().trim();
        localStorage.setItem('content17', JSON.stringify(square17));
    })
});
