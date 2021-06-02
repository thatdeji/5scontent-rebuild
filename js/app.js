(function() {
  window.addEventListener("load", () => {
    // preloader animation
    gsap.to("#js-preloader", { autoAlpha: 0, duration: 6 });
    // ScrollTriger initialization
    gsap.registerPlugin(ScrollTrigger);
    //var
    const colorList = ["#ebeded", "#e83c38", "#a6d1c9", "#282b29", "#e83c38"];
    const bgList = ["#00a19a", "#a6d1c9", "#282b29", "#f4c4c4", "#ebeded"];
    let current = 0;
    const screenSize = window.matchMedia("(min-width: 1000px)");
    //changes css variables
    function changeVariable(prop, val) {
      document.querySelector(":root").style.setProperty(prop, val);
    }
    // logic to change dom background color and text color
    function setColor() {
      if (current === colorList.length) {
        current = 0;
      }
      changeVariable("--theme-1-bg", bgList[current]);
      changeVariable("--theme-1-color", colorList[current]);
      current++;
      const tl = gsap.timeline();
      tl.fromTo(
        "#js-ripple",
        { width: "0", height: "0", opacity: 1 },
        {
          width: "62px",
          height: "62px",
          opacity: 0,
          duration: 0.6,
          stagger: 0.3
        }
      );
    }
    // Cursor animation
    function moveCursor(e) {
      let xPos = e.clientX;
      let yPos = e.clientY;
      gsap.to("#js-cursor", {
        x: xPos,
        y: yPos
      });
    }
    // Checks screen size to show scroll pinning effect
    function pinEffect() {
      if (screenSize.matches) {
        gsap.to("#js-home-header", {
          scrollTrigger: {
            trigger: "#js-home-header",
            endTrigger: "#js-about",
            pin: true
          }
        });
        gsap.to("#js-work-header", {
          scrollTrigger: {
            trigger: "#js-work-header",
            endTrigger: "#js-footer-container",
            pin: true
          }
        });
      }
    }
    pinEffect();
    //Intro Animation
    const tl = gsap.timeline();
    tl
      .fromTo(
        "#js-language",
        { y: "-100px" },
        {
          y: "0",
          ease: "Expo.easeOut"
        }
      )
      .fromTo(
        "#js-language-mobile",
        { x: "100px" },
        {
          x: "0",
          ease: "Expo.easeOut"
        }
      )
      .fromTo(
        "#js-menu",
        { y: "-70px" },
        {
          y: "0",
          ease: "Expo.easeOut"
        }
      )
      .fromTo(
        "#js-tagline",
        { y: "-60px" },
        {
          y: "0",
          ease: "Expo.easeOut"
        }
      )
      .fromTo(
        "#js-title-line",
        { scaleY: "0" },
        {
          scaleY: "1",
          stagger: 0.3,
          ease: Power2.easeInOut
        }
      )
      .fromTo(
        "#js-home-title",
        { y: "3vw" },
        {
          y: "0",
          ease: Power2.easeInOut
        }
      )
      .fromTo(
        "#js-home-video",
        { rotateX: "-90deg", perspective: "1000px", autoAlpha: 0 },
        {
          rotateX: "0",
          perspective: "1000px",
          autoAlpha: 1,
          duration: 0.9
        },
        "-=0.2"
      )
      .fromTo("#js-home-play", { autoAlpha: 0 }, { autoAlpha: 1 })
      .fromTo(
        "#js-home-play-path",
        { strokeDashoffset: -308 },
        { strokeDashoffset: 0, duration: 0.9 },
        "-=0.3"
      );
    // Scroll animations
    gsap.fromTo(
      "#js-about-video",
      {
        rotateX: "-90deg",
        perspective: "1000px",
        autoAlpha: 0
      },
      {
        scrollTrigger: { trigger: "#js-about", start: "top center" },
        rotateX: "0",
        perspective: "1000px",
        autoAlpha: 1,
        duration: 1.6
      }
    );
    gsap.to("#js-about-text", {
      scrollTrigger: { trigger: "#js-about", start: "top center" },
      opacity: 1,
      duration: 0.9,
      delay: 1
    });
    gsap.fromTo(
      "#js-work-img",
      { rotateX: "-90deg", perspective: "1000px", autoAlpha: 0 },
      {
        scrollTrigger: { trigger: "#js-work-container", start: "top center" },
        stagger: 0.3,
        rotateX: "0",
        perspective: "1000px",
        autoAlpha: 1,
        duration: 1.6
      }
    );
    gsap.fromTo(
      "#js-client",
      { autoAlpha: 0 },
      {
        scrollTrigger: { trigger: "#js-client-container", start: "top center" },
        stagger: 0.3,
        autoAlpha: 1,
        duration: 1.1
      }
    );
    gsap.fromTo(
      "#js-footer",
      { autoAlpha: 0 },
      {
        scrollTrigger: { trigger: "#js-footer-container", start: "top center" },
        stagger: 0.3,
        autoAlpha: 1,
        duration: 0.9
      }
    );
    //binding listeners
    document.body.addEventListener("click", setColor);
    window.addEventListener("mousemove", moveCursor);
    screenSize.addListener(pinEffect);
  });
})();
