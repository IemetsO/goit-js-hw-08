const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
import throttle from 'lodash.throttle';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    const secondsJSON = JSON.stringify(seconds);
    localStorage.setItem('videoplayer-current-time', secondsJSON);
  }, 1000),
);

player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .then(function () {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
