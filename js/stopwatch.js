var stopwatch = (function() {
    var timer = document.getElementById("timer");
    var stop = document.getElementById("stop");
    var start = document.getElementById("start");
    var time = "00:00:00";
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var t;

    timer.textContent = time;

    function buildTimer() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                seconds = 0;
                hours++;
                if (hours >= 60) {
                    seconds = 0;
                    minutes = 0;
                }
            }
        }
        timer.textContent = (hours < 10 ? "0" + hours.toString() : hours) + ":" + (minutes < 10 ? "0" + minutes.toString() : minutes) + ":" + (seconds < 10 ? "0" + seconds.toString() : seconds);
    }

    function stopTimer() {
        stop.addEventListener("click", function() {
            clearTimeout(t);
        });
    }

    function startTimer() {
        start.addEventListener("click", function() {
            clearTimeout(t);
            t = setInterval(buildTimer, 1000);
        });
    }
    return {
        start: startTimer(),
        stop: stopTimer()
    };


})();
