// ==========================
// EMAILJS INIT
// ==========================

emailjs.init("konhu9-9a-wj8sSN9");

// ==========================
// REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;

        const elementTop = section.getBoundingClientRect().top;

        const visiblePoint = 120;

        if (elementTop < windowHeight - visiblePoint) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ==========================
// SMOOTH BUTTON SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ==========================
// BOOKING FORM
// ==========================

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitBtn = bookingForm.querySelector("button");

        submitBtn.disabled = true;

        submitBtn.innerText = "ОТПРАВКА...";

        const params = {

            name: bookingForm.name.value,
            phone: bookingForm.phone.value,
            guests: bookingForm.guests.value,
            date: bookingForm.date.value,
            comment: bookingForm.comment.value

        };

        emailjs.send(
            "service_o6rn1z8",
            "template_r1ak5re",
            params
        )

        .then(function () {

            showNotification(
                "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
                "success"
            );

            bookingForm.reset();

        })

        .catch(function (error) {

            console.error(error);

            showNotification(
                "Ошибка отправки. Попробуйте позже.",
                "error"
            );

        })

        .finally(function () {

            submitBtn.disabled = false;

            submitBtn.innerText = "ОТПРАВИТЬ ЗАЯВКУ";

        });

    });

}


// ==========================
// NOTIFICATION
// ==========================

function showNotification(message, type) {

    const oldNotification =
        document.querySelector(".notification");

    if (oldNotification) {
        oldNotification.remove();
    }

    const notification =
        document.createElement("div");

    notification.className = "notification" + type;

    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 5000);

}


// ==========================
// PARALLAX HERO
// ==========================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if (!hero) return;

    let scrollPosition =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.4 + "px";

});


// ==========================
// GALLERY LIGHTBOX
// ==========================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay =
            document.createElement("div");

        overlay.className =
            "lightbox";

        overlay.innerHTML = `
            <img src="${image.src}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});


// ==========================
// HEADER FADE
// ==========================

window.addEventListener("scroll", () => {

    const heroContent =
        document.querySelector(".hero-content");

    if (!heroContent) return;

    let value =
        window.scrollY;

    heroContent.style.opacity =
        1 - value / 700;

});


// ==========================
// CONSOLE
// ==========================

console.log(
    "KAPRIZ Luxury Cabaret Loaded"
);