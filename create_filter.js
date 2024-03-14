(() => {
  const currentFilterContainer = document.getElementById("filtersBlock");
  const newFilterContainer = document
    .querySelector(".cat-filters")
    .cloneNode(true);
  newFilterJs = document.createElement("div");
  newFilterJs.id = "filter-js";
  newFilterContainer.querySelector("div > ul > li").innerHTML =
    newFilterJs.outerHTML;
  currentFilterContainer.appendChild(newFilterContainer);
})();
