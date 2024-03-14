class Filter {
    constructor(container, target = null, filters = []) {
      this.appContainer = document.getElementById(container);
      this.target = target;
      this.filterValues = filters;
      this.Store = window.localStorage;
    }
  
    inizialize() {
      const filter = document.createElement("select");
      filter.className = "filter__select";
  
      this.filterValues.forEach((element) => {
        const option = document.createElement("option");
        option.value = element.reference;
        option.text = element.label;
  
        if (element.action === "show") {
          option.setAttribute("selected", true);
        }
  
        filter.appendChild(option);
      });
  
      this.appContainer.appendChild(filter);
    }
  
    buildSelect() {
      const currentFilterContainer = document.getElementById("filtersBlock");
      const newFilterContainer = document
        .querySelector(".cat-filters")
        .cloneNode(true);
      newFilterJs = document.createElement("div");
      newFilterJs.id = "filter-js";
      newFilterContainer.querySelector("div > ul > li").innerHTML =
        newFilterJs.outerHTML;
      currentFilterContainer.appendChild(newFilterContainer);
    }
  
    _filterByReference(reference) {
      const target = document.querySelectorAll(this.target);
      target.forEach((element) => {
        if (element.outerText.toLowerCase().includes(reference)) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      });
    }
  
    handlerfilter() {
      this.appContainer.addEventListener("change", (e) => {
        this._filterByReference(e.target.value);
        this.Store.setItem("filterJs", e.target.value);
      });
    }
  
    retoreSelected() {
      const storeSelected = this.Store.getItem("filterJs");
      const filter = document.querySelector(".filter__select");
      if (storeSelected) {
        this._filterByReference(storeSelected);
  
        for (const option of filter.options) {
          if (option.value === storeSelected) {
            option.setAttribute("selected", true);
          }
        }
      }
    }
  }
  