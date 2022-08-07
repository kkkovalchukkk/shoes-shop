const data = [
    {
        id: 1,
        brand: "Nike",
        model: "Waffle One",
        price: 2990,
        image_url:
            "https://img.brandshop.ru/cache/products/d/dc2533-001-0_1104x1104.jpg",
    },
    {
        id: 2,
        brand: "Nike",
        model: "Nike Air Max 90",
        price: 3990,
        image_url:
            "https://img.brandshop.ru/cache/products/d/dra00261-0_1104x1104.jpg",
    },
    {
        id: 3,
        brand: "Nike",
        model: "Force 1 lether",
        price: 9900,
        image_url:
            "https://img.brandshop.ru/cache/products/d/dh2925-111-0_1104x1104.jpg",
    },
    {
        id: 4,
        brand: "Nike",
        model: "ACG Air Mada",
        price: 4400,
        image_url:
            "https://img.brandshop.ru/cache/products/d/dh4439-001-0_248x248.jpg",
    },
    {
        id: 5,
        brand: "Nike",
        model: "Air Max 2090",
        price: 14690,
        image_url:
            "https://img.brandshop.ru/cache/products/c/ct1290-600-0_1104x1104.jpg",
    },
    {
        id: 6,
        brand: "Nike",
        model: "Air Max 270",
        price: 15490,
        image_url:
            "https://img.brandshop.ru/cache/products/z/zhenskie-krossovki-nike-air-max-270-black-anthracite-white-0_1104x1104.jpg",
    },
    {
        id: 7,
        brand: "Adidas Originals",
        model: "Ozweego",
        price: 12190,
        image_url:
            "https://img.brandshop.ru/cache/products/g/gy9020-0_1104x1104.jpg",
    },
    {
        id: 8,
        brand: "Adidas Originals",
        model: "Stan Smith",
        price: 9900,
        image_url:
            "https://img.brandshop.ru/cache/products/f/fx5502-0_1104x1104.jpg",
    },
    {
        id: 9,
        brand: "Adidas Originals",
        model: "Hamburg",
        price: 7690,
        image_url:
            "https://img.brandshop.ru/cache/products/f/fx5673-0_1104x1104.jpg",
    },
    {
        id: 10,
        brand: "Adidas Originals",
        model: "ZX 700",
        price: 9290,
        image_url:
            "https://img.brandshop.ru/cache/products/g/g62110-5_1104x1104.jpg",
    },
    {
        id: 11,
        brand: "Asics",
        model: "Japan S",
        price: 8790,
        image_url:
            "https://img.brandshop.ru/cache/products/1/1201a558-104-0_1104x1104.jpg",
    },
    {
        id: 12,
        brand: "Asics",
        model: "Gel Quantum S",
        price: 11590,
        image_url:
            "https://img.brandshop.ru/cache/products/1/1202a298-001-0_1104x1104.jpg",
    },
    {
        id: 13,
        brand: "Asics",
        model: "Red Flower",
        price: 8790,
        image_url:
            "https://img.brandshop.ru/cache/products/1/1201a296-700-0_1104x1104.jpg",
    },
    {
        id: 14,
        brand: "Goolden Goose",
        model: "Super-star",
        price: 42690,
        image_url:
            "https://img.brandshop.ru/cache/products/g/gmf00101-f002035-10770-0_1104x1104.jpg",
    },
    {
        id: 15,
        brand: "Goolden Goose",
        model: "Slide Classic",
        price: 40900,
        image_url:
            "https://img.brandshop.ru/cache/products/g/gmf00115-f000323-90100-0_1104x1104.jpg",
    },
    {
        id: 16,
        brand: "Goolden Goose",
        model: "Mid Star",
        price: 39190,
        image_url:
            "https://img.brandshop.ru/cache/products/g/gmf00122-f002108-10784-0_1104x1104.jpg",
    },
];

window.addEventListener("DOMContentLoaded", () => {
    const itemsList = document.querySelector(".item-list");
    const finder = document.querySelector("input");
    const navLinks = document.querySelectorAll(".nav-link");

    function renderAll(data) {
        itemsList.textContent = "";

        data.map((i) => {
            const added = '<button class="btn added">Добавлено</button>';
            const buy = '<button class="btn">Купить</button>';
            itemsList.insertAdjacentHTML(
                "afterbegin",
                `
            <li class="card-item" data-id="${i.id}">
                                <button class="fav-btn">
                                    <ion-icon name="star-outline"></ion-icon>
                                </button>
                                <img
                                    src="${i.image_url}"
                                    alt="Nike shoes"
                                    class="item-img"
                                />
                                <h2 class="brand">${i.brand}</h2>
                                <h3 class="model">${i.model}</h3>
                                <span class="price"
                                    >${i.price}
                                    <span class="r-icon"></span>
                                </span>
                                ${localStorage.getItem(i.id) ? added : buy}
                            </li>
            `
            );
        });

        document.querySelectorAll(".fav-btn").forEach((b) => {
            b.addEventListener("click", (e) => {
                let id = e.target.parentNode.parentNode.dataset.id;
                if (localStorage.getItem(`f${id}`)) {
                    localStorage.removeItem(`f${id}`);
                    e.target.classList.remove("clicked");
                } else {
                    localStorage.setItem(`f${id}`, true);
                    e.target.classList.add("clicked");
                }
            });
        });

        document.querySelectorAll(".btn").forEach((b) => {
            b.addEventListener("click", (e) => {
                let id = e.target.parentNode.dataset.id;
                if (localStorage.getItem(id)) {
                    localStorage.removeItem(id);
                    e.target.textContent = "Купить";
                } else {
                    localStorage.setItem(id, true);
                    e.target.textContent = "Добавлено";
                }
                e.target.classList.toggle("added");
            });
            b.addEventListener("mouseover", (e) => {
                if (e.target.textContent === "Добавлено") {
                    e.target.textContent = "Убрать";
                }
            });
            b.addEventListener("mouseout", (e) => {
                if (e.target.textContent === "Убрать") {
                    e.target.textContent = "Добавлено";
                }
            });
        });
    }
    renderAll(data);

    function renderFiltered(items) {
        renderAll(items);
    }
    data.f;

    finder.addEventListener("input", (e) => {
        if (!e.target.value) {
            renderAll(data);
            return;
        }
        let word = e.target.value.trim().toLowerCase();
        let finded = [];
        data.filter((el) => {
            if (el.model.toLowerCase().includes(e.target.value.toLowerCase())) {
                finded.push(el);
            }
        });
        renderFiltered(finded);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            itemsList.textContent = "";
            if (document.querySelector(".active")) {
                document.querySelector(".active").classList.remove("active");
            }
            e.target.classList.add("active");
            if (e.target.textContent.trim() === "Shop") {
                renderAll(data);
            }
            // if (e.target.textContent.trim() === "Cart") {
            // }
        });
    });
});
