const today = moment();
const dateText = document.querySelector('#currentDay');
dateText.innerHTML = today.format('MMMM Do YYYY');

const hour = document.querySelector('.hour');
const textArea = document.querySelector('.textarea')
const past = document.querySelector('.past')
const present = document.querySelector('.present')
const future = document.querySelector('.future')
if (hour < today){
    textArea.innerHTML = past;
}else if (hour === today){
    textArea.innerHTML = present;
}else{
    textArea.innerHTML = future;
}
