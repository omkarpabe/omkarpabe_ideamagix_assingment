

       // JavaScript for tab functionality
  document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Hide all tab contents
        tabContents.forEach(content => {
          content.style.display = "none";
        });

        // Show the selected tab content
        tabContents[index].style.display = "block";
      });
    });

    // Display the content of the first tab and hide the rest
    tabContents[0].style.display = "block";
    for (let i = 1; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
  });

  //faq function

  const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));




     