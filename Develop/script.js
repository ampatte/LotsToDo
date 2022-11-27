let myEntries= ["8","9","10","11","12","1","2","3","4"]
$(document).ready(function(){
dayjs().hour()
  var today = dayjs().hour(12)
 console.log(today)
 var  storageItem = JSON.parse(window.localStorage.getItem("myEntries"))

  $('.saveBtn').on('click', function(){
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(time, description)
    //local storage is a string this line is parsing it into an array using JSON
    var saveTolocal = JSON.parse(window.localStorage.getItem("myEntries")) || []
    saveTolocal.push({
      time, description
    })
    localStorage.setItem('myEntries', JSON.stringify(saveTolocal));
  })
  $(".description").each(function (){
    var rowId = $(this).parent().attr('id')
    for (let i = 0; i < storageItem.length; i++) {
      const element = storageItem[i];
      if (rowId == element.time) {
        $(this).val(element.description)
        
      }
    }
  })
 // myCalendarTimeIds.forEach(id => {
 //   $(`#${id} .)
//  })
 // $('#9-o-clock .description').val(localStorage.getItem(`9-o-clock`))
})


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
