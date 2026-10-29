
  // ---------------------------------------------------------
  // Product Data (Given) — copied verbatim from the exam sheet.
  // Students must NOT hand-write the cards in HTML; this array
  // is the single source of truth for Feature 2.
  // ---------------------------------------------------------
  const plants = [
    { id: 1, name: "Monstera Deliciosa",   category: "Indoor",    price: 125000, icon: "🪴" },/* Pak, ini iconnya emang hilang dari starter kitnya. Saya sudah coba copy dari pdf kgk bisa*/
    { id: 2, name: "Golden Barrel Cactus", category: "Succulent", price: 65000,  icon: "🌵" },
    { id: 3, name: "Dwarf Frangipani",     category: "Outdoor",   price: 180000, icon: "🌳" },
    { id: 4, name: "Snake Plant",          category: "Indoor",    price: 95000,  icon: "🌱" },
    { id: 5, name: "Bougainvillea",        category: "Outdoor",   price: 140000, icon: "🌸" },
    { id: 6, name: "Echeveria Elegans",    category: "Succulent", price: 55000,  icon: "🌵" }
  ];

  const productGrid = document.getElementById("productCard");
  const filterBar   = document.getElementById("filterBar");
  const cartCount   = document.getElementById("cartCount");

  let cart = 0;

  /*---rupiah converter---*/

  function convertRupiah(value) {
    return "Rp " + value.toLocaleString("id-ID");
  }

  /*---render list---*/

  function render(list) {
    productGrid.innerHTML = "";

    if (list.length === 0) {
      const empty = document.createElement("p");
      empty.className = "text-center text-muted fs-5";
      empty.textContent = "No plants available";
      productGrid.appendChild(empty);
      return;
    }

    list.forEach(function (plant) {

      const col = document.createElement("div");
      col.className = "col-12 col-sm-6 col-lg-4 product-col";
      col.dataset.category = plant.category;

      col.innerHTML = `
        <article class="card h-100 border-0 gl-card" data-category="${plant.category}">
          <div class="gl-card-icon" aria-hidden="true">${plant.icon}</div>
          <div class="card-body d-flex flex-column">
            <span class="badge rounded-pill gl-badge align-self-start mb-2">${plant.category}</span>
            <h2 class="card-title">${plant.name}</h2>
            <p class="gl-price mb-3">${convertRupiah(plant.price)}</p>
            <button type="button" class="btn gl-btn w-100 mt-auto add-to-cart">+ Add to Cart</button>
          </div>
        </article>
      `;

      productGrid.appendChild(col);
    });
  }


  /*---filter---*/


  function applyFilter(category) {
    const cols = productGrid.querySelectorAll(".product-col");

    cols.forEach(function (col) {
      const show = category === "All" || col.dataset.category === category;
      col.classList.toggle("d-none", !show);  
    });
  }

  filterBar.addEventListener("click", function (e) {
    const btn = e.target.closest(".gl-filter");
    if (!btn) return;

    filterBar.querySelectorAll(".gl-filter").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    applyFilter(btn.dataset.filter);
  });

  /*---card increment---*/

  productGrid.addEventListener("click", function (e) {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;
    console.log("Clicked add cart");

    cart++;
    cartCount.textContent = cart;
  });

  /*----render----*/

  document.addEventListener("DOMContentLoaded", function () {
    render(plants);
  });