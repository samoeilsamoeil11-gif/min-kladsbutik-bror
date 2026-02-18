console.log("JavaScript är kopplat och fungerar");

// =====================
// DATA: produkter
// =====================
const products = [
  {
    name: "T-shirt",
    description: "Klassisk t-shirt gjord av guld",
    price: "99 miljoner kr",
    image:
      "https://image.hm.com/assets/hm/19/10/19108b8f7717f2afbeb05c645a5fe6640b961445.jpg",
  },
  {
    name: "Hoodie",
    description: "Mjuk hoodie med sjuk stil",
    price: "75 kr",
    image: "https://m.media-amazon.com/images/I/61FoQA5BVlL._AC_SL1500_.jpg",
  },
  {
    name: "Jeans",
    description: "Bekväma jeans för vardag",
    price: "100 kr",
    image:
      "https://img.tradera.net/large-fit/244/564812244_6f9291fa-1171-4f17-9798-e30d6af2dc71.jpg",
  },
  {
    name: "Skor",
    description: "Snygga skor med bra passform",
    price: "799 kr",
    image:
      "https://baskets-store.com/cdn/shop/collections/crocs-echo-clog-feature.jpg?v=1725622727",
  },
];

// =====================
// 1) PRODUKTER + SÖK
// (kör bara om .menu-grid finns)
// =====================
const menuGrid = document.querySelector(".menu-grid");
const searchInput = document.querySelector("#search");

if (menuGrid) {
  function renderProducts(list) {
    menuGrid.innerHTML = "";

    if (list.length === 0) {
      menuGrid.innerHTML = "<p>Inga matchningar.</p>";
      return;
    }

    list.forEach((product) => {
      const article = document.createElement("article");
      article.classList.add("menu-item");

      article.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      `;

      menuGrid.appendChild(article);
    });
  }

  // Första rendern
  renderProducts(products);

  // Event delegation: markera produkt
  menuGrid.addEventListener("click", (event) => {
    const productCard = event.target.closest(".menu-item");
    if (!productCard) return;

    productCard.classList.toggle("selected");
  });

  // Sök/filter i realtid
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      const filtered = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(value) ||
          product.description.toLowerCase().includes(value)
        );
      });

      renderProducts(filtered);
    });
  }
}

// =====================
// 2) FORM + VALIDATION
// (kör bara om #contactForm finns)
// =====================
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const messageInput = document.querySelector("#message");
  const formMessage = document.querySelector("#formMessage");
  
  // Hämta sparat namn från localStorage (om det finns)
  const savedName = localStorage.getItem("savedName");
  if (savedName) {
    nameInput.value = savedName;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "" || messageValue === "") {
      formMessage.textContent = "Fyll i både namn och meddelande.";
      return;
    }

formMessage.textContent = "Tack! Ditt meddelande är skickat ✅";

// Spara namn i localStorage
localStorage.setItem("savedName", nameValue);

nameInput.value = "";
messageInput.value = "";
  });
}