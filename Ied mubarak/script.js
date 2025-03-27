function openDoor() {
  let sound = new Audio("Doors Open.mp3"); // Suara pintu terbuka
  sound.play();

  document.getElementById("leftDoor").style.transform = "rotateY(-100deg)";
  document.getElementById("rightDoor").style.transform = "rotateY(100deg)";

  setTimeout(() => {
    window.location.href = "ucapan.html";
  }, 1300);
}
