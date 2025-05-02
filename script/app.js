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



// Handle Scrolling

const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}



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



// Business Section

const carousel = document.getElementById('carousel');
const carousel2 = document.getElementById('carousel-2');
const scrollAmount = 300;

document.querySelector('.carousel-nav.left').addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.querySelector('.carousel-nav.right').addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

document.querySelector('.carousel-nav.left2').addEventListener('click', () => {
    carousel2.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

document.querySelector('.carousel-nav.right2').addEventListener('click', () => {
    carousel2.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});



// FAQ Toggle

const faqCards = document.querySelectorAll('.collapse');

const handleFAQClick = (card) => {
    if (card.classList.contains('collapse-border')) {
        card.classList.remove('collapse-border');
        const cardTitle = card.querySelector('.collapse-title').querySelector('span');
        cardTitle.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
        const cardDetails = card.querySelector('.collapse-content');
        cardDetails.classList.add('collapse-content-hide');
    }
    else {
        card.classList.add('collapse-border');
        const cardTitle = card.querySelector('.collapse-title').querySelector('span');
        cardTitle.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;
        const cardDetails = card.querySelector('.collapse-content');
        cardDetails.classList.remove('collapse-content-hide');
    }
}

faqCards.forEach(card => {
    card.addEventListener('click', () => handleFAQClick(card));
})