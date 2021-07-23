const toggle_btn = document.querySelector(".toggle-btn");
const video_element = document.querySelector(".vido-elem");
toggle_btn.addEventListener("click", () => {
  if (toggle_btn.textContent == "Pause") {
    video_element.pause();
    toggle_btn.textContent = "Play";
  } else {
    video_element.play();
    toggle_btn.textContent = "Pause";
  }
});
