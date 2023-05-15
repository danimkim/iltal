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
const sections = document.querySelectorAll("section");

/** hamburger button at top right when in mobile viewport */
const openMenuButton = document.querySelector(".navbar__button-open-menu");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

const toggleMenu = () => {
  navMenu.classList.toggle("visible");
};

const getNavMenu = (sectionId) => document.getElementById(`nav-${sectionId}`);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// dynamically add nav tab to navList

Array.from(sections).map((section, idx) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.href = `#section${idx + 1}`;
  anchor.innerHTML = section.dataset.nav;
  li.id = `nav-section${idx + 1}`;
  li.classList.add(`section${idx + 1}`);

  li.appendChild(anchor);
  navList.appendChild(li);
});

// build menu open button
openMenuButton.addEventListener("click", toggleMenu);

// Add class 'active' to section when near top of viewport
const addActiveToSection = (section) => {
  if (
    section.getBoundingClientRect().top <= 300 &&
    section.getBoundingClientRect().top >=
      -(section.getBoundingClientRect().height - 300)
  ) {
    section.classList.add("active-section");
    getNavMenu(section.id).classList.add("active");
  } else {
    section.classList.remove("active-section");
    getNavMenu(section.id).classList.remove("active");
  }
};

// Scroll to anchor ID using scrollTO event
const scrollToSection = (link) => {
  const section = document.getElementById(link);
  section.scrollIntoView({ behavior: "smooth" });
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const navTabs = Array.from(document.querySelectorAll("#navbar__list li"));

for (let tab of navTabs) {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToSection(tab.classList[0]);
  });
}

// Set sections as active

for (let section of sections) {
  window.addEventListener("scroll", () => {
    addActiveToSection(section);
  });
}
