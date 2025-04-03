/*const audio = document.getElementById('audio');
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

document.addEventListener('contextmenu', event => {
    if (event.target.tagName === 'IMG') {
      event.preventDefault();
    }
  });
*/

  fetch('requirements.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('requirements-container').innerHTML = data;
  })
  .catch(error => console.error('Error loading requirements.html:', error));