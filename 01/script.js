let keys = document.querySelector(".keys").children;

function addToggle(nr) {
  console.log(keys[nr]);
  keys[nr].classList.toggle("playing");
  setTimeout(removeToggle, 100, nr)
}

function removeToggle(nr) {
  keys[nr].classList.toggle("playing")
}

function keyPlay(event) {
  console.log("keyPlay function starts");
  switch (event.code) {
    case "KeyA":
      addToggle(0)
      document.getElementById("audioA").play();
      break;
    case "KeyS":
      addToggle(1)
      document.getElementById("audioS").play();
      break;
    case "KeyD":
      addToggle(2)
      document.getElementById("audioD").play();
      break;
    case "KeyF":
      addToggle(3)
      document.getElementById("audioF").play();
      break;
    case "KeyG":
      addToggle(4)
      document.getElementById("audioG").play();
      break;
    case "KeyH":
      addToggle(5)
      document.getElementById("audioH").play();
      break;
    case "KeyJ":
      addToggle(6)
      document.getElementById("audioJ").play();
      break;
    case "KeyK":
      addToggle(7)
      document.getElementById("audioK").play();
      break;
    case "KeyL":
      addToggle(8)
      document.getElementById("audioL").play();
      break;
    default:
      console.log("Different key!")
  }
}


document.addEventListener("keydown", keyPlay);
