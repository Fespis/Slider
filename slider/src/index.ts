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
    });
  });
}

moveNewCursor();
swapListItem();
