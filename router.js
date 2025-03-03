window.onload = function() {
    let params = new URLSearchParams(window.location.search);
    let username = params.get('username');
    if (username) {
        let images = JSON.parse(localStorage.getItem(username + '-images') || '[]');
        let container = document.getElementById('user-gallery');
        images.forEach(img => {
            let imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.style.width = '100px';
            imgElement.style.margin = '5px';
            container.appendChild(imgElement);
        });
    }
};