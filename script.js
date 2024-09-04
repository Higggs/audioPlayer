function playAudio(clip) {
  
  const audio = new Audio(`audio/${clip}.mp3`);
  audio.play();
}
