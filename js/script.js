// Place text "Silus Gaming World" into cons silusGW.
const silusGW = `<p>Silus Gaming World says, 
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
Silus Gaming World <span>Silus Gaming World</span>,
Silus Gaming World <span>Has over 13,000 subs</span>,
Thank you, thank you, thank you <span>subscribers</span>
     -Brian Bauska (bbauska)</p>`;

// Function to insert silusGW into divs
function insertsilusGWIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert silusGW into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = silusGW;
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertsilusGWIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
  const viewportWidth = window.innerWidth;
  const baseWidth = 1000;
  const scaleFactor =
    viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
  contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
