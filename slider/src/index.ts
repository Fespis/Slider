import "./style.scss";

function changeCursor() {
  const newCursor = document.querySelector(".cursor") as HTMLElement;
  newCursor.style.width = "100px";
  newCursor.style.height = "100px";
}

function reChangeCursor() {
  const newCursor = document.querySelector(".cursor") as HTMLElement;
  newCursor.style.width = "50px";
  newCursor.style.height = "50px";
}

function moveNewCursor() {
  const newCursor = document.querySelector(".cursor") as HTMLElement;
  window.addEventListener("mousemove", (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    const centerX = newCursor.offsetLeft + newCursor.offsetWidth / 2;
    const centerY = newCursor.offsetTop + newCursor.offsetHeight / 2;
    const OFFSET_FROM_CENTER = 10;
    newCursor.style.transform = `translate3d(${
      mouseX - centerX + OFFSET_FROM_CENTER
    }px, ${mouseY - centerY + OFFSET_FROM_CENTER}px, 0)`;
  });
}

function changeAnimationForText(prevItem: number, currentItem: number) {
  const menuTitleAll = document.querySelectorAll(".menu_tittle");
  const menuTextAll = document.querySelectorAll(".menu_text");
  const menuTableAll = document.querySelectorAll(".menu_table");

  const menuTitlePrev = menuTitleAll[prevItem] as HTMLElement;
  const menuTitleCurrent = menuTitleAll[currentItem] as HTMLElement;
  const menuTextPrev = menuTextAll[prevItem] as HTMLElement;
  const menuTextCurrent = menuTextAll[currentItem] as HTMLElement;
  const menuTablePrev = menuTableAll[prevItem] as HTMLElement;
  const menuTableCurrent = menuTableAll[currentItem] as HTMLElement;

  menuTitlePrev.classList.add("animation_hidden-title");
  menuTitleCurrent.classList.add("animation_show-title");
  menuTitlePrev.classList.remove("animation_show-title");
  menuTitleCurrent.classList.remove("animation_hidden-title");

  menuTextPrev.classList.add("animation_hidden-text");
  menuTextCurrent.classList.add("animation_show-text");
  menuTextPrev.classList.remove("animation_show-text");
  menuTextCurrent.classList.remove("animation_hidden-text");

  menuTablePrev.classList.add("animation_hidden-table");
  menuTableCurrent.classList.add("animation_show-table");
  menuTablePrev.classList.remove("animation_show-table");
  menuTableCurrent.classList.remove("animation_hidden-table");
}

function swapListItem() {
  let currentItemNumber = 0;
  const backgroundColors = [`#8dbdba`, `#8675ba`];
  const prevButtons = document.querySelectorAll(".menu_buttons__prev");
  const nextButtons = document.querySelectorAll(".menu_buttons__next");
  const list = document.querySelector(".list") as HTMLElement;
  const items = document.querySelectorAll(".list_item");

  prevButtons.forEach((prevButton) => {
    prevButton?.addEventListener("mouseover", () => {
      changeCursor();
    });
    prevButton?.addEventListener("mouseout", () => {
      reChangeCursor();
    });
    prevButton?.addEventListener("click", () => {
      const prevItemNumber = currentItemNumber;
      currentItemNumber -= 1;
      if (currentItemNumber < 0) {
        currentItemNumber = items.length - 1;
      }
      const currentItem = items[currentItemNumber] as HTMLElement;
      const currentItemWidth = currentItem?.scrollWidth;
      (items[0] as HTMLElement).style.marginLeft = `-${
        currentItemWidth * currentItemNumber
      }px`;
      list.style.backgroundColor = `${backgroundColors[currentItemNumber]}`;
      changeAnimationForText(prevItemNumber, currentItemNumber);
    });
  });

  nextButtons.forEach((nextButton) => {
    nextButton?.addEventListener("mouseover", () => {
      changeCursor();
    });
    nextButton?.addEventListener("mouseout", () => {
      reChangeCursor();
    });
    nextButton?.addEventListener("click", () => {
      const prevItemNumber = currentItemNumber;
      currentItemNumber += 1;
      if (currentItemNumber > items.length - 1) {
        currentItemNumber = 0;
      }
      const currentItem = items[currentItemNumber] as HTMLElement;
      const currentItemWidth = currentItem?.scrollWidth;
      (items[0] as HTMLElement).style.marginLeft = `-${
        currentItemWidth * currentItemNumber
      }px`;
      list.style.backgroundColor = `${backgroundColors[currentItemNumber]}`;
      changeAnimationForText(prevItemNumber, currentItemNumber);
    });
  });
}

function addSphereAnimation() {
  let spheres = document.querySelectorAll(".sphere");
  let spheresSecond = document.querySelector(".spheres-second") as HTMLElement;

  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    spheres.forEach((sphere) => {
      (sphere as HTMLElement).style.transform =
        "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    });
  });
}

addSphereAnimation();

moveNewCursor();
swapListItem();
