let keys = document.querySelector(".keys").children;

function addToggle(nr) {
  console.log(keys[nr]);
  keys[nr].classList.add("playing");
  setTimeout(removeToggle, 100, nr);
}

function removeToggle(nr) {
  keys[nr].classList.remove("playing");
}

function keyPlay(event) {
  console.log("keyPlay function starts");
  switch (event.code) {
    case "KeyA":
      addToggle(0);
      const A = document.getElementById("audioA");
      A.currentTime = 0;
      A.play();

      break;
    case "KeyS":
      addToggle(1);
      const S = document.getElementById("audioS");
      S.currentTime = 0;
      S.play();
      break;
    case "KeyD":
      addToggle(2);
      const D = document.getElementById("audioD");
      D.currentTime = 0;
      D.play();
      break;
    case "KeyF":
      addToggle(3);
      const F = document.getElementById("audioF");
      F.currentTime = 0;
      F.play();
      break;
    case "KeyG":
      addToggle(4);
      const G = document.getElementById("audioG");
      G.currentTime = 0;
      G.play();
      break;
    case "KeyH":
      addToggle(5);
      const H = document.getElementById("audioH");
      H.currentTime = 0;
      H.play();
      break;
    case "KeyJ":
      addToggle(6);
      const J = document.getElementById("audioJ");
      J.currentTime = 0;
      J.play();
      break;
    case "KeyK":
      addToggle(7);
      const K = document.getElementById("audioK");
      K.currentTime = 0;
      K.play();
      break;
    case "KeyL":
      addToggle(8);
      const L = document.getElementById("audioL");
      L.currentTime = 0;
      L.play();
      break;
    default:
      console.log("Different key!");
  }
}

document.addEventListener("keydown", keyPlay);
