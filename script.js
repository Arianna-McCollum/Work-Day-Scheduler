var today = moment();
const dateText = document.querySelector('#currentDay');
dateText.innerHTML = today.format('MMMM Do YYYY');

$(document).ready=()=>{


$(".saveBtn").onclick=()=>{
    var time = $(this).parent().attr("id");
    var text = $(this).sibilings(".description").val();
    localStorage.setItem (time, text);
}

timeNow=()=>{
    var presentTime = moment().hour();


$(".time-block").each=()=>{
    var rowTime = parseInt($(this).attr("id").split("hour")[1]);

    if (rowTime < presentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }else if (rowTime === presentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
}
}
$("#9h .description").val(localStorage.getItem("9h"));
$("#10h .description").val(localStorage.getItem("10h"));
$("#11h .description").val(localStorage.getItem("11h"));
$("#12h .description").val(localStorage.getItem("12h"));
$("#1h .description").val(localStorage.getItem("1h"));
$("#2h .description").val(localStorage.getItem("2h"));
$("#3h .description").val(localStorage.getItem("3h"));
$("#4h .description").val(localStorage.getItem("4h"));
$("#5h .description").val(localStorage.getItem("5h"));

timeNow();

}