const UI = {

    lerp: (a, b, t) => a + (b - a) * t,

    splitText(selector) {
   const el = document.querySelector(selector);
   if (!el) return [];
   const text = el.textContent;
   el.innerHTML = '';
   el.style.opacity = '1';

   return text.split('').map(char => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.display = 'inline-block';
  span.style.willChange = 'transform, opacity';
  el.appendChild(span);
  return span;
   });
    },

    animate({ duration, draw, easing = t => t }) {
   const start = performance.now();

   requestAnimationFrame(function frame(time) {
  let timeFraction = (time - start) / duration;
  if (timeFraction > 1) timeFraction = 1;

  // Apply easing to the time fraction
  const t = easing(timeFraction);

  draw(t);

  if (timeFraction < 1) requestAnimationFrame(frame);
   });
    },


    reveal(selector) {
   const chars = this.splitText(selector);

   chars.forEach((char, i) => {
  setTimeout(() => {
 this.animate({
duration: 800,
// Using a sine-based smoothing for the progress 't'
easing: progress => (Math.sin(progress * Math.PI - Math.PI / 2) + 1) / 2,
draw: t => {
    // LERP from 20px to 0px (X) and -50% to 0% (Y)
    const x = this.lerp(20, 0, t);
    const y = this.lerp(-50, 0, t);
    const opacity = this.lerp(0, 1, t);

    char.style.opacity = opacity;
    char.style.transform = `translate3d(${x}px, ${y}%, 0)`;
},
 });
  }, i * 50);
   });
    },
};

// --- Automation & Execution ---

// Initialize for specific heading
const heading = document.querySelector('#heading');
if (heading) observer.observe(heading);



setTimeout(() => {
    loader?.remove();
    clearTimeout(fnName())
}, 400);

setInterval(() => {
    loader.remove();
    clearInterval(fnName())
}, 400);


hasFollowedCursor.addEventListner('click', (event) => {
    if (event.target.matches("li")) {
   event.target.style.textDecoration = "line-through";
    }
})

let typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    Backspeed: 60,
    loop: true
})





 /* Outer Card: Receives Tilt Effect (Mouse / Touch) */
/*  .svg-logo-tilt-card {
   width: 100%;
 height: auto;
    transform-style: preserve-3d;
  transition: transform 0.15s cubic-bezier(0.2, 0.8, 1, 1);
will-change: transform;
 } */

  /* Inner Container: Holds Continuous Spin Animation */
 /*  .svg-logo-spinner {
    width: 100%;
  height: auto;
transform-style: preserve-3d;
   animation: spin3DInfinite 12s linear infinite;
 transform-origin: center center;
  } */




  // document.head.appendChild(styleTag);



 attachTiltEffect() {
const tiltCard = document.getElementById('logoTiltCard');
    const wrapper = this.container.querySelector('.svg-logo-perspective');
   if (!tiltCard || !wrapper) return;

  const handleMove = (clientX, clientY) => {
   const rect = wrapper.getBoundingClientRect();
    const x = clientX - rect.left;
const y = clientY - rect.top;

  const centerX = rect.width / 2;
   const centerY = rect.height / 2;

// Calculate tilt angles based on pointer distance from center
 const rotateX = ((y - centerY) / centerY) * -30;
  const rotateY = ((x - centerX) / centerX) * 30;

   tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
  };

 const handleReset = () => {
  tiltCard.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
 };



// Mouse events
    wrapper.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
   wrapper.addEventListener('mouseleave', handleReset);

  // Touch events for mobile responsiveness
 wrapper.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
handleMove(e.touches[0].clientX, e.touches[0].clientY);
 }
}, { passive: true });
    wrapper.addEventListener('touchend', handleReset);
 }







const favicon = document.querySelector('link[rel="icon"]');
const isDark = window.matchMedia('(prefers-color-scheme: dark)');

function updateFavicon() {
  // Logic to switch the fill color in the Data URI string
  // if (isDark.matches) { ... }
}

isDark.addEventListener('change', updateFavicon);



/*

injectAsset('js', 'components/loader-section.js');
injectAsset('js', 'components/design-system-section.js');
injectAsset('js', 'components/notch-section.js');
injectAsset('js', 'components/header-section.js');
injectAsset('js', 'components/hero-section.js');
injectAsset('js', 'components/about-section.js');
injectAsset('js', 'components/clients-section.js');
injectAsset('js', 'components/services-section.js');
injectAsset('js', 'components/projects-section.js');
injectAsset('js', 'components/testimonials-section.js');
injectAsset('js', 'components/faqs-section.js');
injectAsset('js', 'components/contact-section.js');
injectAsset('js', 'components/footer-section.js');
injectAsset('js', 'components/navigation-section.js');
injectAsset('js', 'components/toast-section.js');
*/



