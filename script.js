document.addEventListener('DOMContentLoaded', function () {
    var countDownDate = new Date("2023-12-20T00:00:00Z").getTime();

    var x = setInterval(function () {
        var now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
        now = new Date(now).getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "The series is out";
        }
    }, 1000);
});
