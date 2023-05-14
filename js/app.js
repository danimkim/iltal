/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navMenu = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");

const navMenuNames = ["Home", "About us", "Blog", "Contact"];

const openMenuButton = document.querySelector(".navbar__button-open-menu");

const valueCardTitles = [
  "Honesty",
  "Communication",
  "Quality Services",
  "Loyalty",
];

const valueCardContents = [
  "For us, as a company, it is very important that the information provided to our customers is honest and true.",
  "Each one of us must interact transparently and appropriately, trying to strengthen our interpersonal relations and the image of the company.",
  "Service quality is one of our most important values which demands all our effort, determination, and courage to be successful.",
  " Our team members must show loyalty; referring to faithfulness, commitment, identification, pride, membership, confidentially, and interest defense.",
];

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const handleOpenMenuButtonClick = () => {
  // add class name 'open'
  openMenuButton.classList.toggle("open");
  navMenu.classList.toggle("visible");
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// dynamically add nav tab to navList
navMenuNames.map((name) => {
  const li = document.createElement("li");
  li.innerHTML = name;
  navList.appendChild(li);
});

// build menu open button

openMenuButton.addEventListener("click", handleOpenMenuButtonClick);

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
