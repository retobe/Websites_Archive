const theCorrectBox = Math.floor(Math.random() * 5) + 1;
const boxes = document.querySelectorAll('[name="boxes"]');
const result = document.getElementById("result");
let reset = document.getElementById("restart");
reset.disabled = true;
boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    const clickedId = parseInt(event.target.id);
    console.log(clickedId, theCorrectBox);
    if (clickedId === theCorrectBox) {
      result.innerHTML = "That was the correct box!";
    } else {
      result.innerHTML = `That was the incorrect box.\nYou chose box-${clickedId}, the correct box was box-${theCorrectBox}.`;
    }

    boxes.forEach((box) => {
      box.style.display = "none"
    });
    return (reset.disabled = false);
  });
});

function restart() {
  window.location.reload();
}
