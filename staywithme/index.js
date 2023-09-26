const navListener = document.querySelectorAll("a");
const Origin = document.getElementById("origin")
let selectedButton = Origin;
navListener.forEach(aButton => {
    aButton.addEventListener('click', () => {
        if (selectedButton) {
            selectedButton.classList.remove('active');
        }
        aButton.classList.add("active");
        selectedButton = aButton;
    })

})

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
  });