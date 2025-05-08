
new WOW().init();

document.querySelector('.back-vid').addEventListener('loadeddata', function () {
    document.querySelector('.preloader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.preloader').remove();
    }, 500);
});

// const video1 = document.getElementById('projectVideo1');
// const video2 = document.getElementById('projectVideo2');
// const video3 = document.getElementById('projectVideo3');

// const videoList = [video1, video2, video3];

// videoList.forEach((video) => {
//     video.addEventListener('mouseover', () => {
//         video.play();
//     });

//     video.addEventListener('mouseout', () => {
//         video.pause();
//         video.currentTime = 0;
//     });
// });


// Enhanced Technologies Slider
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.tech-slider');
    const track = document.querySelector('.tech-slide-track');
    const slides = document.querySelectorAll('.tech-slide');

    // Clone slides for infinite loop
    const cloneSlides = () => {
        const slideArray = Array.from(slides);
        const firstHalf = slideArray.slice(0, Math.ceil(slideArray.length / 2));
        firstHalf.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });
    };

    cloneSlides();

    // Pause animation on hover
    const handleMouseEnter = () => {
        track.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
        track.style.animationPlayState = 'running';
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    // Scale effect based on position
    const updateScales = () => {
        const sliderRect = slider.getBoundingClientRect();
        const centerX = sliderRect.left + sliderRect.width / 2;

        document.querySelectorAll('.tech-slide').forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const distance = Math.abs(centerX - slideCenter);
            const maxDistance = sliderRect.width / 2;

            let scale = 1 - (distance / maxDistance * 0.5);
            scale = Math.max(scale, 0.6);

            slide.style.transform = `scale(${scale})`;
            slide.style.opacity = 0.5 + (scale * 0.5);
        });
    };

    // Update scales periodically and on scroll/resize
    setInterval(updateScales, 100);
    window.addEventListener('scroll', updateScales);
    window.addEventListener('resize', updateScales);

    // Initial update
    updateScales();
});





// Enhanced Modal Functionality
const certificateData = {
    "MERN certificate.PNG": {
        title: "MERN Stack Developer Certification",
        description: "Completed full stack web development course covering MongoDB, Express, React, and Node.js"
    },
    "Prompt Certificate.PNG": {
        title: "Prompt Engineering Certification",
        description: "Specialized training in AI interaction and prompt engineering techniques"
    },
    "Aptech-1.PNG": {
        title: "Web Development Certification",
        description: "Professional web development certification from Aptech"
    },
    "Aptech-2.PNG": {
        title: "Advanced Programming Certification",
        description: "Advanced programming concepts and techniques certification"
    },
    "AI certificate.PNG": {
        title: "Artificial Intelligence Fundamentals",
        description: "Certification in AI fundamentals and machine learning concepts"
    }
};

function openModal(element) {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("expandedCertificate");
    const title = document.getElementById("certificateTitle");
    const description = document.getElementById("certificateDescription");

    // Get filename from src
    const src = element.querySelector('img').src;
    const filename = src.split('/').pop();

    // Set modal content
    modalImg.src = src;
    title.textContent = certificateData[filename]?.title || "Certificate";
    description.textContent = certificateData[filename]?.description || "Professional certification";

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modal = document.getElementById("certificateModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById("certificateModal");
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeModal();
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });


    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });


});


