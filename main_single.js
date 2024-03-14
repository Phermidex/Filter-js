(() => {
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
      this.inizialize();
      this.handlerfilter();
      this.retoreSelected();
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

  const JsFilter = new Filter("filter-js", ".product-container", [
    {
      label: "Show (all)",
      action: "show",
      reference: "all",
    },
    {
      label: "Hide (out of stock)",
      action: "hide",
      reference: "out of stock",
    },
    {
      label: "Hide (in stock)",
      action: "hide",
      reference: "in stock",
    },
  ]);

  JsFilter.buildSelect();
})();
