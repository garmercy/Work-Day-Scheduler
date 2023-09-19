var currentDateEl = $('#currentDay');
var container = $(".containerBlocks");

//Displayed at the top of the calendar the current day using moment format.
  var todayDate = moment().format('dddd MMMM, Do');
  currentDateEl.text(todayDate);


  // Each hour uses moment js to obtain the specified time in the parentheses.
  var hour9 = moment().hour(9);
  var hour10 = moment().hour(10);
  var hour11 = moment().hour(11);
  var hour12 = moment().hour(12);
  var hour13 = moment().hour(13);
  var hour14 = moment().hour(14);
  var hour15 = moment().hour(15);
  var hour16 = moment().hour(16);
  var hour17 = moment().hour(17);

  //Array of all the times that we need. From 9 to 17.
  var hours=[hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];
  
  console.log(hours);




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  