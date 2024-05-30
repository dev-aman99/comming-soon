function countdown(days) {
  var timer, hours, minutes, seconds;

  var dateEnd = new Date();
  dateEnd.setDate(dateEnd.getDate() + days); // Add 10 days to the current date

  timer = setInterval(calculate, 1000);

  function calculate() {
    var dateStart = new Date();
    var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      clearInterval(timer); // Stop the timer when countdown reaches zero
    }
  }
}

window.onload = function() {
  var preloader = document.getElementsByClassName('preloader')[0];
  setTimeout(function() {
    preloader.style.display = 'none';
  }, 500);

  countdown(10); // Start the countdown for 10 days
};
