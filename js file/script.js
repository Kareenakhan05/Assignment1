'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
document.addEventListener('DOMContentLoaded', (event) => {
  const contactUsBtn = document.getElementById('contactUsBtn');
  const popupForm = document.getElementById('popupForm');
  const closeBtn = document.getElementById('closeBtn');
  const contactForm = document.getElementById('contactForm');

  contactUsBtn.addEventListener('click', () => {
      popupForm.style.display = 'flex';
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });

    // Send form data to Getform.io endpoint
    fetch("https://getform.io/f/lbkmwdob", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      alert("Your message has been sent successfully!");
      form.reset(); // Reset form fields after submission
    })
    .catch(function (error) {
      console.error("Submission error:", error);
      alert("There was a problem with the form submission. Please try again.");
    });
  });

  // Contact Us button and popup form handling
  
  contactUsBtn.addEventListener("click", function () {
    popupForm.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    popupForm.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == popupForm) {
      popupForm.style.display = "none";
    }
  });
});

  closeBtn.addEventListener('click', () => {
      popupForm.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === popupForm) {
          popupForm.style.display = 'none';
      }
  });

  contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Form submitted!');
      // Here you can handle the form submission, e.g., send data to server
      popupForm.style.display = 'none';
  });
