const names = ["John", "Micheal", "Zach", "Jacob", "Kyle", "Dominic"];
const imageLinks = [
    "https://i.pinimg.com/564x/54/72/84/547284e994d2b8937547f3e74070cd46.jpg",
    "https://i.pinimg.com/564x/51/8e/09/518e091f314103c452429370c511f926.jpg",
    "https://i.pinimg.com/564x/09/04/8c/09048c22163ed65e5adff28ba0f87deb.jpg",
    "https://i.pinimg.com/564x/b2/1c/7a/b21c7ab7560f3cfdd4d7f24b68abb9d0.jpg",
    "https://i.pinimg.com/564x/d2/de/a7/d2dea766ea731b85d51b254d2c1f7349.jpg",
    "https://i.pinimg.com/564x/26/3d/fc/263dfc9211070a69c173714a3742c76d.jpg",
    "https://i.pinimg.com/564x/1d/6c/7d/1d6c7de2831b1af320a852d4a02dd7b7.jpg"

]
// shuffle the array using Fisher-Yates algorithm
const shuffledImages = imageLinks.slice();
const shuffledNames = names.slice();

for (let i = shuffledImages.length - 1; i > 0; i--) {
    const l = Math.floor(Math.random() * (i + 1));
    [shuffledImages[i], shuffledImages[l]] = [shuffledImages[l], shuffledImages[i]];
}
for (let i = shuffledNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
}

// Elements
const personNames = document.querySelectorAll(".person .name");
const profilePictures = document.querySelectorAll("img");
const personDivs = document.querySelectorAll(".person");
const selectEmojiDivs = document.querySelectorAll(".person h1");

var haveAttr = false;


let selectedPersonDiv = null;
const originalContents = new Map();

personDivs.forEach((personDiv) => {
    // Store original content
    originalContents.set(personDiv, personDiv.innerHTML);

    personDiv.addEventListener("click", function () {
        if (selectedPersonDiv !== null && selectedPersonDiv !== this) {
            // Remove emojis from the previously clicked personDiv
            selectedPersonDiv.querySelector(".check-mark")?.remove();
            selectedPersonDiv.querySelector(".x-mark")?.remove();
        }

        const hasCheckMark = personDiv.querySelector(".check-mark");
        const hasXMark = personDiv.querySelector(".x-mark");

        if (!hasCheckMark && !hasXMark) {
            // Add emojis to the current clicked personDiv
            const checkMark = document.createElement("h1");
            checkMark.textContent = "✅";
            checkMark.classList.add("check-mark");
            const xMark = document.createElement("h1");
            xMark.textContent = "❌";
            xMark.classList.add("x-mark");
            xMark.setAttribute("id", "x-mark")
            checkMark.setAttribute("id", "v-mark")
            this.appendChild(checkMark);
            this.appendChild(xMark);
        }

        // Store the current clicked personDiv as the selected one
        selectedPersonDiv = this;
    });
});

selectEmojiDivs.forEach((emojiDiv) => {
    emojiDiv.addEventListener("click", function () {
        const personDiv = emojiDiv.parentElement;
        if (emojiDiv.id === "x-mark") {
            // Remove emojis from the personDiv
            console.log("clicked x mark")
            personDiv.querySelector(".check-mark")?.remove();
            personDiv.querySelector(".x-mark")?.remove();
            selectedPersonDiv = null;

            // Restore original content
            personDiv.innerHTML = originalContents.get(personDiv);
        }
    });
});

profilePictures.forEach((image, index) => {
    image.src = shuffledImages[index];
})

personNames.forEach((person, index) => {
    person.textContent = shuffledNames[index];
});
