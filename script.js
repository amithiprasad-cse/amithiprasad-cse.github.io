// Smooth Scroll (View Projects button)
const projectLink = document.querySelector("a[href='#projects']");

if (projectLink) {
  projectLink.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#projects").scrollIntoView({
      behavior: "smooth"
    });
  });
}


// Button Click Effect
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", () => {
    button.innerText = "Loading...";
    
    setTimeout(() => {
      button.innerText = "View Projects";
    }, 1000);
  });
}


// Simple Fade-in on Scroll
const elements = document.querySelectorAll(".project-card, .skill-box");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});


// Initial style (hidden)
elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});


// Console Message
console.log("Portfolio Loaded Successfully");