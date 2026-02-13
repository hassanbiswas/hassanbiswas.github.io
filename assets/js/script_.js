


    // <script type="text/javascript">
      // loading animation
      let loader = document.querySelector('#loader'),
        sayHello = document.querySelector('#say-hello'),
        hello = [
          'Hello', // english
          'هتاف للترحيب', // arabic
          'হ্যালো', // bangla
          'हेलो', // hindi
          '你好', // chinese
          '안녕하세요', // korean
          'こんにちは', // japanese
          'Bonjour'; // french
        ];
        // until document loaded
        let i = 0;
        let greeting = setInterval(() => {
          sayHello.innerText = hello[i];
          i++;
          i == hello.lenth ? i = 0;    

          // document.addEventListener('DOMContentLoaded', () => {
            // i == hello.lenth ? {
              // clearInterval(greeting); 
              // loader.style = 'display: none;';
            // }
          // });
        }, 1000);

      document.addEventListener('DOMContentLoaded', () => {
        i == hello.lenth ? {
          clearInterval(greeting); 
          loader.style = 'display: none;';
        }
      });
    // </script>


    // <script type="text/javascript">
      // dates functions
      const now = new Date(),
        year = now.getFullYear(),
        month = now.getMonth() + 1, // january = 0
        day = now.getDate();

      let prevYears = document.querySelectorAll('.prev-year'),
        years= document.querySelectorAll('.year'),
        nextYears = document.querySelectorAll('.next-year'),
        months = document.querySelectorAll('.month'),
        days = document.querySelectorAll('.day');

      prevYears?.forEach(el => {
        el.innerText = year - 1;
      });
      years?.forEach(el => {
        el.innerText = year;
      });
      nextYears?.forEach(el => {
        el.innerText = year + 1;
      });
      months?.forEach(el => {
        el.innerText = month;
      });
      days?.forEach(el => {
        el.innerText = day;
      });
    // </script>

    // <script type="text/javascript">
      // navigation
      const header = document.querySelector("#header");
      let nav = document.querySelector('#nav');
      let navLinks = document.querySelectorAll('#nav .list-item');
      
      const  notch = document.querySelector('.notch'),
        toast = document.querySelector('.toast');

      // navigation 
      navLinks?.forEach(link => {
        let activeBg = navList.querySelector(".active-bg");

        link.addEventListener('click', (e) => {
          link.classList.remove('active');
          e.target.classList.add('active');
          let react = e.target.getBoundingClientRect(),
            width = react.clientWidth,
            left = react.clientLeft;

          // activeBg?.style = `width: ${width}px; left: ${left}px;`;
        });
      });
    // </script>


    // <script type="text/javascript">
      // media content

      let height = window.innerHeight,
        width = window.innerWidth,
        aspectRatio = (width >= height) ? `16:9` : `9:16`;

      let imageContainers = document.querySelectorAll('*:has(img, picture, video, iframe)');
      let mediaContents = document.querySelectorAll('img, picture, video, iframe');

      let mediaPhotos = document.querySelectorAll('img, picture');
      let mediaVideos = document.querySelectorAll('video');
      let mediaIframes = document.querySelectorAll('iframe');
      let mediaSvgs = document.querySelectorAll('svg');

      // photo
      mediaPhotos?.forEach(media => {
        this.setAttribute('loading', 'lazy');
        this.setAttribute('draggable', 'false');
        media.style.aspectRatio = aspectRatio;
      });
      // video
      mediaVideos?.forEach(media => {
        this.setAttribute('loading', 'lazy');
        this.setAttribute('draggable', 'false');
        this.setAttribute('muted');
        this.setAttribute('loop');
        this.setAttribute('autoplay');
        this.setAttribute('playsinline');
        media.style.aspectRatio = aspectRatio;
      });
      // iframe
      mediaIframes?.forEach(media => {
        this.setAttribute('loading', 'lazy');
        this.setAttribute('draggable', 'false');
        media.style.aspectRatio = aspectRatio;
      });
      // svg
      mediaSvgs?.forEach(media => {
        this.setAttribute('loading', 'lazy');
        this.setAttribute('draggable', 'false');
        media.style.aspectRatio = aspectRatio;
      });

      // color from image
      imageContainers?.forEach(container => {
        let image = container.querySelector('img'),
          width = image.innerWidth,
          height = image.innerHeight,
          canvas = container.createElement('canvas'),
          ctx = canvas.getContext('2d');

        canvas.setAttribute('inert');
        canvas.setAttribute('aria-hidden', 'true');

        canvas.innerWidth = width;
        canvas.innerHeight = height;
        ctx.drawImage(image, 0, 0, width, height); // img

        let imageData = ctx.getImageData(x, y, 1, 1).data,
          r = imageData[0],
          g = imageData[1],
          b = imageData[2];

        // convrt rgb to hex 
        let imageColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
        container.style.setProperty(`--primary-50`, imageColor);
      });
    // </script>
    

    // <script type="text/javascript">
      // section
      class TSection extends HTMLElement {
        connectedCallback() {
          const selector = this.getAttribute("selector");
          const heading = this.getAttribute("heading");
          const details = this.getAttribute("details");
          const link = this.getAttribute("link");
          const linkText = this.getAttribute("linkText");
          const img = this.getAttribute("img");
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
        };
      };

      customElements.define("t-section", TSection);
    // </script>


    // <script type="text/javascript">
      let startValue = 0,
        endValue = 100,
        loaderColor = '#fefefe';

      let progress = setInterval(() => {
        startValue++;
        backGround?.animate({
          background : `conic-gradient(var(${loaderColor}) ${startValue * 3.6}deg, transparent 0deg)`
        }, {duration: 'auto', fill: 'forwards', delay: 0})
        (startValue == endValue)? clearInterval(progress) && body.removeChild(loader)       
      }, 1000)
    // </script>
    

    // <script type="text/javascript">
      // JavaScripts functions to get anyones YouTube channel logo/profile-photo
      /**
      *  * Fetches the high-resolution profile image of a YouTube channel.
      * @param {string} channelUrl - The full YouTube channel URL.
      * @param {string} apiKey - Your Google Cloud API Key.
      * @returns {Promise<string>} - The URL of the profile photo.
      */
      async function getYouTubeLogo(channelUrl, apiKey) {
        try {
          // 1. Extract the Handle or ID from the URL
          // Regex handles: youtube.com/@username, youtube.com/channel/ID, etc.
          const match = channelUrl.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:channel\/|@|c\/|user\/)?([^\/\?]+)/);
                                                 
          if (!match) throw new Error("Invalid YouTube URL format.");
          const identifier = match[1];

          // 2. Determine if it's a Channel ID or a Handle/Username
          let queryParam = '';
          if (identifier.startsWith('UC')) {
            queryParam = `id=${identifier}`;
          } else {
            // For handles (e.g., @HassanBiswas), use forHandle or forUsername
            // Note: handles often require searching or using 'forHandle' in newer API versions
            queryParam = `forHandle=${identifier.replace('@', '')}`;
          }

          // 3. Call the YouTube API
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&${queryParam}&key=${apiKey}`
          );
                                                                                                                                                                                                     
          const data = await response.json();

          if (!data.items || data.items.length === 0) {
            throw new Error("Channel not found.");
          }

          // 4. Return the high-resolution thumbnail
          return data.items[0].snippet.thumbnails.high.url;
              
        } catch (error) {
          console.error("Error fetching YouTube logo:", error);
          return null;
        }
      }

      // Example Usage:
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
      const API_KEY = 'AIzaSyDmANPgkfuP5zlqESHI1Hhy81G0UWdRgJA';
    // sjkkpukak-jskl-sljdkd = kwkkskdlz;wjopw;msld;e;wmskdkdllde;
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
     // ey-api-el = ljaí8i1m9pkjdk97il,mw091kmw;[jma;'''k];
      const url = 'https://www.youtube.com/@Google';

      getYouTubeLogo(url, API_KEY).then(photoUrl => {
        if (photoUrl) {
          console.log("Channel Logo URL:", photoUrl);
        }
      });
    // </script>
    

    // <script type="text/javascript">
      // testimonials

      let quote = document.querySelector('.quote'),
        person = document.querySelector('.person'),
        quotesButtons = document.querySelectorAll('.quotes-button'),
        quotes = [
          {
            quote: `thank's a lot ${authore.name}`,
            person: `Mariam`
          },
          {
            quote: `you are great developer.`,
            person: `Shamin`
          },
          {
            quote: `hey! this is a great design.`,
            person: `Tanveer`
          }
        ];

      // quotes
      quotesButtons?.forEach(button => {
        let random = Math.flore(Math.random() * quotes.lenth);
                                                                                                                                                                                                                                                                                                                                    
        button.addEventListener('click', () => {
          quote?.innerText = quotes[random].quote;
          person?.innerText = quotes[random].person
        });
      });
    // </script>
    

    // <script type="text/javascript">
      // authore & contact form & order/sell & faqs

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
          `NFC`
        ],
        mail: `${this.website}+${this.mailType[0]}@gmail.com`,
        call: `8801602873384`
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
        `
      };

      let messageLink = {
        gmail: `mailto:${authore.mail}?subject=${message.subject}&body=${message.body}`,
        whatsapp: `https://wa.me/${authore.call}?text=${message.subject}${newLine}${newLine}${message.body}`,
        messenger: `https://m.me/${authore.website}?text=${message.subject}${newLine}${newLine}${message.body}`
      };

      // form input + btn

      // question input + cta
      let input = document.querySelector('.visitor-question'),
        ctaBtn = document.querySelector('.visitor-question-btn');
                                                                                                                                  
      input?.addEventListener('keyUp', () => {
        let question = input.value,
          ask = `https://m.me/${authore.website}?text=FAQ's${newLine}Question:${space}${question}${space}${newLine}`;
        ctaBtn.setAttribute('href', `${ask}`);
      });
    // </script>


    // <script type="text/javascript">
      //  get favicon ex. google.com 50
      let getFavicon = (domain, size) => `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
    // </script>

    // <script type="text/javascript">
      // scroll to top
      function scrollTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      };
    // </script>
    
    
    // <script type="text/javascript">

      // ###################
      // variables
      // ###################

      // js variable like css

      let animation = {
        delay: 0,
        fillMode: ,
        duration: '400ms',
        direction: ,
        timingFunction: 'linear',
        count: 1;
      };

      const html = document.documentElement,
        head = document.head,
        body = document.body;

      // use rem/em/% value [px/10]rem
      // console.log(document.documentElement);
      // console.dir(document);

      // function calling & error handling 
      // element?.Method();

      // ###################
      // variables
      // ###################


      // push property inside 


      // Get the computed style of the root element
      const styleSheet = getComputedStyle(html);


      // ###################
      // methods & functions
      // ###################

      let react = el => el.getBoundingClientReact;
      // let height = react(hero).height;


      // window scroll or change run code
      function handleWindowChange() {
        // console.log("Window scrolled or resized!");
        // Add your desired code here to run on scroll or resize
        // For example, you could update UI elements, perform calculations, etc.
        // console.log("Current scroll position:", window.scrollY);
        // console.log("Current window width:", window.innerWidth);
      };


      // #######################
      // \\\\\ animation \\\\\\\
      // #######################

      // element ? animate(element);
      // Check if the preference is set to 'reduce'
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      !reducedMotion ? html.classList.add('animate');
      

      // ternary operator example!
      // let message = true ? 'sefa' : 'error';

      // function example!
      // let sayHello = name => console.log(`hello ${name}`);
      // let add = (num1, num2) => console.log(num1 + num2);
      // nums.forEach(num => this.total += num);


      // ###################
      // inits & event listners
      // ###################


      // function functionName() {}
      // functionName()



      document.addEventListener('DOMContentLoaded', handleWindowChange);
      window.addEventListener('scroll', handleWindowChange);
      window.addEventListener('resize', handleWindowChange);

      // example only!
      // sayHello('jony');
      // add(4, 6);
      // += scrollY

      headerNavigation();

      let hero = document.querySelector('#hero'),

      function scrollerScroll() {
        let screenHeight = window.innerHeight,
          screenWidth = window.innerWidth,
          scrollerScrollWidth = scroller.scrollWidth,
          scrollerRect = scroller.getBoundingClientRect();

        scroller?.scrollLeft = hero.scrollTop
        // for sticky ====
        // scroller.style.top = `${window.scrollY - scrollerRect.top}px`
      };

      scrollerScroll();

      function heroScrollY() {
        hro?.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      };
        
      her?.addEventListener('scroll', () => {
        scrollTop()
        scrollerScroll()
        heroImgTrans()
        fadeInTop()
      });

      window.addEventListener('resize', () => {
        scrollTop()
        heroScrollY()

        headerNavigation()
        scrollerScroll()
        heroImgTrans()
        fadeInTop()
        textRevelOnscroll()
        askQuestion()
      });

      window.addEventListener('load', () => {
        scrollTop()
        heroScrollY()
      });

      window.addEventListener('DOMContentLoaded', () => {
        scrollTop()
        heroScrollY()
      });

      function heroImgTrans(){
        let sliderPhotos = scroller.querySelectorAll('.slider-container .slide img');
                                                    
        sliderPhotos?.forEach(img => {
          imgPercentage = scroller.scrollLeft * 100 / window.innerWidth;
          newImgPercentage = Math.min(Math.max(0, imgPercentage), 100)

          img.animate({
            objectPosition: `${newImgPercentage}%`
          }, {duration: 1200, fill: 'forwards'})
        })
      };

      heroImgTrans() ;
    // </script>

    
    // <script>
      function fadeInTop(){
        let fadeInTop = document.querySelectorAll('.fade-in-top')

        fadeInTop?.forEach(el => {
          let rect = el.getBoundingClientRect(),
            revelPosition = (rect.width / 2) + window.innerWidth,
            revelPosition2 = (rect.width / 2);
          (rect.right > revelPosition || revelPosition2 > rect.right) ? el.style = `transform: translateY(-100%); opacity: 0;` : el.style = `transform: translateY(0); opacity: 1;`
        });
      };

      function textRevelOnscroll() {
        let textRevelOnscroll = document.querySelectorAll('.text-revel-onscroll')

        textRevelOnscroll?.forEach(revel => {
          let rect = revel.getBoundingClientRect(),

            revelPosition = window.innerHeight - rect.top + (rect.height / 2),
            percentage = revelPosition / (rect.top) * 100;
            revelPercentage = Math.min(Math.max(0, percentage), 100)

          revel.animate({
            backgroundSize: `${revelPercentage}% 100%`
          }, {duration: 1200, fill: 'forwards'})
        });
      };

      window.addEventListener('scroll', () => {
        fadeInTop()
        textRevelOnscroll()
      });
    // </script>

    // <script>
      window.addEventListener('closed', () => {
        // clear cache storage
        localStorage().clear()
        sessionStorage().clear()
      })
    // </script>

    
    // <script>
      // open() new bKash window
      // requestAnimationFrame()


      // scroll base video
      document.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('my-scrubbable-video');
        const scrollSection = document.getElementById('video-scroll-section');

        // 1. Wait for video metadata to load (duration is needed!)
        video.onloadedmetadata = function() {
          // Set the initial time to 0
          video.currentTime = 0; 

          // Use a scroll event listener to update the video frame
          window.addEventListener('scroll', () => {
            requestAnimationFrame(updateVideoFrame);
          });
        };

        function updateVideoFrame() {

          // Get the bounding box of the scroll section relative to the viewport
          const rect = scrollSection.getBoundingClientRect();

          // Calculate the total scroll range (Total Section Height - Viewport Height)
          // This is the distance the user needs to scroll to go from the start 
          // of the section to the end of the section (when the video is sticky).
          const totalScrollHeight = scrollSection.clientHeight - window.innerHeight;

          // Calculate the current scroll distance within the active section
          // When rect.top is 0, the section is at the top of the viewport (start of scroll).
          // The scroll progress goes from 0 to totalScrollHeight.
          let scrollProgress = -rect.top; 

          // 2. Clamp the scroll progress between 0 and totalScrollHeight
          // The scroll should not affect the video until the section is visible (progress > 0)
          scrollProgress = Math.max(0,Math.min(scrollProgress, totalScrollHeight));

          // 3. Map the clamped scroll progress (0 to totalScrollHeight) 
          // to a percentage (0 to 1)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          const scrollPercentage = scrollProgress / totalScrollHeight;

          // 4. Map the percentage (0 to 1) to the video duration (0 to video.duration)
          const videoTime = scrollPercentage * video.duration;

          // 5. Update the video's current time

          video.currentTime = videoTime;
        }
      });
    // </script>

    
    // <script>
      // scroll up? down?
      let lastScrollY = 0;

      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          console.log("Page scroll DOWN");
        } else if (currentScrollY < lastScrollY) {
          console.log("Page scroll UP");
        }

        // Update the last position for the next event
        lastScrollY = currentScrollY;
      });
    // </script>

    
    // <script>
      // paragraph to word with space 
      // apend or add class to arry                                                    
      // 1. Define the paragraph string (from your prompt)
      const paragraph = "This is a simple paragraph to convert into a word array.";

      // 2. Use the split(' ') method with a space (' ') as the delimiter (from your prompt)
      const wordArray = paragraph.split(' ');

      // 3. Get the container element
      const container = document.getElementById('paragraph-container');

      // --- Core Solution Steps ---

      // 4. Create and insert a <span> element for each word
      wordArray.forEach(word => {
        // Skip empty strings that might result from multiple spaces if needed, but not strictly necessary here
        if (word) {
          const wordElement = document.createElement('span');
                                                                                                                                                                                                                                                                                          
          // Set the text content of the span to the word
          wordElement.textContent = word;
          // Add the required class
          wordElement.classList.add('textLoading');

          // Append the newly created and styled element to the container
          container.appendChild(wordElement);

          // Add a non-breaking space after the word element for visual separation
          container.appendChild(document.createTextNode('\u00A0')); // \u00A0 is a non-breaking space
        }
      });
      console.log("All words have been inserted into the DOM and given the 'textLoading' class.");
    // </script>

    
    // <script>
      // paragraph to letter with space
      // 1. Define the paragraph string
      const paragraph2 = "Hello world! This is a test paragraph.";

      // 2. Use the split() method with an empty string ("")
      // The empty string separator splits the string between every character.
      const letterArray = paragraph2?.split("");

      // 3. Log the results
      console.log(letterArray);
      // Output: 
      // [
      //   'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 
      //   'd', '!', ' ', 'T', 'h', 'i', 's', ' ', 'i', 's', 
      //   ' ', 'a', ' ', 't', 'e', 's', 't', ' ', 'p', 'a', 
      //   'r', 'a', 'g', 'r', 'a', 'p', 'h', '.'
      // ]

      // Note: The space characters (' ') are included as individual elements.
      console.log(`Length of paragraph: ${paragraph2.length}`); // 38
      console.log(`Length of array: ${letterArray.length}`);   // 38
    // </script>

    
    // <script>
      // get percentage
      // let getPercentage = (part, total) => (total !=== 0)? (part / total) * 100;
      
      // let percentage = getPercentage(15, 150);


      // percentage of page been scrolled
      function getScrollPercentage() {
        const root = document.documentElement;

        const scrollPosition = root.scrollTop;
        const viewportHeight = root.clientHeight;
        const totalContentHeight = root.scrollHeight;

        const maxScrollableDistance = totalContentHeight - viewportHeight;

        if (maxScrollableDistance === 0) {
          return 100; // If the page is not scrollable, assume 100% viewed.
        }

        const scrollPercentage = (scrollPosition / maxScrollableDistance) * 100;

        return Math.floor(scrollPercentage);
      };
    // </script>

    
    // <script>
      // get particular element height 
      // let height = el => el.clientHeight;

      // let hero = document.getElementById('hero');
        // console.log(height(hero));

      // window.onresize = height;
    // </script>

    // <script>
      // gDrive in webpage 
      let gDrive = document.querySelector('iframe#g-drive'),
        id = 'none', // gDrive folder id
        src=`https://drive.google.com/embeddedfolderview?id=${id}#list`;
      // set to iframe attribute
      gDrive?.style = `inline-size:100%; aspect-ratio: 16/9; border:0;`;
    // </script>

    // <script>
      let requestAnimationFrame = (el) => {
        //  code
      };
    // </script>

    
    // <script>
      // get it's distance from screen edge 
      function getDistanceFromScreenEdges(element) {
        if (!element) {
          return null;
        }

        // 1. Get the element's position and dimensions relative to the viewport
        const rect = element.getBoundingClientRect();

        // 2. Get the dimensions of the browser viewport (visible screen area)
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // 3. Calculate the distances from each edge
        const distances = {
          // Distance from the top edge of the screen
          fromTop: rect.top, 

          // Distance from the left edge of the screen
          fromLeft: rect.left, 

          // Distance from the bottom edge of the screen
          // (Viewport Height - Element's bottom position)
          fromBottom: viewportHeight - rect.bottom,

          // Distance from the right edge of the screen

          // (Viewport Width - Element's right position)
          fromRight: viewportWidth - rect.right,
        };

        return distances;
      };

      // --- Example Usage ---

      // 1. Get a reference to the element
      const myElement = document.getElementById('myElementId');

      // 2. Call the function
      const elementDistances = getDistanceFromScreenEdges(myElement);

      // 3. Log the results
      if (elementDistances) {
        console.log(`Element is ${elementDistances.fromTop.toFixed(2)}px from the top.`);
        console.log(`Element is ${elementDistances.fromBottom.toFixed(2)}px from the bottom.`);
        console.log(`Element is ${elementDistances.fromLeft.toFixed(2)}px from the left.`);
        console.log(`Element is ${elementDistances.fromRight.toFixed(2)}px from the right.`);
      };
    // </script>

    
    // <script>
      // translate using percentage max 100
      // --- Core Utility Function (Modified for efficiency) ---
      function getScrollPercentage() {
        const root = document.documentElement;

        const scrollPosition = root.scrollTop;
        const viewportHeight = root.clientHeight;
        const totalContentHeight = root.scrollHeight;

        // The maximum distance the user can scroll
        const maxScrollableDistance = totalContentHeight - viewportHeight;

        if (maxScrollableDistance === 0) {
          return 0; // Or 100, depending on desired behavior for short content
        }

        // Calculate the percentage (0 to 1)
        const rawPercentage = scrollPosition / maxScrollableDistance;

        // Return the percentage as a number between 0 and 100
        return rawPercentage * 100;
      }
    // </script>

    
    // <script>
      // --- Main Execution Function ---
      function updateElementTranslation() {
        // 1. Get the target element (using document.getElementById for safety)
        const targetElement = document.getElementById('translate-target');

        // Implement the safe execution check (fallback)
        if (!targetElement) {
          console.error("Target element '#translate-target' not found. Translation skipped.");
          return;
        }

        // 2. Get the current scroll percentage
        const scrollPercent = getScrollPercentage();

        // 3. Define the maximum allowed translation (100% of the viewport height)
        // We use the viewport height (vh) as the frame of reference for movement.
        // The amount to move is equal to the scroll percentage * 1.
        // E.g., at 50% scroll, we move 50% down.

        // 4. Apply the translation
        // We limit the translation to a maximum of 100% of the movement space.
        // The CSS transform: translateY() accepts percentage units, which are relative
        // to the element's OWN size, so we must use 'vh' (Viewport Height) units for fixed scrolling.
                                                                                                                                                          
        // We limit the value just in case, though the math should keep it 0-100
        const boundedTranslateY = Math.min(scrollPercent, 100);

        // Set the CSS transform property
        targetElement.style.transform = `translateY(${boundedTranslateY}vh)`;
      }

      // --- Event Listener ---
      // Attach the update function to the scroll event for smooth syncing
      window.addEventListener('scroll', updateElementTranslation);

      // Execute once on load to set the initial position
      updateElementTranslation();
    // </script>

    
    // <script>
      // pragraph to word arry with space
      /**
      * Splits text into spans and applies staggered delays.
      * @param {string} selector - The CSS selector for the paragraph.
      * @param {number} stagger - Delay between each item (default 0.1s).
      * @param {number} offset - Initial start delay (default 0.3s).
      */
      const staggerParagraph = (selector, stagger = 0.1, offset = 0.3) => {
        const elements = document.querySelectorAll(selector);
                            
        elements.forEach((el) => {
          const textArray = el.textContent.split(/(\s+)/);
          el.innerHTML = ''; // Clear original text

          textArray.forEach((item, index) => {
            const span = document.createElement('span');
            span.textContent = item;

            // Calculation: index * multiplier + base offset
            const delay = (index * stagger) + offset;

            span.style.display = 'inline-block';
            span.style.whiteSpace = 'pre'; // Preserves the width of spaces
            span.style.transitionDelay = `${delay}s`;
            span.style.opacity = '0'; // Initial state
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
    // </script>

    
    // <script>
      let headerRotateX = (el) => {
        let react = el.getBoundingClientReact;
        let pos = window.innerHeight / 2.5;
        let rotateX = react.top - pos;

        el.setProperty('--x', (rotateX / 2))
      };                                                                                                                                                                                                                    
    // </script>
                   
    
