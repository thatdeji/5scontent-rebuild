(function() {
  window.addEventListener("DOMContentLoaded", () => {
    // preloader animation
    gsap.timeline().fromTo(
      "#js-preloader",
      {
        autoAlpha: 1
      },
      {
        autoAlpha: 0,
        duration: 0.8,
        delay: 3,
        onComplete: function() {
          pageAnimation();
          scrollEffect();
        }
      }
    );
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
    // Checks screen size to show scroll pinning & translation effect
    function scrollEffect() {
      ScrollTrigger.matchMedia({
        "(min-width: 1000px)": function() {
          gsap.to("#js-home-header", {
            scrollTrigger: {
              trigger: "#js-home-header",
              endTrigger: "#js-about",
              pin: true
            }
          });
          gsap.to("#js-home-header--secondary", {
            scrollTrigger: {
              trigger: "#js-home-header--secondary",
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
          function scrollTranslateEffect(elem, startVal, endVal) {
            gsap.fromTo(
              elem,
              { y: startVal },
              {
                scrollTrigger: {
                  trigger: elem,
                  scrub: 2
                },
                y: endVal,
                duration: 5
              }
            );
          }
          scrollTranslateEffect("#js-about-text", 50, -50);
          scrollTranslateEffect("#js-work-scroll-1", 100, -100);
          scrollTranslateEffect("#js-work-scroll-2", 50, -50);
          scrollTranslateEffect("#js-work-scroll-3", -50, 50);
          scrollTranslateEffect("#js-work-scroll-4", -100, 100);
          scrollTranslateEffect("#js-work-scroll-5", 50, -50);
        }
      });
    }
    function pageAnimation() {
      //Intro Animation
      const tl = gsap.timeline();
      tl
        .to("#js-site-logo", {
          x: "0",
          ease: "Expo.easeOut"
        })
        .to("#js-language", {
          y: "0",
          ease: "Expo.easeOut"
        })
        .to("#js-language-mobile", {
          x: "0",
          ease: "Expo.easeOut"
        })
        .to("#js-menu", {
          y: "0",
          ease: "Expo.easeOut"
        })
        .to("#js-tagline", {
          y: "0",
          ease: "Expo.easeOut"
        })
        .to("#js-title-line", {
          scaleY: "1",
          stagger: 0.3,
          ease: Power2.easeInOut
        })
        .to(
          "#js-title-line-2",
          {
            scaleY: "1",
            stagger: 0.3,
            ease: Power2.easeInOut
          },
          "-=1.1"
        )
        .to("#js-title-line", {
          y: 0,
          stagger: 0.3,
          ease: Power2.easeInOut
        })
        .to(
          "#js-title-line-2",
          {
            y: 0,
            stagger: 0.3,
            ease: Power2.easeInOut
          },
          "-=1.1"
        )
        .to("#js-home-title", {
          y: "0",
          ease: Power2.easeInOut
        })
        .to(
          "#js-home-video",
          {
            rotateX: "0",
            perspective: "1000px",
            autoAlpha: 1,
            duration: 0.9
          },
          "-=0.2"
        )
        .to("#js-home-play", { opacity: 1 })
        .to(
          "#js-home-play-path",
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
        delay: 0.2
      });
      const lineAnim = gsap.to("#js-header-line-lg", { y: 0, paused: true });
      ScrollTrigger.create({
        trigger: "#js-about",
        start: "top center",
        onEnter: () => lineAnim.play()
      });

      ScrollTrigger.create({
        trigger: "#js-about",
        start: "top center",
        onLeaveBack: () => lineAnim.reverse(0)
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
          scrollTrigger: {
            trigger: "#js-client-container"
          },
          stagger: 0.3,
          autoAlpha: 1,
          duration: 1.1
        }
      );
      gsap.fromTo(
        "#js-footer",
        { autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: "#js-footer-container"
          },
          stagger: 0.3,
          autoAlpha: 1,
          duration: 0.9
        }
      );
    }
    //binding listeners
    document.body.addEventListener("click", setColor);
    window.addEventListener("mousemove", moveCursor);
  });
})();