// dates functions
const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1, // january = 0
    day = now.getDate();




// section
class TSection extends HTMLElement {
    connectedCallback() {
   const selector = this.getAttribute('selector');
   const heading = this.getAttribute('heading');
   const details = this.getAttribute('details');
   const link = this.getAttribute('link');
   const linkText = this.getAttribute('linkText');
   const img = this.getAttribute('img');
   this.innerHTML = `
<section class="${selector}">
<div class="primary">
<h2>${heading}</h2>
<p>${details}</p>
<a class="btn" href="${link}">${linkText}</a>
</div>
<img src="${img}" />
</section>
`;
    }
}

customElements.define('t-section', TSection);



let startValue = 0,
    endValue = 100,
    loaderColor = '#fefefe';

let progress = setInterval(() => {
    startValue++;
    backGround?.animate(
   {
  background: `conic-gradient(var(${loaderColor}) ${startValue * 3.6}deg, transparent 0deg)`,
   },
   { duration: 'auto', fill: 'forwards', delay: 0 }
    );
    startValue == endValue ? clearInterval(progress) && body.removeChild(loader) : null;
}, 1000);




// get & set link > class="link" data="facebook" / messenger
let links = document.querySelectorAll('.link');
links?.forEach(link => {
    let linkName = this.dataset.name;
    this.setAttribute(`href`, `https://${authore.website}/${linkName}`); // if possible, reopen page and auto click particular link!
    this.setAttribute(`target`, `_blank`);
});

// link's formatting
const space = `%20`,
    newLine = `%0A`,
    bold = '*',
    url = `%3F`,
    query = `?`,
    path = `/`,
    fragment = `#`,
    querySeparetor = `&`;

const authore = {
    name: `Hassan${space}Biswas`,
    website: 'hassanbiswas.github.io',
    title: `Web${space}Developer${space}|${space}Hassan${space}Biswas`,
    mailType: [
   `Website`,
   `Order`,
   `Purchage`,
   `Payment`,
   `Visiting Card`,
   `Key Holder`,
   `QR code`,
   `NFC`,
    ],
    mail: `${this.website}+${this.mailType[0]}@gmail.com`,
    call: `8801602873384`,
};

// product
let products = document.querySelector('.product');
products?.forEach(product => {
    // product details by data attributes
    let name = this.dataset.name,
   price = this.dataset.price;
});

// subject & body
let message = {
    subject: `
${authore.mailType[2]}:${space}${product.name}
`,
    body: `
Hello${space}${authore.name},
${newLine}
${newLine}
I${space}visited${space}your${space}website${space}at${space}${authore.website}
${newLine}
I${space}want${space}to${space}perchage${space}${product.name}
${newLine}
Price:${space}${product.price}
${newLine}
Date:${space}${day}-${month}-${year}
${newLine}
I'm${space}interested${space}in${space}your${space}services.
${newLine}
Could${space}you${space}please${space}contact${space}me?
${newLine}
${newLine}
Budget:${space}[Enter here]
${newLine}
Whatsapp:${space}+[country code]${space}[Enter number here]
${newLine}
Thank${space}you.
`,
};

let messageLink = {
    gmail: `mailto:${authore.mail}?subject=${message.subject}&body=${message.body}`,
    whatsapp: `https://wa.me/${authore.call}?text=${message.subject}${newLine}${newLine}${message.body}`,
    messenger: `https://m.me/${authore.website}?text=${message.subject}${newLine}${newLine}${message.body}`,
};




// ###################
// \\\ variables \\\
// ###################

const html = document.documentElement;
const styleSheet = getComputedStyle(html);

// ###################
// \\\ methods | functions \\\
// ###################


// #######################
// \\\ animation \\\\
// #######################


// #######################
// \\\ init | call \\\\
// #######################


// element ? animate(element);
// Check if the preference is set to 'reduce'
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
reducedMotion ? html.classList.add('noMotion') : null;



// ternary operator example!
// let message = true ? 'sefa' : 'error';
// function example!
// let sayHello = name => console.log(`hello ${name}`);
// let add = (num1, num2) => console.log(num1 + num2);
// example only!
// sayHello('jony');
// add(4, 6);
// += scrollY




scrollerScroll();

