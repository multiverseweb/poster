const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const buttonImg = document.getElementById('sound');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        buttonImg.src = "../images/volume.png";
    } else {
        audio.pause();
        buttonImg.src = "../images/mute.png";
    }
});
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
});