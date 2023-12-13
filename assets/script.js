window.onscroll = function() {
    scrollFunction();
};
  
  function scrollFunction() {
    var navbar = document.getElementById("navbar");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "0"; // Set the top property to 0 to keep the navbar fixed
    }
}

var currentPage = window.location.pathname.split('/').pop();

// Add 'active' class to the corresponding link in the navbar
var links = document.querySelectorAll('.navbar a');
links.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Set the date and time we're counting down to (in UTC)
    var countDownDate = new Date("2023-12-20T00:00:00Z").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function () {
        // Get the current date and time in the specified time zone
        var now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        now = new Date(now).getTime();

        // Calculate the remaining time
        var distance = countDownDate - now;

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}); //