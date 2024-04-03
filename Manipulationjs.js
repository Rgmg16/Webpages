const redColor = document.querySelector(".red");
const blackColor = document.querySelector(".black");
const imageCard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const grayColor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const whiteColor = document.querySelector(".white");
const newPrice = document.querySelector(".new-price");

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("./Red benz.jpg")';
    newPrice.textContent = "$138,000";
});

grayColor[0].addEventListener("click", function () {
    cartButton.style.backgroundColor = "gray";
    itemTag.style.backgroundColor = "gray";
    imageCard.style.backgroundImage = 'url("./Grey benz.jpg")';
    newPrice.textContent = "$140,000";
});

blackColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "black";
    itemTag.style.backgroundColor = "black";
    imageCard.style.backgroundImage = 'url("./Black benz.jpg")';
    newPrice.textContent = "$139,000";
});

whiteColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "white";
    itemTag.style.backgroundColor = "white";
    imageCard.style.backgroundImage = 'url("White benz.png")';
    newPrice.textContent = "$137,000";
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", cart);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);