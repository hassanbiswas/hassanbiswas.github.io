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

// ###################
// \\\ methods | functions \\\
// ###################

// #######################
// \\\ animation \\\\
// #######################

// #######################
// \\\ init | call \\\\
// #######################

// ternary operator example!
// let message = true ? 'sefa' : 'error';
// function example!
// let sayHello = name => console.log(`hello ${name}`);
// let add = (num1, num2) => console.log(num1 + num2);
// example only!
// sayHello('jony');
// add(4, 6);
// += scrollY

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

// color from image
function getPixelColor(imageUrl, x, y) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Essential for loading images from different origins
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);

            try {
                const imageData = ctx.getImageData(x, y, 1, 1).data;
                const r = imageData[0];
                const g = imageData[1];
                const b = imageData[2];

                // Convert RGB to Hex
                const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
                resolve(hexColor);
            } catch (error) {
                reject(
                    'Error getting pixel data. Ensure image is loaded and not subject to cross-origin restrictions.'
                );
            }
        };
        img.onerror = () => reject('Error loading image.');
        img.src = imageUrl;
    });
}

// Example usage:
const imageUrl = 'https://via.placeholder.com/150'; // Replace with your image URL
const targetX = 0; // X-coordinate of the pixel
const targetY = 0; // Y-coordinate of the pixel

getPixelColor(imageUrl, targetX, targetY)
    .then(color => {
        console.log(`Color code at (${targetX}, ${targetY}): ${color}`);
    })
    .catch(error => {
        console.error(error);
    });

const root = document.documentElement;
const computedStyle = getComputedStyle(root);
const brandPrimary = computedStyle.getPropertyValue('--primary-color');
console.log('The value of --primary-color is:', brandPrimary.trim()); // .trim() to remove potential leading/trailing spaces

// get parent element
const childElement = document.querySelector('.child-element'); // Example using querySelector
// Get the parent element using parentElement
if (childElement) {
    // Check if the childElement was found
    const parentElement = childElement.parentElement;
}

// half of scroll
document.addEventListener('DOMContentLoaded', () => {
    const child = document.getElementById('child');
    const parent = document.getElementById('parent');

    if (child && parent) {
        parent.addEventListener('scroll', () => {
            child.scrollTop = parent.scrollTop / 2;
        });
    }
});

// auto product buying mail (example HTML as string)
const autoProductMailHtml = `
        var mailtoLink = '';
        window.location.href = mailtoLink;
`;

// You can also get a formatted date string directly
console.log(`Full Date String: ${now.toDateString()}`);
console.log(`Full Time String: ${now.toTimeString()}`);

// notes
const notes = `
    imgage > squoosh.app
    Google search Console
    Google analytics
    Google tag manager
`;

// master: Alternatively, you can use document.elementFromPoint() to get the element directly under the center of the screen
function getCenterElement() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    return document.elementFromPoint(centerX, centerY);
}
