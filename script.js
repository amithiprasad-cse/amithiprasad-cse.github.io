// Smooth scroll for "View Projects" button
document.querySelector("a[href='#projects']").addEventListener("click", function(e) {
  e.preventDefault();
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});


// Button click effect
const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.innerText = "Loading...";
  
  setTimeout(() => {
    button.innerText = "View Projects";
  }, 1000);
});


// Welcome alert (optional)
window.onload = () => {
  console.log("Welcome to Amithi's Portfolio 🚀");
};
