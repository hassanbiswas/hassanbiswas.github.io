

// window scroll or change run code
function handleWindowChange() {
    console.log("Window scrolled or resized!");
      // Add your desired code here to run on scroll or resize
        // For example, you could update UI elements, perform calculations, etc.
          // console.log("Current scroll position:", window.scrollY);
            // console.log("Current window width:", window.innerWidth);
}

// Attach event listeners
window.addEventListener('scroll', handleWindowChange);
window.addEventListener('resize', handleWindowChange);


// color from image
function getPixelColor(imageUrl, x, y) {
    return new Promise((resolve, reject) => {
          const img = new Image();
              img.crossOrigin = "Anonymous"; // Essential for loading images from different origins
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
reject("Error getting pixel data. Ensure image is loaded and not subject to cross-origin restrictions.");
}
                  };
                      img.onerror = () => reject("Error loading image.");
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
    


// get color value of root element
// 1. Get the root element
const root = document.documentElement;

// 2. Get the computed style of the root element
const computedStyle = getComputedStyle(root);

// 3. Get the value of a specific CSS custom property (e.g., --primary-color)
const primaryColor = computedStyle.getPropertyValue('--primary-color');

// You can then use the retrieved value
console.log('The value of --primary-color is:', primaryColor.trim()); // .trim() to remove potential leading/trailing spaces


// get property value of an element
const myElement = document.getElementById('my-element-id'); 

if (myElement) {
    // 2. Get the computed style object for the element
    const computedStyle = window.getComputedStyle(myElement);

    // 3. Retrieve the value of a specific CSS property
    const backgroundColor = computedStyle.getPropertyValue('background-color');
    const fontSize = computedStyle.getPropertyValue('font-size');
    const displayProperty = computedStyle.getPropertyValue('display');

    console.log(`Background Color: ${backgroundColor}`);
    console.log(`Font Size: ${fontSize}`);
    console.log(`Display Property: ${displayProperty}`);



// run code window resize
// Define the function to be executed on window resize
function handleWindowResize() {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
  console.log(`Window resized! New dimensions: ${newWidth}x${newHeight}`);
  // Place your desired code here to run every time the window is resized
}

// Attach the event listener to the window object
window.addEventListener('resize', handleWindowResize);


// track element position on scroll
// Get a reference to the element you want to track
const myElement = document.getElementById('myElement'); 

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the element's position relative to the viewport
  const rect = myElement.getBoundingClientRect();
  
  // The 'top' property of the rect object gives the distance from the top of the viewport
  const topPosition = rect.top;

  console.log(`Element's top position relative to viewport: ${topPosition}px`);

  // You can perform other actions here based on the element's position
  // For example, trigger an animation when it enters the viewport
  // if (topPosition < window.innerHeight && topPosition > -rect.height) {
  //   // Element is visible in the viewport
  // }
});




// elemnt center or not
function isElementCentered(element) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  // Calculate the vertical center of the element
  const elementCenterY = rect.top + rect.height / 2;

  // Calculate the vertical center of the viewport
  const viewportCenterY = viewportHeight / 2;

  // Define a tolerance for "centered" (e.g., within 50 pixels of the center)
  const tolerance = 50; 

  return Math.abs(elementCenterY - viewportCenterY) < tolerance;
}

const myElement = document.getElementById('myElementId'); // Replace with your element's ID

window.addEventListener('scroll', () => {
  if (isElementCentered(myElement)) {
    console.log('Element is centered!');
    // Add or remove a class, trigger an animation, etc.
    myElement.classList.add('centered');
  } else {
    console.log('Element is not centered.');
    myElement.classList.remove('centered');
  }
});




// unknown
const wordsAndPunctuation = paragraph.split(/\b(\S+)\b/);


// paragraph to array
function paragraphToArray(paragraph) {
  if (typeof paragraph !== 'string') {
    throw new Error("Input must be a string.");
  }

  const charArray = Array.from(paragraph);
  return charArray;
}


// Example usage:
const myParagraph = "This is a sample paragraph. It includes punctuation, like commas, periods, and even exclamation marks!";
const charArray = paragraphToArray(myParagraph);

console.log(charArray);

// To display it nicely (optional):
console.log(charArray.join("")); // This will print the original paragraph back.

