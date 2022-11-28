var today= dayjs().format('YYYY-MM-DD [at] HH:mm:ss','HH:mm:ss [on] YYYY-MM-DD');
 dayjs();

var workTime= ["8","9","10","11","12","1","2","3","4"]

$(document).ready(function(){
  var today = dayjs().hour(12)
 console.log(today)

 var  storageItem = JSON.parse(window.localStorage.getItem("workTime"))
 document.getElementById("currentDay").innerHTML = (dayjs().hour(12));

  $('.saveBtn').on('click', function(){
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    console.log(time, description)
    //local storage is a string this line is parsing it into an array using JSON
  workTime.forEach(x => {
   $(`#${x}-o-clock .descriptiion`).val(localStorage.getItem(`${x} -o-clock`));
  })
   
    $(`#${x}-o-clock .descriptiion`).val(localStorage.setItem(`${x} -o-clock`));
   })
   console.log(workTime)

  $(".description").each(function (){
    var rowId = $(this).parent().attr('id')
    for (let i = 0; i < storageItem.length; i++) {
      const element = storageItem[i];
      if (rowId == element.time) {
        $(this).val(element.description)
        
      }
    }
  }) 
})

var currentHour = dayjs().format("h");

$.each?(time-block, function(i, hour){
var workTime = parseInt((this).attr("id"));
if (workTime == currentHour) {
  $(this).next.addClass("present");
}
else if (workTime < currentHour) {
  $(this).next.addClass("past");
}
else if (workTime > currentHour) {
  $(this).next.addClass("pfuture");
}
})
/*var saveTolocal = JSON.parse(window.localStorage.getItem("workTime")) || []
    saveTolocal.push({
      time, description*/