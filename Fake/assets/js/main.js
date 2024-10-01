function countdown(targetDate) {
  const endDate = new Date(targetDate);
  
  // Declare timerInterval in the outer function scope
  let timerInterval;

  function updateTimer() {
     const now = new Date();
     const timeRemaining = endDate - now;

     // Handle if the target date has already passed or is the same day
     if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        clearInterval(timerInterval);
        return;
     }

     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

     document.getElementById('days').textContent = days.toString().padStart(2, '0');
     document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
     document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
     document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }

  // Initial call to set the timer immediately
  updateTimer();
  // Update every second
  timerInterval = setInterval(updateTimer, 1000); 
}

// Call the countdown function with a specific target date
window.onload = function() {
    var preloader = document.getElementsByClassName('preloader')[0];
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 500);

    // Example target date; adjust as needed
    countdown('01/11/2024 12:20:00 AM');
};