// Get modal element
let Classmodals = $(".modal");
let modals = Array.from(Classmodals);

// Listen for open click
window.addEventListener("click", outsideClick);

// Function to open modal
function openModal(i) {
  let modal = document.getElementById("simpleModal" + i);
  modal.style.display = "block";
}

// Function to close modal
function closeModal(i) {
  let modal = document.getElementById("simpleModal" + i);
  modal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
  modals.forEach(modal => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}
