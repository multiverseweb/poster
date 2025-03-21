const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const buttonImg = document.getElementById('sound');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        buttonImg.src = "../images/mute.png";
    } else {
        audio.pause();
        buttonImg.src = "../images/volume.png";
    }
});
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
});