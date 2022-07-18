
class StopWatch{
    timeoutId = null;
    ms = 0;
    min = 0;
    sec = 0;
    stopwatch = document.getElementById("watch");
    startButton = document.getElementById("start-btn");


  start(flag) {
    if (flag) {
      this.startButton.enabled = true;
    }
    this.timeoutId = setTimeout(() => {
      this.ms = parseInt(this.ms);
      this.sec = parseInt(this.sec);
      this.min = parseInt(this.min);

      this.ms++;
      if (this.ms == 100) {
        this.sec = this.sec + 1;
        this.ms = 0;
        //   console.error(ms)
      }
      if (this.sec == 60) {
        this.min = this.min + 1;
        this.sec = 0;
        //   console.log(sec);
      }
      if (this.ms < 10) {
        this.ms = "0" + this.ms;
      }
      if (this.sec < 10) {
        this.sec = "1" + this.sec;
      }
      if (this.min < 10) {
        this.min = "0" + this.min;
      }

      watch.innerHTML = this.min + ":" + this.sec + ":" + this.ms;
      this.start();
    }, 10);
  }

  stop() {
    clearTimeout(this.timeoutId);
    this.startButton.disabled = false;
  }

  reset() {
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
    clearTimeout(this.timeoutId);
    this.stopwatch.innerHTML = "00:00:00";
    this.startButton.disabled = false;
  }
}

const stopWatch = new StopWatch();

function start(flag){
  stopWatch.start(flag)
}

function stop(){
  stopWatch.stop()
}

function reset(){
  stopWatch.reset()
}