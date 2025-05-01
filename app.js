// Logic for Navbar

document.getElementById("dropdown_btn").addEventListener("click", function () {
    const child = document.getElementById("child_content");
    child.classList.toggle('show-content');
})

document.getElementById("nested_dropdown_btn").addEventListener("click", function (e) {
    e.preventDefault();
    const child = document.getElementById("nested_child_content");
    child.classList.toggle('show-content');
})



// Active clicked package

const serviceCards = document.querySelectorAll('.package-card');

const updateDefaultCard = (c) => {
    const icon = c.querySelector('span');
    icon.innerHTML = `<i class="fa-regular fa-circle"></i>`
}

const handleCardClick = (card) => {
    serviceCards.forEach(c => {
        updateDefaultCard(c);
    })
    card.querySelector('span').innerHTML = `<i class="fa-solid fa-circle-check package-fa"></i>`;

}

serviceCards.forEach(card => {
    card.addEventListener('click', () => handleCardClick(card));
})



