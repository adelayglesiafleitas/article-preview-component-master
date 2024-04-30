const buttonAvatar = document.getElementById("button_avatar");
const buttonShare = document.getElementById("button_share");
const contShare = document.getElementById("cont_share");
const arrow = document.getElementById("arrow");

buttonAvatar.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width >= 1440) {
    if (contShare.classList.contains("hidden")) {
      contShare.classList.remove("hidden");
      contShare.classList.add("container__shareJS");
      buttonShare.classList.add("hidden");
      arrow.classList.remove("hidden");
    } else {
      contShare.classList.add("hidden");
      arrow.classList.add("hidden");
    }
  } else if (width < 1440) {
    contShare.classList.remove("container__shareJS");
    contShare.classList.remove("hidden");
    buttonShare.classList.remove("hidden");
  }
});

buttonShare.addEventListener("click", () => {
  const width = window.innerWidth;
  if (width < 1440) {
    contShare.classList.add("hidden");
  }
});
