document.addEventListener("DOMContentLoaded", function () {
    const plantImages = document.querySelectorAll(".plant-image");

    plantImages.forEach(image => {
        image.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const selectedPlant = this.getAttribute("data-plant"); // Get the plant name
            localStorage.setItem("selectedPlant", selectedPlant); // Save to localStorage
            window.location.href = "map.html"; // Redirect to the map page
        });
    });
});
