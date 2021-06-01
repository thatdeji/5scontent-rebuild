(function() {
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
        duration: 0.8
      },
      "+=1"
    )
    .fromTo("#js-home-play", { autoAlpha: 0 }, { autoAlpha: 1 })
    .fromTo(
      "#js-home-play-path",
      { strokeDashoffset: -308 },
      { strokeDashoffset: 0, duration: 0.9 }
    );
})();
