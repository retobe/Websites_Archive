function showVal(newVal) {
  document.getElementById("rangeLabel").innerHTML = `Range: ${newVal}%`;
}
async function refresh() {
  window.location.reload();
}

/*
 * Values
 */


function submit() {
  var range = document.getElementById("range").value;
  const grey = document.getElementById("greyscale").checked;
  const brightness = document.getElementById("bright").checked;
  const contrast = document.getElementById("Contrast").checked;
  const image = document.getElementById("image"); 
  const result = document.getElementById("result"); 

  console.log(grey, brightness, contrast, range);
  if (!grey && !brightness && !contrast) {
    result.innerHTML = "Select a checkbox.";
    return;
  }

  range /= 100;
  range *= 2;
  console.log(range);

  //So that image doesnt stay as none even after reset
  if (image.style.filter === "none") {
    image.style.filter = "";
  }

  
  if (brightness) {
    image.style.filter += `brightness(${range})`;
    console.log("brightness changed to " + range);
  } else {
    image.style.filter += `brightness(1)`;
    console.log("brightness changed to " + "1");
  }

  if (contrast) {
    image.style.filter += `contrast(${range})`;
    console.log("contrast changed to " + range);
  } else {
    image.style.filter += `contrast(1)`;
    console.log("contrast changed to " + "1");
  }

  if (grey) {
    image.style.filter += `grayscale(${range})`;
    console.log("Greyscaled changed to " + range);
  } else {
    image.style.filter += `grayscale(0)`;
    console.log("Greyscaled changed to " + 0);
  }
  result.innerHTML = "Submitted!";

  console.log("Clicked!");
}

function reset() {
  const image = document.getElementById("image"); 
  const result = document.getElementById("result"); 
  var rangeInput = document.getElementById("range");
  rangeInput.value = 0;
  showVal(0);

  const grey = document.getElementById("greyscale");
  const brightness = document.getElementById("bright");
  const contrast = document.getElementById("Contrast");

  grey.checked = false;
  brightness.checked = false;
  contrast.checked = false;

  image.style.filter = "none";
  result.innerHTML = "Reset!";
}