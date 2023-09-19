var currentDateEl = $('#currentDay');
var container = $(".container");

//times variables that are inside the container
var hour9 = $("#9AM");
var hour10 = $("#10AM");
var hour11= $("#11AM");
var hour12 = $("#12PM");
var hour13 = $("#13PM");
var hour14 = $("#14PM");
var hour15 = $("#15PM");
var hour16 = $("#16PM");
var hour17 = $("#17PM");



//arrays of all the times
var hours= [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]
console.log(hours);


//Displayed at the top of the calendar the current day using moment format.
var todayDate = moment().format('dddd MMMM, Do');
currentDateEl.text(todayDate);
console.log(todayDate);




//This variables contains each time
var time9 = moment().hour(9)
var time10 = moment().hour(10);
var time11 = moment().hour(11);
var time12 = moment().hour(12);
var time13 = moment().hour(13);
var time14 = moment().hour(14);
var time15 = moment().hour(15);
var time16 = moment().hour(16);
var time17 = moment().hour(17);
var time18 = moment().hour(18);

//This function is used to change the color of the timetables depending of the current time.
$(function cahngeColor () {
// current Time it is used to check if the current time match with the timetables
  currentTime = moment().format("hh:mm:ss");
 
  if (currentTime == time9) {
      $("#9AM").css('background-color: red');
  }
  else if(currentTime > time9){
    $("#9AM").css('background-color: grey');
    
  }
  else{
    $("#9AM").css('background-color: green');
  }

  // Audit hour 10 and set color
  if (currentTime == time10) {
      $("#10AM").css('background-color: red');
  }
  else if (currentTime > time10) {
      $("#10AM").css('background-color: grey');
  }
  else {
      $("#10AM").css('background-color: green');
  }

  // Audit hour 11 and set color
  if (currentTime == time11) {
      $("#11AM").css('background-color: red');
  }
  else if (currentTime > time11) {
      $("#11AM").css('background-color: grey');
  }
  else {
      $("#11AM").css('background-color: green');
  }

  // Audit hour 12 and set color
  if (currentTime == time12) {
      $("#12PM").css('background-color: red');
  }
  else if (currentTime > time12) {
      $("#12PM").css('background-color: grey');
  }
  else {
      $("#12PM").css('background-color: green');
  }

  // Audit hour 13 and set color
  if (currentTime == time13) {
      $("#13PM").css('background-color: red');
  }
  else if (currentTime > time13) {
      $("#13PM").css('background-color: grey');
  }
  else {
      $("#13PM").css('background-color: green');
  }

  // Audit hour 14 and set color
  if (currentTime == time14) {
      $("#14PM").css('background-color: red');
  }
  else if (currentTime > time14) {
      $("#14PM").css('background-color: grey');
  }
  else {
      $("#14PM").css('background-color: green');
  }

  // Audit hour 15 and set color
  if (currentTime == time15){
      $("#15PM").css('background-color: red');
  }
  else if (currentTime > time15) {
      $("#15PM").css('background-color: grey');
  }
  else {
      $("#15PM").css('background-color: green');
  }

  // Audit hour 16 and set color
  if (currentTime == time16) {
      $("#16PM").css('background-color: red');
  }
  else if (currentTime > time16) {
      $("#16PM").css('background-color: grey');
  }
  else {
      $("#16PM").css('background-color: green');
  }

  // Audit hour 17 and set color
  if (currentTime == time17) {
      $("#17PM").css('background-color: red');
  }
  else if (currentTime > time17) {
      $("#17PM").css('background-color: grey');
  }
  else {
      $("#17PM").css('background-color: green');
  };
  
});

console.log("despues de la funcion");
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function cambiandoColor () {
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
  