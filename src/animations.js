import gsap from "gsap";

const tl = gsap.timeline();

export const overlay = () => {
    tl
    .from(".Banner__line", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      opacity: 0,
      stagger: {
        amount: 0.3
      }
    })
    .to(".IntroOverlay__top .IntroOverlay__col", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4
      }
    })
    .to(".IntroOverlay__bottom .IntroOverlay__col", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".IntroOverlay", 0, {
      css: { display: "none" }
    })
    .from(".Card__img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2.75,
      stagger: {
        amount: 0.4
      }
    })
}

export const openMenu = () => {
    tl
    .to(".Navigation", 0, {
        css: { display: "flex" }
    })
    .to(".App", 0, {
        css: { overflow: "hidden", height: "100vh" } 
    })
    .to(".App__content", 1, {
        y: "100vh",
        ease: "expo.inOut",
        onComplete: console.log("bzvucenmixd,sl")
    })
    .to(".Header__menu-hamburger span", 0.6, {
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
        })
    .to("#Path_1", 0.4, {
        delay: -0.6,
        css: {
            strokeDashoffset: 10,
            strokeDasharray: 5
        }
    })
    .to("#Path_2", 0.4, {
        delay: -0.6,
        css: {
            strokeDashoffset: 10,
            strokeDasharray: 20
        }
    })
    .to("#Line_1", 0.4, {
        delay: -0.6,
        css: {
            strokeDashoffset: 40,
            strokeDasharray: 18
        }
    })
    .to("#circle", 0.6, {
        delay: -0.8,
        css: {
            strokeDashoffset: 0
        },
        ease: "expo.inOut"
    })
    .to(".Header__menu-closed", 0.6, {
        delay: -0.8,
        css: { display: "block" }
    });
}

export const closeMenu = () => {
    tl
    .to(".App__content", 1, {
        y: 0,
        ease: "expo.inOut",
        onComplete: console.log("bzvucenmixd,sl")
    })
    .to("#circle", 0.6, {
        delay: -0.6,
        css: {
        strokeDashoffset: -193,
        strokeDasharray: 227
        }
    })
    .to("#Path_1", 0.4, {
        delay: -0.6,
        css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
        }
    })
    .to("#Path_2", 0.4, {
        delay: -0.6,
        css: {
        strokeDashoffset: 10,
        strokeDasharray: 10
        }
    })
    .to("#Line_1", 0.4, {
        delay: -0.6,
        css: {
        strokeDashoffset: 40,
        strokeDasharray: 40
        }
    })
    .to(".Header__menu-hamburger span", 0.6, {
        delay: -0.6,
        scaleX: 1,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
    })
    .to(".Header__menu-closed", 0, {
        delay: -0.1,
        css: { display: "none" }
    })
    .to(".App", 0, { 
        css: { overflow: "auto", height: "initial" } 
    })
    .to(".Navigation", 0, {
        css: { display: "none" }
    });
}