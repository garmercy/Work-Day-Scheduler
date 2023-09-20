var currentDateEl = $('#currentDay');
var container = $(".container");

//time variables that are inside the container
var hour9 = $("#9AM");
var hour10 = $("#10AM");
var hour11= $("#11AM");
var hour12 = $("#12PM");
var hour13 = $("#13PM");
var hour14 = $("#14PM");
var hour15 = $("#15PM");
var hour16 = $("#16PM");
var hour17 = $("#17PM");

//Hour array
var hours= [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]
console.log(hours);


//Display at the top of the calendar the current day using moment format.
var todayDate = moment().format('dddd MMMM, Do');
currentDateEl.text(todayDate);
console.log(todayDate);


//Function to change the colour of the timetables depending of the current time.
$(function changeColor () {

  // Check if the current time matches with the timetables
  currentTime = moment().format("hh:mm:ss");
  console.log(currentTime);

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
 

  console.log (time9);
 
  //Change the colour of the background based on the current time
  //Hour 9
  if (moment().isBetween(time9, time10)) {
      $("#9AM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if(moment().isAfter(time10)){
    $("#9AM").css("background-color", "#d3d3d3");
    console.log("working past");
  }
  else{
    $("#9AM").css("background-color", "#77dd77");
    console.log("working future");
  }

  //Hour 10
  if (moment().isBetween(time10, time11)) {
      $("#10AM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time11)) {
      $("#10AM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#10AM").css("background-color", "#77dd77");
      console.log("working future");
  }

  //Hour 11
  if (moment().isBetween(time11, time12)) {
      $("#11AM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time12)) {
      $("#11AM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#11AM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 12
  if (moment().isBetween(time12, time13)) {
      $("#12PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time13)) {
      $("#12PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#12PM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 13
  if (moment().isBetween(time13, time14)) {
      $("#13PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time14)) {
      $("#13PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#13PM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 14
  if (moment().isBetween(time14, time15)) {
      $("#14PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time15)) {
      $("#14PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#14PM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 15
  if (moment().isBetween(time15, time16)){
      $("#15PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time16)) {
      $("#15PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#15PM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 16
  if (moment().isBetween(time16, time17)) {
      $("#16PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time17)) {
      $("#16PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#16PM").css("background-color", "#77dd77");
      console.log("working future");
  }

//Hour 17
  if (moment().isBetween(time17, time18)) {
      $("#17PM").css("background-color", "#ff6961");
      console.log("working present");
  }
  else if (moment().isAfter(time18)) {
      $("#17PM").css("background-color", "#d3d3d3");
      console.log("working past");
  }
  else {
      $("#17PM").css("background-color", "#77dd77");
      console.log("working future");
  };
  
});
 
console.log("after the function");






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function changeColor () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  