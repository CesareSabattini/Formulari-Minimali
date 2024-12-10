document.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('mouseover', function () {
        const imageName = this.getAttribute('data-image');
        const backgroundContainer = document.getElementById('backgroundContainer');
        backgroundContainer.style.backgroundImage = `url('./images/${imageName}')`;
        backgroundContainer.classList.add("showImage")
    });

    link.addEventListener('mouseout', function () {
        const backgroundContainer = document.getElementById('backgroundContainer');
        backgroundContainer.style.backgroundImage = '';
        backgroundContainer.classList.remove("showImage")
    });
});

function showLinks() {
    const yearSelect = document.getElementById("yearSelect");
    document.getElementById("linkList2").style.display = yearSelect.value == 2 ? "block" : "none";
    document.getElementById("linkList3").style.display = yearSelect.value == 3 ? "block" : "none";
}

