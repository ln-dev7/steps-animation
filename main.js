import "./style.scss";
import gsap from "gsap";

const continueBtn = document.querySelector(".continue");
const backBtn = document.querySelector(".back");
const progress = document.querySelector(".progress");
const dots = document.querySelectorAll(".dot");

const duration = 0.5;
const ease = "power2.inOut";

let step = 1;

continueBtn.addEventListener("click", () => {
  if (step < 3) {
    step++;
  }
  switch (step) {
    case 2:
      gsap.to(progress, { width: 52, duration, ease });
      gsap.to((dots[0], dots[1]), { backgroundColor: "white", duration, ease });
      gsap.to(dots[2], { backgroundColor: "#cbd5e1", duration, ease });

      gsap.to(backBtn, {
        x: 0,
        opacity: 1,
        duration,
        ease,
      });
      gsap.to(continueBtn, {
        width: 256,
        x: 0,
        duration,
        ease,
      });
      break;
    case 3:
      gsap.to(progress, { width: 84, duration, ease });
      gsap.to(dots, { backgroundColor: "white", duration, ease });
      gsap.to(".continue div span", {
        y: -24,
        duration,
        ease,
      });
      break;
  }
});

backBtn.addEventListener("click", () => {
  if (step > 1) {
    step--;
  }
  switch (step) {
    case 1:
      gsap.to(progress, { width: 20, duration, ease });
      gsap.to(dots[0], { backgroundColor: "white", duration, ease });
      gsap.to(dots[1], {
        backgroundColor: "#cbd5e1",
        duration,
        ease,
      });
      gsap.to(backBtn, {
        x: -120,
        opacity: 0,
        duration,
        ease,
      });
      gsap.to(continueBtn, {
        width: 384,
        x: -128,
        duration,
        ease,
      });
      break;
    case 2:
      gsap.to(progress, { width: 52, duration, ease });
      gsap.to((dots[1], dots[2]), {
        backgroundColor: "#cbd5e1",
        duration,
        ease,
      });
      gsap.to(backBtn, {
        x: 0,
        opacity: 1,
        duration,
        ease,
      });
      gsap.to(continueBtn, {
        width: 256,
        x: 0,
        duration,
        ease,
      });
      gsap.to(".continue div span", {
        y: 0,
        duration,
        ease,
      });
      break;
  }
});
