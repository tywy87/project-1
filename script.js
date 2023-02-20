// Get the modal
const modal = document.getElementById("myModal");

// Anchor tag that opens the modal
const link = document.getElementById("myLink");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
link.onclick = function() {
  modal.style.display = "block";
  return false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
