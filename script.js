document.addEventListener("DOMContentLoaded", function () {
    const uploadButton = document.getElementById("uploadBtn");
    const imageContainer = document.getElementById("categories-container");
    const fileInput = document.getElementById("imageUpload");
    const dateInput = document.getElementById("imageDate");
    const descInput = document.getElementById("imageDescription");
    const username = localStorage.getItem("loggedInUser");

    if (!username) return;

    uploadButton?.addEventListener("click", function () {
        let files = fileInput.files;
        let images = JSON.parse(localStorage.getItem(username + "-images") || "[]");

        for (let file of files) {
            let reader = new FileReader();
            reader.onload = function (e) {
                let newImage = {
                    src: e.target.result,
                    date: dateInput.value,
                    description: descInput.value
                };
                images.push(newImage);
                localStorage.setItem(username + "-images", JSON.stringify(images));
                displayImages();
            };
            reader.readAsDataURL(file);
        }
    });

    function displayImages() {
        let images = JSON.parse(localStorage.getItem(username + "-images") || "[]");
        imageContainer.innerHTML = "";
        images.forEach(img => {
            let imgWrapper = document.createElement("div");
            imgWrapper.classList.add("image-wrapper");
            let imgElement = document.createElement("img");
            imgElement.src = img.src;
            let dateElement = document.createElement("p");
            dateElement.classList.add("date");
            dateElement.textContent = `Date: ${img.date || 'N/A'}`;
            let descElement = document.createElement("p");
            descElement.classList.add("description");
            descElement.textContent = `Description: ${img.description || 'No description'}`;
            imgWrapper.appendChild(dateElement);
            imgWrapper.appendChild(imgElement);
            imgWrapper.appendChild(descElement);
            imageContainer.appendChild(imgWrapper);
        });
    }

    displayImages();
});