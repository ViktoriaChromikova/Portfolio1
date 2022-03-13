document.querySelectorAll(".projects").forEach((carousel) => {
    const items = carousel.querySelectorAll(".links");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="projects__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="projects__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".projects__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {

        items.forEach((item) =>
          item.classList.remove("links--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("project__button--selected")
        );
  
        items[i].classList.add("links--selected");
        button.classList.add("project__button--selected");
      });
    });
  
  
    items[0].classList.add("links--selected");
    buttons[0].classList.add("project__button--selected");
  });
  