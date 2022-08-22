import "./style.scss";

const backgroundColors = [`#8dbdba`, `#8675ba`];

function swapListItem() {
  let currentItemNumber = 0;
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const list = document.querySelector(".list") as HTMLElement;
  const items = document.querySelectorAll(".list-item");

  prev?.addEventListener("click", function () {
    currentItemNumber -= 1;
    if (currentItemNumber < 0) {
      currentItemNumber = items.length - 1;
    }
    const currentItemWidth = items[currentItemNumber]?.scrollWidth;
    list.style.marginRight = `${currentItemWidth * currentItemNumber}px`;
    list.style.backgroundColor = `${backgroundColors[currentItemNumber]}`;
  });

  next?.addEventListener("click", function () {
    currentItemNumber += 1;
    if (currentItemNumber > items.length - 1) {
      currentItemNumber = 0;
    }
    const currentItemWidth = items[currentItemNumber]?.scrollWidth;
    list.style.marginRight = `${currentItemWidth * currentItemNumber}px`;
    list.style.backgroundColor = `${backgroundColors[currentItemNumber]}`;
  });
}
swapListItem();
