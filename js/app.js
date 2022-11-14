const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// const amorpm = document.querySelector('.amorpm');
// december = 11;
// 24 hrs format 
let tempDateObj = new Date();
let tempYear = tempDateObj.getFullYear();
let tempMonth = tempDateObj.getMonth();
let tempDate = tempDateObj.getDate() + 10;

console.log(tempDate);
// let tempHour = tempDateObj.getHours();
// let tempMinute = tempDateObj.getMinutes();

// const dateObj = new Date(2022, 11, 20, 10, 20);
const dateObj = new Date(tempYear, tempMonth, tempDate, 11, 30, 0);
// const dateObj = new Date();
const giveaway = document.querySelector('.giveaway');
const headingFours = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');
const day = weekdays[dateObj.getDay()];
const date = dateObj.getDate();
const year = dateObj.getFullYear();
const month = months[dateObj.getMonth()];
const hours = dateObj.getHours();
const minutes = dateObj.getMinutes();


giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`;


// future time in millisecond
const futureTime = dateObj.getTime();

function getRemainingTime() {
  const today = new Date().getTime(); // this will return milliseconds
  const t = futureTime - today;
  // const seconds = t/1000;
  // const minutes = seconds/60;
  // const hours = minutes/60;
  // const days = hours/24;
  // all values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  function format(item){
    if(item < 10) return item = `0${item}`;
    return item;
  }
  // set values array 
  const values = [days, hours, minutes, seconds];
  headingFours.forEach(function(item, index){
    item.textContent = format(values[index]);
  });
  if(t<0) {
    // it is necesssary to call the function remainingtime after the setInterval otherwise you will not have the access to this countdown variable
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired.</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
// getRemainingTime();