// Or to see each character and its index:
charArray.forEach((char, index) => {
  console.log(`Character at index ${index}: "${char}"`);
});

// Handling null or empty input (optional enhancement):

function paragraphToArrayEnhanced(paragraph) {
  if (paragraph === null || paragraph === undefined || paragraph.length === 0) {
    return []; // Or you could throw an error, return a default value, etc.
  }
  if (typeof paragraph !== 'string') {
    throw new Error("Input must be a string.");
  }
  return Array.from(paragraph);
}

const emptyStringArray = paragraphToArrayEnhanced("");
console.log("Empty String Array:", emptyStringArray); // Output: []

const nullArray = paragraphToArrayEnhanced(null);
console.log("Null Array:", nullArray); // Output: []

const undefinedArray = paragraphToArrayEnhanced(undefined);
console.log("Undefined Array:", undefinedArray); // Output: []

const anotherParagraph = "Another example with some special characters like @#$%^&*()_+=-`~[]\{}|;':\",./<>?";
const anotherCharArray = paragraphToArrayEnhanced(anotherParagraph);
console.log(anotherCharArray);




// words to array
function paragraphToArray(paragraph) {
    const wordsArray = paragraph.split(' ');
    return wordsArray;
}

// Example paragraph
const paragraph = "Due to the complexity and security considerations, it's recommended to consult the Google Drive API documentation and use a secure environment for development and deployment. If you need further assistance or have any questions, feel free to ask!";
const wordsArray = paragraphToArray(paragraph);

console.log(wordsArray);




// get parent element
const childElement = document.querySelector('.child-element'); // Example using querySelector

// Get the parent element using parentElement
if (childElement) { // Check if the childElement was found
  const parentElement = childElement.parentElement;
}


// scroll based translate
document.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementById('box');
    let zPosition = 0;
    const maxZPosition = 500;  // Maximum Z position
    const speed = 2;           // Speed of the animation

    function animate() {
        if (zPosition < maxZPosition) {
            zPosition += speed;
            box.style.transform = `translateZ(${zPosition}px)`;
            requestAnimationFrame(animate);
        }
    }

    animate();
});



// half of scroll
document.addEventListener('DOMContentLoaded', (event) => {
    const child = document.getElementById('child');
    const parent = document.getElementById('parent');

    child.addEventListener('scroll', () => {
        parent.scrollTop = child.scrollTop / 2;
    });
});



// get percenage
function calculatePercentage(num1, num2) {
  if (num2 === 0) {
    return "Cannot calculate percentage with a zero denominator.";
  }
  return (num1 / num2) * 100;
}

let result = calculatePercentage(30, 75); // 30 is 40% of 75
console.log(result); // Output: 40



// sender mail address
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Sender Email</title>
    <script>
        function getEmailAddress() {
            var email = document.getElementById('emailInput').value;
            console.log("Sender's Email Address: " + email);
            document.getElementById('emailOutput').innerText = "Sender's Email Address: " + email;
        }
    </script>
</head>
<body>
    <form onsubmit="getEmailAddress(); return false;">
        <label for="emailInput">Enter your email address:</label>
        <input type="email" id="emailInput" required>
        <button type="submit">Submit</button>
    </form>
    <p id="emailOutput"></p>
</body>
</html>




// auto product buing mail
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Button</title>
    <script>
        function sendEmail() {
            var productName = "Sample Product";  // Replace with actual product name
            var productCode = "123456";  // Replace with actual product code
            var price = "$99.99";  // Replace with actual price
            var currentDateTime = new Date().toLocaleString();
            var senderEmail = "sender@example.com";  // Replace with actual sender email
            var paymentMethod = "Credit Card";  // Replace with actual payment method
            var shippingMethod = "Express";  // Replace with actual shipping method

            var email = "mdezazulhassanbiswas@gmail.com";
            var subject = "Buy Product";
            var body = "I agree to buy Product Name: " + productName + "<br> Code: " + productCode + "<br> Price: " + price + "<br> Date: " + currentDateTime + "<br> E-Mail: " + senderEmail + "<br> Payment Method: " + paymentMethod + "<br> Shiping Method: " + shippingMethod;

            var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body.replace(/<br>/g, "\n"));

            window.location.href = mailtoLink;
        }
    </script>
</head>
<body>
    <button onclick="sendEmail()">Send Email</button>
