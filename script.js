// Navbar scroll effect
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $(".navbar").addClass("scrolled");
    } else {
        $(".navbar").removeClass("scrolled");
    }
});

// Smooth scrolling for anchor links
$('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top - 70,
        },
        500,
        "linear"
    );
});

// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(".back-to-top").addClass("active");
    } else {
        $(".back-to-top").removeClass("active");
    }
});

// Animation on scroll
$(document).ready(function () {
    $(window).scroll(function () {
        $(".animate__animated").each(function () {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll + windowHeight > position) {
                var animationClass = $(this)
                    .attr("class")
                    .split("animate__animated ")[1]
                    .split(" ")[0];
                $(this).addClass("animate__" + animationClass);
            }
        });
    });
});

// Form submission
$("#contactForm").submit(function (e) {
    e.preventDefault();

    // Get form values
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    // Here you would typically send the data to a server
    // For demo purposes, we'll just show an alert
    alert(
        "Thank you, " +
        name +
        "! Your message has been sent. We will contact you soon."
    );

    // Reset form
    $("#contactForm")[0].reset();
});

// Initialize carousel
var testimonialCarousel = new bootstrap.Carousel(
    document.getElementById("testimonialCarousel"),
    {
        interval: 5000,
        wrap: true,
    }
);

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");
    const speed = 200;

    counters.forEach((counter) => {
        const target = +counter.getAttribute("data-count");
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target + "+";
        }
    });
}

// Start counters when section is in view
window.addEventListener("scroll", function () {
    const aboutSection = document.getElementById("about");
    const position = aboutSection.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
        animateCounters();
        // Remove event listener after first trigger
        window.removeEventListener("scroll", this);
    }
});
