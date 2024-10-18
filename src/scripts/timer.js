import { formatTime } from "./util";

class Timer {
    constructor() {
        this.time = Number(localStorage.getItem("time")) || 0
        this.startTimer();
        this.intervalId = localStorage.getItem("intervalId") || null;
        this.blinkIntervalId = null;
        this.draw();
    }

    startTimer() {
        this.intervalId = setInterval(() => {
            this.time++  // Use the setter to update time
            this.draw()
        }, 1000);
        localStorage.setItem("intervalId", this.intervalId)
    }

    stopTimer() {
        clearInterval(this.intervalId);
        localStorage.removeItem("intervalId")
        this.blinkTime()
    }

    get time() {
        return Number(localStorage.getItem("time"))  // Convert to number
    }

    set time(time) {
        localStorage.setItem("time", time)
    }

    blinkTime(){
        const timerContainer = document.querySelector("#timer-container")
        let counter = 0;
        this.blinkIntervalId = setInterval(() => {
            if(counter % 3 === 0){
                timerContainer.classList.add("hidden")
            }else{
                timerContainer.classList.remove("hidden")
            }
            counter++
        }, 400)
    }
    draw() {
        const timerContainer = document.querySelector("#timer-container")
        const formattedTime = formatTime(this.time);
        timerContainer.textContent = formattedTime;
    }
}

export default Timer;
