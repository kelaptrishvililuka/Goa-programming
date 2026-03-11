let count = 0;

const countEl = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const addToCartBtn = document.querySelector(".add-to-cart");
const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnails img");

plusBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
});

minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countEl.textContent = count;
    }
});

addToCartBtn.addEventListener("click", () => {
    if (count === 0) {
        alert("Please select a quantity");
        return;
    }

    alert("Item added to cart: " + count + " products");
});

thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        mainImage.src = img.src.replace("-thumbnail", "");
    });
});