// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";
//dodger.style.left = "0px";
//dodger.style.right = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });