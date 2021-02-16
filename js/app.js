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
 * Define Global Variables
 * 
*/
const navaigationBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const frag = document.createDocumentFragment(); 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function that remove the active class

function activeClassRemover(){
    sections.forEach(element => {
            element.classList.remove('your-active-class');   
    });
}

activeClassRemover();
// Function that add the active class

function activeClassAdder(section){
    document.getElementById(section).classList.add('your-active-class');
}
// Function that check the view of a section

function checkview(section){
    const sectionBound = section.getBoundingClientRect();
    if(sectionBound.top <= 50 &&sectionBound.top + sectionBound.bottom >= 100 && sectionBound.bottom >= 100){
        return true;
    }else{
        return false;
    }

}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

sections.forEach(element => {
    const list = document.createElement('li');
    const sectionNav = element.getAttribute('data-nav');
    const sectionID = element.getAttribute('id');
    list.innerHTML = `<a href="#${sectionID}"> ${sectionNav} </a>`;
    frag.appendChild(list);
});
// Add class 'active' to section when near top of viewport

function active(){
    sections.forEach(sect => {
        const idSect = sect.getAttribute('id');
        if(checkview(sect) === true){
            activeClassRemover();
            activeClassAdder(idSect);
        }
    });
}
// Scroll to anchor ID using scrollTO event

document.documentElement.style.scrollBehavior = "smooth";
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

navaigationBar.appendChild(frag);
// Set sections as active

document.addEventListener('scroll',active);
