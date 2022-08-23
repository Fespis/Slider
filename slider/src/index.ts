import "./style.scss";

function swapListItem() {
  let currentItemNumber = 0;
  const backgroundColors = [`#8dbdba`, `#8675ba`];
  const prevButtons = document.querySelectorAll(".menu_buttons__prev");
  const nextButtons = document.querySelectorAll(".menu_buttons__next");
  const list = document.querySelector(".list") as HTMLElement;
  const items = document.querySelectorAll(".list_item");

  prevButtons.forEach((prevButton) => {
    prevButton?.addEventListener("click", function () {
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
    nextButton?.addEventListener("click", function () {
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
swapListItem();
