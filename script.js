var currentDay= dayjs().format('YYYY-MM-DD [at] HH:mm','HH:mm [on] YYYY-MM-DD');
 
var workTime= ["8","9","10","11","12","13","14","15","16"]

// We've defined currentDay and workTime
$(document).ready(function(){
  
  var today = dayjs(12)
  
  console.log(today)

  console.log(today.$H)//pulls the current hour
 
  workTime.forEach(x => {
  const savedItem = localStorage.getItem(`${x}-o-clock`) || ""
 $(`#${x}-o-clock .description`).val(savedItem)
// compares hour of the day to time labels to determine past, prestent, future
//addClass then adds the color
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

 var  storageItem = JSON.parse(window.localStorage.getItem("workTime"))
 console.log(storageItem)
 document.getElementById("currentDay").innerText = (dayjs().hour(-5));
//local storage is a string this line is parsing it into an array using JSON
  $('.saveBtn').on('click', function(){
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(time, description)
  
  
    workTime.forEach(x => {
    const entry = $(`#${x}-o-clock .description`).val()
   localStorage.setItem(`${x}-o-clock`, entry)  
     })
   console.log(currentDay)

})
})
