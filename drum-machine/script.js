const playSound = (e) => {
  //   console.log(`${e.keyCode}`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currenTime = 0;
  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
};

window.addEventListener("keydown", playSound);