</body>
</html>

#00FF7F
hsl(239, 60%, 50%)

// font awsome
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

// window theme mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


// current date time
// Create a new Date object representing the current date and time
const now = new Date();

// Get the current year (four digits)
const year = now.getFullYear();

// Get the current month (0-indexed, so add 1 for the actual month number)
const month = now.getMonth() + 1; // January is 0, December is 11

// Get the current day of the month (1-31)
const date = now.getDate();

// You can also get a formatted date string directly
console.log(`Full Date String: ${now.toDateString()}`);
console.log(`Full Time String: ${now.toTimeString()}`);
console.log(`Full Date and Time String: ${now.toLocaleString()}`);


// font
https://fonts.google.com/

// icons 
https://icons.getbootstrap.com/#icons
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">



// translate
<div id="google_translate_element"></div>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>


imgage > squoosh.app

Google search Console
Google analytics
Google tag manager


// screen center document


function isVerticallyCentered(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const middleOfViewport = viewportHeight / 2;
    return Math.abs(rect.top + rect.height / 2 - middleOfViewport) < 1; // Allow small tolerance
}   


or


function isHorizontallyCentered(element) {
    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const middleOfViewport = viewportWidth / 2;
    return Math.abs(rect.left + rect.width / 2 - middleOfViewport) < 1; // Allow small tolerance
}   



animation


window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('div'); // Replace with your selector
    elements.forEach(element => {
        if (isVerticallyCentered(element)) {
            console.log('Element is vertically centered');
        }
        if (isHorizontallyCentered(element)) {
            console.log('Element is horizontally centered');
        }
    });
});   




master Alternatively, you can use document.elementFromPoint() to get the element directly under the center of the screen:


function getCenterElement() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    return document.elementFromPoint(centerX, centerY);
}   


https://github.com/mdezazulhassanbiswas/mdezazulhassanbiswas.github.io/releases/download/%E2%88%9E/Web.Developer.Hassan.Biswas.apk



function isElementCentered(childElement, parentElement) {
    const childRect = childElement.getBoundingClientRect();
    const parentRect = parentElement.getBoundingClientRect();

    const childCenterX = childRect.left + (childRect.width / 2);
    const parentCenterX = parentRect.left + (parentRect.width / 2);
    const childCenterY = childRect.top + (childRect.height / 2);
    const parentCenterY = parentRect.top + (parentRect.height / 2);

    const horizontalCentered = Math.abs(childCenterX - parentCenterX) < 1; // Allow small tolerance
    const verticalCentered = Math.abs(childCenterY - parentCenterY) < 1; // Allow small tolerance

    return { horizontal: horizontalCentered, vertical: verticalCentered };
}

// Usage example
const child = document.querySelector('.child-element');
const parent = document.querySelector('.parent-element');

window.addEventListener('scroll', () => {
    const centered = isElementCentered(child, parent);
    console.log('Horizontally centered:', centered.horizontal);
    console.log('Vertically centered:', centered.vertical);
});   


const image = document.querySelector('.image'); // Ensure this selector targets your 100px image
const targetWidth = window.innerWidth; // Target width is the full viewport width
const initialWidth = 100; // Initial width of the image
const maxTranslateZ = 500; // Maximum Z-axis translation (adjust as needed)

function animate() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const imageTop = image.getBoundingClientRect().top;
  const imageBottom = image.getBoundingClientRect().bottom;

  // Check if the image is in the viewport
  if (imageTop < viewportHeight && imageBottom > 0) {
    // Calculate progress from 0 to 1 based on scroll position
    const progress = Math.min(1, (scrollY - imageTop + viewportHeight) / (imageBottom - imageTop + viewportHeight));

    // Calculate current width and translateZ
    const currentWidth = initialWidth + (targetWidth - initialWidth) * progress;
    const currentTranslateZ = maxTranslateZ * progress;

    // Apply transforms
    image.style.width = `${currentWidth}px`;
    image.style.transform = `translateZ(${currentTranslateZ}px)`;

    // Stop animation once width reaches target
    if (currentWidth >= targetWidth) {
      image.style.width = `${targetWidth}px`;
      image.style.transform = `translateZ(${maxTranslateZ}px)`;
      return;
    }
  }

  requestAnimationFrame(animate);
}

// Start animation
animate();   

