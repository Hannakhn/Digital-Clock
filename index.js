// arrow functions are used to store data inside a variable called date and then calling different methods over the object to get the distinct values

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  
  let period = "AM";    // convert 24 format to 12 hour clock format
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }


  // adding zero in front lo look better

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${hrs}:${mins}:${secs}:${period}`;
  document.getElementById("clock").innerHTML = time;
  setTimeout(clock, 1000);



};
// then call the clock function

clock();

// convert 24 format to 12 hour clock format