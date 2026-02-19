const VERSION = 19;

  const root = document.documentElement,
  head = document.head,
  body = document.body;

  let metaAccentClr = document.querySelector("meta[name='theme-color']"),
  clrAccent = metaAccentClr.content;
  root.style.setProperty('--clr-accent', clrAccent);

  // loder
  let loader = document.getElementById("loader"),
  backGround = loader.querySelector(".progress .back-ground")

  let loaderSetting = {
    speed : loader.dataset.speed,
    duration : loader.dataset.duration,
    delay: loader.dataset.delay,
    color: "--clr-accent"
  }

  let startValue = 0,
  endValue = loaderSetting.duration;

  let progress = setInterval(() => {
    startValue++;

    backGround.animate({
      background : `conic-gradient(var(${loaderSetting.color}) ${startValue * 3.6}deg, transparent 0deg)`
    }, {duration: "auto", fill: "forwards", delay: loaderSetting.delay})

    if(startValue == endValue){
      clearInterval(progress)
      document.body.removeChild(loader)
    }
  }, loaderSetting.speed)


  const date = new Date(),
  day = date.getDate(),
  hour = date.getHours(),
  minutes = date.getMinutes();


  // += scrollY

  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.setAttribute('loading', 'lazy')
    image.setAttribute('draggable', 'false')
  })

  const headerSection = document.getElementById("header");
  const nav = document.getElementById("nav")

  function headerNavigation() {
    let navList = nav.querySelector(".nav-list")
    let listItems = navList.querySelectorAll("li")
    let active = navList.querySelector(".active")
    let activeBg = navList.querySelector(".active-bg")
  
    let navListRect = navList.getBoundingClientRect()
    let activeRect = active.getBoundingClientRect()
  
    let activeWidth = activeRect.width;
    let activeHeight = activeRect.height;
    let leftTrans = activeRect.left - navListRect.left - 5
    let leftPosition = navListRect.left + 5
    let topPosition = activeRect.top
  
    activeBg.style = `height: ${activeHeight}px; width: ${activeWidth}px; left: ${leftPosition}px; top: ${topPosition}px;`
  
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        navList.querySelectorAll("li.active")?.forEach(el => {el.classList.remove("active")});
        item.classList.add("active")
  
        let active = navList.querySelector(".active")
  
        let activeRect = active.getBoundingClientRect()
            
        let activeWidth = activeRect.width;
        let activeHeight = activeRect.height;
        let leftTrans = activeRect.left - navListRect.left - 5
        let leftPosition = navListRect.left + 5
        let topPosition = activeRect.top
  
        activeBg.style = `height: ${activeHeight}px; width: ${activeWidth}px; left: ${leftPosition}px; top: ${topPosition}px; transform: translateX(${leftTrans}px);`
      })
    })
  }
  headerNavigation()
   
  let heroSection = document.getElementById("hero"),
  scroller = document.getElementById("scroller"),
  getScrollerScrollWidth = document.getElementById("get-scroller-scroll-width")

  function scrollerScroll() {
    let screenHeight = window.innerHeight
    let screenWidth = window.innerWidth

    let scrollerScrollWidth = scroller.scrollWidth
    let scrollerRect = scroller.getBoundingClientRect()

    heroSection.style.height = `${screenHeight}px`
    heroSection.style.width = `${window.outerWidth}px`
    body.style = `--screen-height: ${screenHeight}px;`
    body.style = `--screen-width: ${screenWidth}px;`
    
    getScrollerScrollWidth.style = `height: ${scrollerScrollWidth + screenHeight}px;`
    
    scroller.scrollLeft = heroSection.scrollTop
    // for sticky ====
    // scroller.style.top = `${window.scrollY - scrollerRect.top}px`
  }
  scrollerScroll()

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  function heroScrollY() {
    heroSection.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  heroSection.addEventListener("scroll", () => {
    scrollTop()
    scrollerScroll()
    heroImgTrans()
    fadeInTop()
  })


  window.addEventListener("resize", () => {
    scrollTop()
    heroScrollY()

    headerNavigation()
    scrollerScroll()
    heroImgTrans()
    fadeInTop()
    textRevelOnscroll()
    askQuestion()
  })

  window.addEventListener("load", () => {
    scrollTop()
    heroScrollY()
  })

  window.addEventListener("DOMContentLoaded", () => {
    scrollTop()
    heroScrollY()
  })

  function heroImgTrans(){
    let sliderPhotos = scroller.querySelectorAll(".slider-container .slide img")
    
    sliderPhotos.forEach(img => {
      imgPercentage = scroller.scrollLeft * 100 / window.innerWidth;
      newImgPercentage = Math.min(Math.max(0, imgPercentage), 100)

      img.animate({
        objectPosition: `${newImgPercentage}%`
      }, {duration: 1200, fill: "forwards"})
    })
  }
  heroImgTrans() 


  function fadeInTop(){
    let fadeInTop = document.querySelectorAll(".fade-in-top")

    fadeInTop.forEach(el => {
      let rect = el.getBoundingClientRect()
      let revelPosition = (rect.width / 2) + window.innerWidth
      let revelPosition2 = (rect.width / 2)
      if(rect.right > revelPosition || revelPosition2 > rect.right){
        el.style = "transform: translateY(-100%); opacity: 0;"
      }
      else {
        el.style = "transform: translateY(0); opacity: 1;"
      }
    })
  }

  
  function textRevelOnscroll() {
    let textRevelOnscroll = document.querySelectorAll(".text-revel-onscroll")

    textRevelOnscroll.forEach(revel => {
      let rect = revel.getBoundingClientRect()
      let revelPosition = window.innerHeight - rect.top + (rect.height / 2)
      let percentage = revelPosition / (rect.top) * 100
      revelPercentage = Math.min(Math.max(0, percentage), 100)

      revel.animate({
        backgroundSize: `${revelPercentage}% 100%`
      }, {duration: 1200, fill: "forwards"})
    })
  }


  
  let questionContainer = document.querySelector(".question-container"),
  faqs = questionContainer.querySelectorAll(".question-answer"),
  ques = questionContainer.querySelectorAll(".question");

  function askQuestion() {
    faqs.forEach(faq => {
      const faqHeight = faq.getBoundingClientRect().height

      ques.forEach(qel => {
        let qelHeight = qel.getBoundingClientRect().height

        faq.style.setProperty("--height", qelHeight + "px")
        faq.style.height = `var(--height)`
        
        faq.addEventListener("click", () => {
          // questionContainer.querySelectorAll(".collaps")?.forEach(el => {el.classList.remove("collaps")});
          faq.classList.toggle("collaps")

          if(faq.classList.contains("collaps")){
            faq.style.setProperty("--height", faqHeight + "px")
            faq.style.height = `var(--height)`
            qel.querySelector(".indicator").style.transform = "rotateZ(45deg)"
          }
          else{
            faq.style.setProperty("--height", qelHeight + "px")
            faq.style.height = `var(--height)`
            qel.querySelector(".indicator").style.transform = "rotateZ(0deg)"
          }
        })
      })
    })
  }
  askQuestion()

  window.addEventListener("scroll", () => {
    scrollerScroll()

    heroImgTrans()
    fadeInTop()
    textRevelOnscroll()
  })


            


            
  



        






