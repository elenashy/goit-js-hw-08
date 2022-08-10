import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALE_STORAGE_KEY = 'videoplayer-current-time'

const onPlay = function (data) {
    const currentTime = data.seconds
    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(currentTime))
}

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(LOCALE_STORAGE_KEY)
player.setCurrentTime(savedTime)


