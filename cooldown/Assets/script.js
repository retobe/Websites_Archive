window.onload = function () {
  const time = document.getElementById("time");
  console.log(time);
  time.innerHTML = moment().format("LLL");
  setInterval(() => {
    time.innerHTML = moment().format("LLL");
  }, 1000);
};
