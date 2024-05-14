document.addEventListener("DOMContentLoaded", function () {
  const navlink = document.getElementById("nav-button");
  let toggleCount = 0;

  navlink.addEventListener("click", function () {
    toggleCount++;

    if (toggleCount % 2 !== 0) {
      // If toggleCount is odd, show the element
      document.getElementById("mobile-menu").classList.remove(`hidden`);
    } else {
      // If toggleCount is even, hide the element
      document.getElementById("mobile-menu").classList.add(`hidden`);
    }
  });

  window.addEventListener("scroll", reveal);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 80;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add("translate-y-0");
        reveals[i].classList.add("opacity-100");
      } else {
        reveals[i].classList.remove("translate-y-0");
        reveals[i].classList.remove("opacity-100");
      }
    }
  }

  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 300, fill: "forwards" }
    );
  });

  let mcbtn = document.getElementById("mcbtn");
  let mcbtn2 = document.getElementById("mcbtn2");
  let aboutbtn = document.getElementById("aboutbtn");
  let aboutbtn2 = document.getElementById("aboutbtn2");
  let timebtn = document.getElementById("timebtn");
  let timebtn2 = document.getElementById("timebtn2");
  let factbtn = document.getElementById("factbtn");
  let factbtn2 = document.getElementById("factbtn2");
  let soonbtn = document.getElementById("soonbtn");
  let soonbtn2 = document.getElementById("soonbtn2");
  let character = document.getElementById("character");
  let timeline = document.getElementById("timeline");
  let fact = document.getElementById("fact");
  let soon = document.getElementById("soon");
  let discover = document.getElementById("discover");
  let all = document.getElementById("all");

  discover.onclick = function () {
    all.scrollIntoView(true);
  };
  mcbtn.onclick = function () {
    character.scrollIntoView(true);
  };
  mcbtn2.onclick = function () {
    character.scrollIntoView(true);
    document.getElementById("mobile-menu").classList.add(`hidden`);
  };
  aboutbtn.onclick = function () {
    all.scrollIntoView(true);
  };
  aboutbtn2.onclick = function () {
    all.scrollIntoView(true);
    document.getElementById("mobile-menu").classList.add(`hidden`);
  };
  timebtn.onclick = function () {
    timeline.scrollIntoView(true);
  };
  timebtn2.onclick = function () {
    timeline.scrollIntoView(true);
    document.getElementById("mobile-menu").classList.add(`hidden`);
  };
  factbtn.onclick = function () {
    fact.scrollIntoView(true);
  };
  factbtn2.onclick = function () {
    fact.scrollIntoView(true);
    document.getElementById("mobile-menu").classList.add(`hidden`);
  };
  soonbtn2.onclick = function () {
    soon.scrollIntoView(true);
    document.getElementById("mobile-menu").classList.add(`hidden`);
  };
  soonbtn.onclick = function () {
    soon.scrollIntoView(true);
  };

  document.getElementById("toggle-btn").addEventListener("click", () => {
    document.getElementById("more-text").classList.toggle("hidden");
    document.getElementById("toggle-btn").classList.toggle("hidden");
    document.getElementById("hide-btn").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn13").addEventListener("click", () => {
    document.getElementById("more-text13").classList.toggle("hidden");
    document.getElementById("toggle-btn13").classList.toggle("hidden");
    document.getElementById("hide-btn13").classList.toggle("hidden");
  });

  document.getElementById("hide-btn13").addEventListener("click", () => {
    document.getElementById("more-text13").classList.toggle("hidden");
    document.getElementById("toggle-btn13").classList.toggle("hidden");
    document.getElementById("hide-btn13").classList.toggle("hidden");
  });

  document.getElementById("hide-btn").addEventListener("click", () => {
    document.getElementById("more-text").classList.toggle("hidden");
    document.getElementById("toggle-btn").classList.toggle("hidden");
    document.getElementById("hide-btn").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn3").addEventListener("click", () => {
    document.getElementById("more-text3").classList.toggle("hidden");
    document.getElementById("toggle-btn3").classList.toggle("hidden");
    document.getElementById("hide-btn3").classList.toggle("hidden");
  });

  document.getElementById("hide-btn3").addEventListener("click", () => {
    document.getElementById("more-text3").classList.toggle("hidden");
    document.getElementById("toggle-btn3").classList.toggle("hidden");
    document.getElementById("hide-btn3").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn4").addEventListener("click", () => {
    document.getElementById("more-text4").classList.toggle("hidden");
    document.getElementById("toggle-btn4").classList.toggle("hidden");
    document.getElementById("hide-btn4").classList.toggle("hidden");
  });

  document.getElementById("hide-btn4").addEventListener("click", () => {
    document.getElementById("more-text4").classList.toggle("hidden");
    document.getElementById("toggle-btn4").classList.toggle("hidden");
    document.getElementById("hide-btn4").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn5").addEventListener("click", () => {
    document.getElementById("more-text5").classList.toggle("hidden");
    document.getElementById("toggle-btn5").classList.toggle("hidden");
    document.getElementById("hide-btn5").classList.toggle("hidden");
  });

  document.getElementById("hide-btn5").addEventListener("click", () => {
    document.getElementById("more-text5").classList.toggle("hidden");
    document.getElementById("toggle-btn5").classList.toggle("hidden");
    document.getElementById("hide-btn5").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn6").addEventListener("click", () => {
    document.getElementById("more-text6").classList.toggle("hidden");
    document.getElementById("toggle-btn6").classList.toggle("hidden");
    document.getElementById("hide-btn6").classList.toggle("hidden");
  });

  document.getElementById("hide-btn6").addEventListener("click", () => {
    document.getElementById("more-text6").classList.toggle("hidden");
    document.getElementById("toggle-btn6").classList.toggle("hidden");
    document.getElementById("hide-btn6").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn7").addEventListener("click", () => {
    document.getElementById("more-text7").classList.toggle("hidden");
    document.getElementById("toggle-btn7").classList.toggle("hidden");
    document.getElementById("hide-btn7").classList.toggle("hidden");
  });

  document.getElementById("hide-btn7").addEventListener("click", () => {
    document.getElementById("more-text7").classList.toggle("hidden");
    document.getElementById("toggle-btn7").classList.toggle("hidden");
    document.getElementById("hide-btn7").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn8").addEventListener("click", () => {
    document.getElementById("more-text8").classList.toggle("hidden");
    document.getElementById("toggle-btn8").classList.toggle("hidden");
    document.getElementById("hide-btn8").classList.toggle("hidden");
  });

  document.getElementById("hide-btn8").addEventListener("click", () => {
    document.getElementById("more-text8").classList.toggle("hidden");
    document.getElementById("toggle-btn8").classList.toggle("hidden");
    document.getElementById("hide-btn8").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn12").addEventListener("click", () => {
    document.getElementById("more-text12").classList.toggle("hidden");
    document.getElementById("toggle-btn12").classList.toggle("hidden");
    document.getElementById("hide-btn12").classList.toggle("hidden");
  });

  document.getElementById("hide-btn12").addEventListener("click", () => {
    document.getElementById("more-text12").classList.toggle("hidden");
    document.getElementById("toggle-btn12").classList.toggle("hidden");
    document.getElementById("hide-btn12").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn10").addEventListener("click", () => {
    document.getElementById("more-text10").classList.toggle("hidden");
    document.getElementById("toggle-btn10").classList.toggle("hidden");
    document.getElementById("hide-btn10").classList.toggle("hidden");
  });

  document.getElementById("hide-btn10").addEventListener("click", () => {
    document.getElementById("more-text10").classList.toggle("hidden");
    document.getElementById("toggle-btn10").classList.toggle("hidden");
    document.getElementById("hide-btn10").classList.toggle("hidden");
  });

  document.getElementById("toggle-btn9").addEventListener("click", () => {
    document.getElementById("more-text9").classList.toggle("hidden");
    document.getElementById("toggle-btn9").classList.toggle("hidden");
    document.getElementById("hide-btn9").classList.toggle("hidden");
  });

  document.getElementById("hide-btn9").addEventListener("click", () => {
    document.getElementById("more-text9").classList.toggle("hidden");
    document.getElementById("toggle-btn9").classList.toggle("hidden");
    document.getElementById("hide-btn9").classList.toggle("hidden");
  });

  const mcDataHolder = document.querySelector(".mc-data-holder");
  const mcDataHolder2 = document.querySelector(".mc-data-holder2");
  const mcDataHolder3 = document.querySelector(".mc-data-holder3");
  const mcDataHolder4 = document.querySelector(".mc-data-holder4");
  const charactersBoxes = document.querySelectorAll(".characters-box");

  charactersBoxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
      mcDataHolder.innerHTML = box.getAttribute("data-content1");
      mcDataHolder2.innerHTML = box.getAttribute("data-content2");
      mcDataHolder3.innerHTML = box.getAttribute("data-content3");
      mcDataHolder4.innerHTML = box.getAttribute("data-content4");
    });

    box.addEventListener("mouseout", function () {
      mcDataHolder.textContent = "Hover/Press the characters";
      mcDataHolder2.textContent = "Hover/Press the characters";
      mcDataHolder3.textContent = "Hover/Press the characters";
      mcDataHolder4.textContent = "Hover/Press the characters";
    });
  });
});
