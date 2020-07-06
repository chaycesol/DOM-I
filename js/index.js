// console.log("Hello, Chayce!"); // testing to see if JS file is connected to the html file property

const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//Items in Header
const navLinks = document.querySelectorAll('a')
navLinks[0].textContent = 'Services'
navLinks[1].textContent = 'Product'
navLinks[2].textContent = 'Vision'
navLinks[3].textContent = 'Features'
navLinks[4].textContent = 'About'
navLinks[5].textContent = 'Contact'

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', "img/header-img.png");


//Items in CTA Section
const domHeader = document.querySelector(".cta-text h1")
// console.log(domHeader);
domHeader.innerHTML = 'DOM <br> IS <br> AWESOME'

const ctaButtonText= document.querySelector(".cta-text button")
// console.log(ctaButtonText);
ctaButtonText.textContent = 'Get Started';

//main content section
//top content
const topTextHeaders = document.querySelectorAll(".top-content .text-content h4")
// console.log(topTextHeaders);
topTextHeaders[0].textContent = "Features";
topTextHeaders[1].textContent = "About";

const topTextBlock = document.querySelectorAll(".top-content .text-content p")
// console.log(topTextBlock);
topTextBlock[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topTextBlock[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//middle content
const midPageImg = document.getElementById("middle-img");
midPageImg.setAttribute('src', "img/mid-page-accent.jpg");

//bottom content
const btmTextHeaders = document.querySelectorAll(".bottom-content .text-content h4")
// console.log(btmTextHeaders);
btmTextHeaders[0].textContent = "Services";
btmTextHeaders[1].textContent = "Product";
btmTextHeaders[2].textContent = "Vision";

const btmTextBlock = document.querySelectorAll(".bottom-content .text-content p")
// console.log(btmTextBlock);
btmTextBlock[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
btmTextBlock[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
btmTextBlock[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Contact Section
const contactTitle = document.querySelector('.contact h4')
// console.log(contactTitle);
contactTitle.textContent = "Contact";

const contactText = document.querySelectorAll('.contact p')
// console.log(contactText)
contactText[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"  
contactText[1].textContent = "1 (888) 888-8888"
contactText[2].textContent = "sales@greatidea.io"

// FOOTER Content
const footerText = document.querySelector('footer p');
// console.log(footerText);
footerText.textContent = "Copyright Great Idea! 2018"