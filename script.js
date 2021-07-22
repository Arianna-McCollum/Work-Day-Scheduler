const today = moment();
const dateText = document.querySelector('#currentDay');
dateText.innerHTML = today.format('MMMM Do YYYY');

const hour = document.querySelector('.hour');
const textArea = document.querySelector('.textarea')
const past = document.querySelector('.past')
const present = document.querySelector('.present')
const future = document.querySelector('.future')
if (hour < today){
    textArea.classList.add("past");
}else if (hour === today){
    textArea.classList.add("present");
}else{
    textArea.classList.add("future");
}