function heroScrollY() {
    hro?.scrollTo({
   top: 0,
   behavior: 'smooth',
    });
}

her?.addEventListener('scroll', () => {
    scrollTop();
    scrollerScroll();
    heroImgTrans();
    fadeInTop();
});

window.addEventListener('resize', () => {
    heroScrollY();

    heroImgTrans();
    fadeInTop();
    textRevelOnscroll();
});




function heroImgTrans() {
    let sliderPhotos = scroller.querySelectorAll('.slider-container .slide img');

    sliderPhotos?.forEach(img => {
   imgPercentage = (scroller.scrollLeft * 100) / window.innerWidth;
   newImgPercentage = Math.min(Math.max(0, imgPercentage), 100);

   img.animate(
  {
 objectPosition: `${newImgPercentage}%`,
  },
  { duration: 1200, fill: 'forwards' }
   );
    });
}
heroImgTrans();





// requestAnimationFrame()

// scroll base video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('my-scrubbable-video');
    const scrollSection = document.getElementById('video-scroll-section');

    video.onloadedmetadata = function () {
   video.currentTime = 0;
   window.addEventListener('scroll', () => {
  requestAnimationFrame(updateVideoFrame);
   });
    };

    function updateVideoFrame() {
   const rect = scrollSection.getBoundingClientRect();
   const totalScrollHeight = scrollSection.clientHeight - window.innerHeight;
   let scrollProgress = -rect.top;
   scrollProgress = Math.max(0, Math.min(scrollProgress, totalScrollHeight));
   const scrollPercentage = scrollProgress / totalScrollHeight;
   const videoTime = scrollPercentage * video.duration;
   video.currentTime = videoTime;
    }
});




// scroll up? down?
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
   console.log('Page scroll DOWN');
    } else if (currentScrollY < lastScrollY) {
   console.log('Page scroll UP');
    }

    // Update the last position for the next event
    lastScrollY = currentScrollY;
});



// paragraph to word with space
// apend or add class to arry
const paragraph = 'This is a simple paragraph to convert into a word array.';
const wordArray = paragraph.split(' ');
const container = document.getElementById('paragraph-container');
wordArray.forEach(word => {
    if (word) {
   const wordElement = document.createElement('span');

   wordElement.textContent = word;
   wordElement.classList.add('textLoading');

   container.appendChild(wordElement);

   container.appendChild(document.createTextNode('\u00A0')); // \u00A0 is a non-breaking space
    }
});
console.log("All words have been inserted into the DOM and given the 'textLoading' class.");



// paragraph to letter with space
const paragraph2 = 'Hello world! This is a test paragraph.';
const letterArray = paragraph2?.split('');
console.log(letterArray);
// Output:
// [
// 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l',
// 'd', '!', ' ', 'T', 'h', 'i', 's', ' ', 'i', 's',
// ' ', 'a', ' ', 't', 'e', 's', 't', ' ', 'p', 'a',
// 'r', 'a', 'g', 'r', 'a', 'p', 'h', '.'
// ]

console.log(`Length of paragraph: ${paragraph2.length}`); // 38
console.log(`Length of array: ${letterArray.length}`); // 38



// get percentage
const getPercentage = (part = 30, total = 100) => {
    if (total !=== 0) {(part / total) * 100;}
}



// get it's distance from screen edge
function getDistanceFromScreenEdges(element) {
    if (!element) {
   return null;
    }

    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const distances = {
   fromTop: rect.top,
   fromLeft: rect.left,
   fromBottom: viewportHeight - rect.bottom,
   fromRight: viewportWidth - rect.right,
    };

    return distances;
}
// --- Example Usage ---
const myElement = document.getElementById('myElementId');
const elementDistances = getDistanceFromScreenEdges(myElement);



// pragraph to word arry with space
const staggerParagraph = (selector, stagger = 0.1, offset = 0.3) => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(el => {
   const textArray = el.textContent.split(/(\s+)/);
   el.innerHTML = ''; // Clear original text

   textArray.forEach((item, index) => {
  const span = document.createElement('span');
  span.textContent = item;

  // const delay = index * stagger + offset;

  span.style.display = 'inline-block';
  span.style.whiteSpace = 'pre'; // Preserves the width of spaces
  // span.style.transitionDelay = `${delay}s`;
  // span.style.opacity = '0'; // Initial state
  el.appendChild(span);
   });

   // Trigger the animation in the next frame
   requestAnimationFrame(() => {
  el.classList.add('is-active');
   });
    });
};

// Usage:
staggerParagraph('.hero-text', 0.05, 0.3);
