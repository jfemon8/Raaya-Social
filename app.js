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

