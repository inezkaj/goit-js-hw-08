import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  `timeupdate`,
  throttle(event => {
    console.log(event);
    localStorage.setItem(`videoplayer-current-time`, event.seconds);
  }, 1000)
);

window.addEventListener(`DOMContentLoaded`, () => {
  const time = localStorage.getItem(`videoplayer-current-time`);
  if (time) {
    player.setCurrentTime(time);
  }
});
