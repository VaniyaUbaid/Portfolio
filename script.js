// Dark Mode
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll to Projects
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Scroll Button Logic (SAFE VERSION)
window.addEventListener("load", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
});
const roles = ["Aspiring AI Developer🚀 ", "Web Developer💻 ", "Tech Enthusiast🤖 "];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentText = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = roles[i].substring(0, j--);
    }

    document.getElementById("typing").textContent = currentText;

    if (j === roles[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

window.addEventListener("load", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 3 },
      color: { value: "#ffd369" },
      line_linked: {
        enable: true,
        color: "#ffd369"
      },
      move: { speed: 2 }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_yngmefh", "template_uddm018", this)
    .then(function(response) {
      console.log("SUCCESS", response);
      alert("Message sent!");
    })
    .catch(function(error) {
      console.log("FULL ERROR:", error);   // 👈 IMPORTANT
      alert("Failed: " + error.text);
    });
});