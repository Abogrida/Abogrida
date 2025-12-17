const projects = {
    "fci": {
        title: "FCI Zagazig University",
        description: "Official website for the Faculty of Computers and Information, Zagazig University. Created to provide students and faculty with easy access to academic resources, news, and events.",
        images: [
            "assets/imgs/74f2a124-63ec-45d1-9476-b59a828ef3ab.jpg"
        ]
    },
    "cashier": {
        title: "Smart Cashier System",
        description: "A comprehensive POS system connecting the front-end tablet to the kitchen. Workflow: Tablet (Waiter takes order) -> Server (Order sent to Cashier & Kitchen) -> Kitchen (Staff marks as 'Preparing' or 'Ready').",
        images: [
            "assets/imgs/28bfd9fb-b6a7-4a04-8b7b-fab716a1f1ee.jpg",
            "assets/imgs/4be2a51e-de06-43ca-9257-604b1e553563.jpg",
            "assets/imgs/799effa9-8baf-4a65-ba3c-b56ba2db6be0.jpg"
        ]
    },
    "baby": {
        title: "Baby Home Store",
        description: "A specialized e-commerce platform for baby products. Designed with a clean, gentle aesthetic to appeal to parents, featuring easy navigation, cart management, and secure checkout process.",
        images: [
            "assets/imgs/c3ba3c9b-ed76-47c6-9120-309aa5c8a30a.jpg",
            "assets/imgs/69e289c6-c1e0-4f57-838f-a91798008bef.jpg",
            "assets/imgs/e5e34031-f2bd-4bd3-97a5-2019d92f1c50.jpg"
        ]
    },
    "gpa": {
        title: "Egyptian Students GPA Calculator",
        description: "A specialized tool for Egyptian students in Saudi Arabia. It calculates the equivalent Egyptian university admission score based on their Saudi high school grades. Features grade input validation, instant converting, and saving results.",
        images: [
            "assets/imgs/Abogrida_page-0001.jpg"
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');

    if (projects[projectId]) {
        const data = projects[projectId];
        document.title = data.title + " - Details";
        document.getElementById('project-title').textContent = data.title;
        document.getElementById('project-desc').textContent = data.description;

        const gallery = document.getElementById('gallery-grid');
        gallery.innerHTML = ''; // Clear previous content

        data.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = data.title + " screenshot";
            img.classList.add('gallery-item');

            // Error handling for images
            img.onerror = function () {
                this.style.display = 'none';
                console.error("Could not load image:", src);
            };

            img.onclick = () => openLightbox(src);
            gallery.appendChild(img);
        });
    } else {
        document.getElementById('project-title').textContent = "Project Not Found";
        document.getElementById('project-desc').textContent = "Please return to the portfolio and select a project.";
    }
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

function openLightbox(src) {
    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
    }
}

if (closeBtn) {
    closeBtn.onclick = () => {
        lightbox.style.display = "none";
    }
}

if (lightbox) {
    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    }
}
