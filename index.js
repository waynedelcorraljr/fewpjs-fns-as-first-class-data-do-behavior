/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let timeArr = timeString.split(':');
  let hour = parseInt(timeArr[0], 10) * 100;
  let minutes = parseInt(timeArr[1], 10);
  let timeInt = hour + minutes
  if (timeInt < 1200) {
    return "Good Morning"
  } else if (1200 < timeInt && timeInt < 1700) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let node = document.querySelector("#greeting")
  node.innerText = string
}