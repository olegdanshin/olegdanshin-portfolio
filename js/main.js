// Hamburger
const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const header = document.querySelector('.header');

// Set initial State Of Menu 

let showMenu = false;

hamburger.addEventListener('click', toggleMenu);

// Create a function for toggleMenu

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('close');
        sideMenu.classList.add('show');

        // Set Menu State
        showMenu = true;
    } else {
        hamburger.classList.remove('close');
        sideMenu.classList.remove('show');

        // Set Menu State
        showMenu = false;
    }
}

// Tabs

const tabItems = document.querySelectorAll(".tab-item");

const tabContentItems = document.querySelectorAll(".tab-content");

// Select tab content item

function selectItem(e) {
    // Remove all show and border classes

    removeBorder();

    removeShow();

    // Add border to current tab item

    this.classList.add("tab-border");

    // Grab content item from DOM

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add show class

    tabContentItem.classList.add("show");
}

// Remove bottom borders from all tab items

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove("tab-border");
    });
}

// Remove show class from all content items

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove("show");
    });
}

// Listen for tab item click

tabItems.forEach(item => {
    item.addEventListener("click", selectItem);
});