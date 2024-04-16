import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const time = localStorage.getItem("videoplayer-current-time");

if(time){
    player.setCurrentTime(JSON.parse(time).seconds).then();
}

player.on('timeupdate', _.throttle(timeData => {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(timeData));
}, 1000));


