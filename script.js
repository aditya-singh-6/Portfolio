  function toggleNavbar(collapseID) {
      document.getElementById(collapseID).classList.toggle('hidden')
      document.getElementById(collapseID).classList.toggle('block')
  }



  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const closeNav = document.getElementById('closeNav');

  navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('translate-x-full');
  });

  closeNav.addEventListener('click', () => {
      navMenu.classList.add('translate-x-full');
  });
  //    ........create contactform .................
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission

      const responseMessageDiv = document.getElementById("response-message");

      emailjs.sendForm("service_bo6oqz9", "template_5ojlgld", this)
          .then(function() {
              // Success message
              responseMessageDiv.className = "mt-4 p-4 rounded bg-green-500 text-white";
              responseMessageDiv.innerText = "Message sent successfully!";
              responseMessageDiv.classList.remove("hidden");
              document.getElementById("contactForm").reset();
          }, function(error) {
              // Error message
              responseMessageDiv.className = "mt-4 p-4 rounded bg-red-500 text-white";
              responseMessageDiv.innerText = "Error sending message. Please try again.";
              responseMessageDiv.classList.remove("hidden");
          });

      // Hide the message after 5 seconds
      setTimeout(() => {
          responseMessageDiv.classList.add("hidden");
      }, 5000);
  });
  // ....................
  //    Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth",
          });
      });
  });