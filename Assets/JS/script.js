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
  if (currentTime == time9) {
      $("#9AM").css('background-color: red');
      console.log("working");
  }
  else if(currentTime > time9){
    $("#9AM").css('background-color: grey');
    console.log("working");
  }
  else{
    $("#9AM").css('background-color: green');
    console.log("working");
  }

  //Hour 10
  if (currentTime == time10) {
      $("#10AM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time10) {
      $("#10AM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#10AM").css('background-color: green');
      console.log("working");
  }

  //Hour 11
  if (currentTime == time11) {
      $("#11AM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time11) {
      $("#11AM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#11AM").css('background-color: green');
      console.log("working");
  }

//Hour 12
  if (currentTime == time12) {
      $("#12PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time12) {
      $("#12PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#12PM").css('background-color: green');
      console.log("working");
  }

//Hour 13
  if (currentTime == time13) {
      $("#13PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time13) {
      $("#13PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#13PM").css('background-color: green');
      console.log("working");
  }

//Hour 14
  if (currentTime == time14) {
      $("#14PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time14) {
      $("#14PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#14PM").css('background-color: green');
      console.log("working");
  }

//Hour 15
  if (currentTime == time15){
      $("#15PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time15) {
      $("#15PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#15PM").css('background-color: green');
      console.log("working");
  }

//Hour 16
  if (currentTime == time16) {
      $("#16PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time16) {
      $("#16PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#16PM").css('background-color: green');
      console.log("working");
  }

//Hour 17
  if (currentTime == time17) {
      $("#17PM").css('background-color: red');
      console.log("working");
  }
  else if (currentTime > time17) {
      $("#17PM").css('background-color: grey');
      console.log("working");
  }
  else {
      $("#17PM").css('background-color: green');
      console.log("working");
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
  