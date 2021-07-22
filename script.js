const today = moment();
const dateText = document.querySelector('#currentDay');
dateText.innerHTML = today.format('MMMM Do YYYY');

var tasks = {};

