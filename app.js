const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menu = document.querySelector(".section-center");

function generateMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.classList.add(item.category);

  const image = document.createElement("img");
  image.src = item.img;
  image.alt = item.title;
  image.classList.add("photo");

  const itemInfo = document.createElement("div");
  itemInfo.classList.add("item-info");

  const header = document.createElement("header");

  const title = document.createElement("h2");
  title.classList.add("title");
  title.textContent = item.title;

  const price = document.createElement("h4");
  price.classList.add("price");
  price.textContent = item.price;

  header.appendChild(title);
  header.appendChild(price);

  const underline = document.createElement("div");
  underline.classList.add("underline");

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("item-desc");
  itemDesc.textContent = item.desc;

  itemInfo.appendChild(header);
  itemInfo.appendChild(underline);
  itemInfo.appendChild(itemDesc);

  menuItem.appendChild(image);
  menuItem.appendChild(itemInfo);

  return menuItem;
};

function renderMenu(items) {
  items.forEach(item => {
    const menuItem = generateMenuItem(item);
    console.log(menuItem);
    menu.appendChild(menuItem);
  });
}

renderMenu(items);

const category = ['all'];
items.forEach(item =>
  category.push(item.category));

const categoryList = new Set(category);

const buttons = document.querySelectorAll(".btn");

const menuItems = document.querySelectorAll(".menu-item");

buttons.forEach(btn => {
  const allitems = document.querySelectorAll(".menu-item");
  console.log(allitems);
  btn.addEventListener('click', () => {
    if (btn.textContent == "all") {
      allitems.forEach(item => {
        item.style.display = 'grid';
      });
    }
    else {
      const categoryItems = document.querySelectorAll(`.${btn.innerHTML}`);
      console.log(categoryItems);
      allitems.forEach(item => {
        item.style.display = 'none';
      });
      categoryItems.forEach(item => {
        item.style.display = 'grid';
      });
    }
  });
});