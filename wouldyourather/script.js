
// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'AIzaSyCC4FxLgC5eNjnfVwaSntOdreuwFx9_zzo';
// Replace 'YOUR_CX' with your actual Custom Search Engine ID
const cx = '36f994d0d98b443e6';


function start() {

    const containers = document.querySelector('.container');
    var rathersArray = [
        "Brazilian",
        "Korean",
        "Arabs",
        "Indian",
        "African",
        "Japanese",
        "Chinese",
        "Russian",
        "Ukrainian",
        "Hispanic",
        "Latino",
        "Native American",
        "Caribbean",
        "Jewish",
    ];

    var randomNum = Math.floor(Math.random() * 10)
    var randomNum2 = Math.floor(Math.random() * 10);
    var percentage = Math.floor(Math.random() * 100);

    const shuffledArray = rathersArray.sort((a, b) => 0.5 - Math.random());
    var firstRather = shuffledArray[randomNum];
    var secondRather = shuffledArray[randomNum2];

    document.getElementById("rather1").innerHTML = firstRather;
    document.getElementById("rather2").innerHTML = secondRather;
    const searchInput = `${firstRather}`;
    const searchInput2 = `${secondRather}`;
    const url1 = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchInput}&searchType=image`;
    const url2 = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchInput2}&searchType=image`;

    fetch(url1)
        .then(response => response.json())
        .then(data => {
            const firstResult = data.items[Math.floor(Math.random() + 3) + 1];
            const imageUrl = firstResult.link;
            document.getElementById('rather1src').src = imageUrl;
        })
        .catch(error => console.log(error));
    fetch(url2)
        .then(response => response.json())
        .then(data => {
            const firstResult2 = data.items[Math.floor(Math.random() + 3) + 1];
            const imageUrl2 = firstResult2.link;
            document.getElementById('rather2src').src = imageUrl2;
        })
        .catch(error => console.log(error));


    containers.forEach(function (container) {
        container.addEventListener('click', function (event) {
            // Check if the clicked element is a box div
            if (event.target.classList.contains('box')) {
                // Retrieve the text content of the clicked box
                const boxText = event.target.textContent;
                // Add your code here to handle the click event for the clicked box
                document.getElementById("rather1percent").innerText = `${percentage}%`
                document.getElementById("rather2percent").innerText = `${Math.abs(percentage - 100)}%`
                console.log('Clicked box:', boxText);
            }
        });
    });
}
