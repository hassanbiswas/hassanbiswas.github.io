const VERSION = 19;
const root = document.documentElement,
  head = document.head,
  body = document.body;

  let metaThemeClr = head.querySelector("meta[name='theme-color']"),
  clrAccent = metaThemeClr.content;
  root.style.setProperty('--clr-accent', clrAccent);


  const header = document.getElementById('header'),
  logo = document.getElementById('logo').querySelector('.img'),
  nav = document.getElementById('nav');

  function navigation() {
    navHeight = nav.offsetHeight;
  
    logo.style.height = `${navHeight}px`;
    header.style.height = `${navHeight}px`;
  }

  navigation()


  const date = new Date(),
  year = date.getFullYear();

  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.setAttribute('loading', 'lazy')
    image.setAttribute('draggable', 'false')
  })

  window.addEventListener("load", () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth"
    // })
    
    navigation()
  })

  window.addEventListener('resize', () => {
    
    navigation()
  })
  