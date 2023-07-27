// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     const parentBanner = item.closest(".banner");
//     parentBanner.style.gridTemplateColumns = `2fr 1fr 1fr 1fr 1fr`;
//   });

//   item.addEventListener("mouseout", () => {
//     const parentBanner = item.closest(".banner");
//     parentBanner.style.gridTemplateColumns = `1fr 1fr 1fr 1fr 1fr`;
//   });
// });

// const banner = document.querySelector(".banner");

// banner.addEventListener("mouseenter", () => {
//   banner.classList.remove("auto-play");
// });

// banner.addEventListener("mouseleave", () => {
//   banner.classList.add("auto-play");
// });

const items = document.querySelectorAll(".banner .item");
const itemsArray = Array.from(items);

function getRandomElement() {
  const randomIndex = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[randomIndex];
}

// function startLoop() {
//   setInterval(() => {
//     const randomElement = getRandomElement();
//     return randomElement;
//     // console.log(randomElement);
//   }, 1000);
// }

itemsArray.forEach((item) => {
  const parentBanner = item.closest(".banner");
  parentBanner.style.gridTemplateColumns = `1fr 1fr 2fr 1fr 1fr`;
  // function startLoop() {
  //   setInterval(() => {
  //     const randomElement = getRandomElement();
  //     switch (randomElement) {
  //       case itemsArray[0]:
  //         parentBanner.style.gridTemplateColumns = `2fr 1fr 1fr 1fr 1fr`;
  //         break;
  //       case itemsArray[1]:
  //         parentBanner.style.gridTemplateColumns = `1fr 2fr 1fr 1fr 1fr`;
  //         break;
  //       case itemsArray[2]:
  //         parentBanner.style.gridTemplateColumns = `1fr 1fr 2fr 1fr 1fr`;
  //         break;
  //       case itemsArray[3]:
  //         parentBanner.style.gridTemplateColumns = `1fr 1fr 1fr 2fr 1fr`;
  //         break;
  //       case itemsArray[4]:
  //         parentBanner.style.gridTemplateColumns = `1fr 1fr 1fr 1fr 2fr`;
  //         break;
  //     }
  //   }, 1000);
  // }

  // startLoop();

  item.addEventListener("mouseover", (e) => {
    switch (e.currentTarget) {
      case itemsArray[0]:
        parentBanner.style.gridTemplateColumns = `2fr 1fr 1fr 1fr 1fr`;
        break;
      case itemsArray[1]:
        parentBanner.style.gridTemplateColumns = `1fr 2fr 1fr 1fr 1fr`;
        break;
      case itemsArray[2]:
        parentBanner.style.gridTemplateColumns = `1fr 1fr 2fr 1fr 1fr`;
        break;
      case itemsArray[3]:
        parentBanner.style.gridTemplateColumns = `1fr 1fr 1fr 2fr 1fr`;
        break;
      case itemsArray[4]:
        parentBanner.style.gridTemplateColumns = `1fr 1fr 1fr 1fr 2fr`;
        break;
    }
  });
  item.addEventListener("mouseleave", (e) => {
    parentBanner.style.gridTemplateColumns = `1fr 1fr 2fr 1fr 1fr`;
    // bannerClass.style.opacity = 1;
  });
});

const scrollContent = document.querySelector(".scroll-content");

function cloneItems() {
  const items = scrollContent.querySelectorAll(".item");
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    scrollContent.appendChild(clone);
  });
}

cloneItems();

// Intersection Observer
const imgWrap = document.querySelector(".wrapper .container .brief .imgwrap");
const observer = new IntersectionObserver(
  (entries) => {
    entries[0].target.classList.toggle("show", entries[0].isIntersecting);
    if (entries[0].isIntersecting) observer.unobserve(entries[0].target);
    // 1 time loading
  },
  {
    threshold: 0.5,
    // rootMargin: "-200px", //substracting from top and bottom
  }
);
observer.observe(imgWrap);

// Header
const menuIcon = document.querySelector("header .menu-icon");
const navBgDrop = document.querySelector("header .nav-bg-drop");
const dropMenuList = document.querySelectorAll(
  "header .nav-bg-drop .drop-menu ul li"
);

menuIcon.addEventListener("click", (e) => {
  navBgDrop.classList.toggle("show-menu-drop");
});
for (let i = 0; i < dropMenuList.length; i++) {
  menuIcon.addEventListener("click", () => {
    setTimeout(() => {
      dropMenuList[i].classList.toggle("show-menu");
    }, 100 * i);
  });
}
