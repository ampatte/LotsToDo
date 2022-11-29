var currentDay= dayjs().format('YYYY-MM-DD [at] HH:mm','HH:mm [on] YYYY-MM-DD');
 
var workTime= ["8","9","10","11","12","13","14","15","16"]

// We've defined currentDay and workTime

$(document).ready(function(){
  
  var today = dayjs(12)
  
  console.log(today)

  console.log(today.$H)
 
  workTime.forEach(x => {
  const savedItem = localStorage.getItem(`${x}-o-clock`) || ""
 $(`#${x}-o-clock .description`).val(savedItem)

 const timeDifference = today.$H - parseInt(x)
 if (timeDifference > 0) {
  $(`#${x}-o-clock .description`).addClass("future")
 }
 else if (timeDifference < 0) {
  $(`#${x}-o-clock .description`).addClass("past")
 }
 else 
 $(`#${x}-o-clock .description`).addClass("present")
   })


// We havent defined localStorage keys yet
//const = localStorage.getItem()
 var  storageItem = JSON.parse(window.localStorage.getItem("workTime"))
 console.log(storageItem)
 document.getElementById("currentDay").innerText = (dayjs().hour(-5));

  $('.saveBtn').on('click', function(){
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(time, description)
    //local storage is a string this line is parsing it into an array using JSON
  workTime.forEach(x => {
    const entry = $(`#${x}-o-clock .description`).val()
  // $(`#${x}-o-clock .description`).val(localStorage.getItem(`${x}-o-clock`));
  localStorage.setItem(`${x}-o-clock`, entry)  
   // $(`#${x}-o-clock .description`).val();
     })
   console.log(currentDay)

  // $(".description").each(function (){
  //   var rowId = $(this).parent().attr('id')
  //   for (let i = 0; i < storageItem.length; i++) {
  //     const element = storageItem[i];
  //     if (rowId == element.time) {
  //       $(this).val(element.description)
        
  //     }
  //   }
  // }) 
})})
/* $.each(workTime[""], function(i, workTime){
var workTime = parseInt((this).attr("id"));
if (workTime[""] == currentDay) {
  $(this).next.addClass("present");
}
else if (workTime[""] < currentDay) {
  $(this).next.addClass("past");
}
else  {
  $(this).next.addClass("future");
}
})*/
