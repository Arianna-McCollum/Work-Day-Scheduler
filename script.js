
const dateText = document.querySelector('#currentDay');
dateText.innerHTML = moment().format('MMMM Do YYYY');

$(".saveBtn").each(function(){
$(this).on("click",function(){
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    console.log({time, text});
    localStorage.setItem (time, text);
})
})

function timeNow(){
    var presentTime = moment().hour();


$(".time-block").each(function(){
    var rowTime = parseInt($(this).attr("id").split("hour")[0]);

    if (rowTime > presentTime){
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }else if (rowTime === presentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }else {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
        }
    }
)}


$("#9h .description").val(localStorage.getItem("9h"));
$("#10h .description").val(localStorage.getItem("10h"));
$("#11h .description").val(localStorage.getItem("11h"));
$("#12h .description").val(localStorage.getItem("12h"));
$("#13h .description").val(localStorage.getItem("13h"));
$("#14h .description").val(localStorage.getItem("14h"));
$("#15h .description").val(localStorage.getItem("15h"));
$("#16h .description").val(localStorage.getItem("16h"));
$("#17h .description").val(localStorage.getItem("17h"));

timeNow();