const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "DEADPOOL",
    price: 119,
    colors: [
      {
        code: "black",
        img: "img/Deadpool.webp",
      },
      {
        code: "darkblue",
        img: "img/Deadpool1.webp",
      },
    ],
 },
{
  id: 2,
  title: "BATMAN",
  price: 149,
  colors: [
    {
      code: "lightgray",
      img: "img/Batman.webp",
    },
    {
      code: "green",
      img: "img/Batman1.webp",
    },
  ],
},
{
  id: 3,
  title: "ITACHI",
  price: 109,
  colors: [
    {
      code: "lightgray",
      img: "img/Itachi.webp",
    },
    {
      code: "green",
      img: "img/Itachi1.webp",
    },
  ],
},
{
  id: 4,
  title: "BUMBLEBEEr",
  price: 129,
  colors: [
    {
      code: "black",
      img: "img/Bumblebee.webp",
    },
    {
      code: "lightgray",
      img: "img/Sneakers.webp",
    },
  ],
},
{
  id: 5,
  title: "WOLVERINE X DEADPOOL",
  price: 99,
  colors: [
    {
      code: "gray",
      img: "img/Wolverine.webp",
    },
    {
      code: "black",
      img: "img/Wolverine1.webp",
    },
  ],
},
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
item.addEventListener("click", () => {
  //change the current slide
  wrapper.style.transform = `translateX(${-100 * index}vw)`;

  //change the choosen product
  choosenProduct = products[index];

  //change texts of currentProduct
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "$" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;

  //assing new colors
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });
});
});

currentProductColors.forEach((color, index) => {
color.addEventListener("click", () => {
  currentProductImg.src = choosenProduct.colors[index].img;
});
});

currentProductSizes.forEach((size, index) => {
size.addEventListener("click", () => {
  currentProductSizes.forEach((size) => {
    size.style.backgroundColor = "white";
    size.style.color = "black";
  });
  size.style.backgroundColor = "black";
  size.style.color = "white";
});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
payment.style.display = "flex";
});

close.addEventListener("click", () => {
payment.style.display = "none";
});