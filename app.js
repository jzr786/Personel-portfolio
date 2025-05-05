
new WOW().init();

const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const videoList = [video1, video2, video3];

videoList.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
    });
});

function openModal(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

const slider = document.querySelector('.tech-slider');
const track = document.querySelector('.tech-slide-track');
const slides = document.querySelectorAll('.tech-slide');

// Function to update scale
function updateScales() {
    const sliderRect = slider.getBoundingClientRect();
    const centerX = sliderRect.left + sliderRect.width / 2;

    slides.forEach(slide => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;

        const distance = Math.abs(centerX - slideCenter);
        const maxDistance = sliderRect.width / 2;

        let scale = 1 - (distance / maxDistance);
        scale = Math.max(scale, 0.5); // Don't scale too small

        slide.style.transform = `scale(${scale})`;
        slide.style.opacity = scale; // Optional: fade a bit
    });
}



// Run continuously
setInterval(updateScales, 100);

track.addEventListener('mouseover', () => {
    track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseout', () => {
    track.style.animationPlayState = 'running';
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


});


