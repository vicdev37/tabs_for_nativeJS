function timer() {
  // Timer

  let deadline = '2019-03-13 04:43:07 PM';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));


    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);


    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);



    function updateClock() {
      let t = getTimeRemaining(endtime);
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;




      if (t.total <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);



      }

    }

  }
  setClock('timer', deadline);

}

module.exports = timer;