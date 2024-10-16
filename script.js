 function initScrollSuave(event) {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    
    
    
    /*FORMA ALTERNATIVA
    const topo = section.offsetTop;
    window.scrollTo ({
      top: topo,
      behavior: 'smooth',
    })
    FORMA ALTERNATIVA*/
    
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection)
    });
    }
    
    initScrollSuave();