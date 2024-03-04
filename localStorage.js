const addBtn = document.getElementById("addBtn");
const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const ul = document.getElementById("li-container");

function getInputValue() {
    const productValue = product.value;
    const quantityValue = quantity.value;
    showProducts(productValue, quantityValue);
    saveProductInLocalStorage(productValue, quantityValue);
}
function showProducts(product,quantity) {
    const li = document.createElement("li");
    li.innerHTML = `${product}: ${quantity}`;
    ul.appendChild(li)
}
function isAlreadyExistInStorage () {
    const isExistInLocalStorage = localStorage.getItem("card");
    let newCard = {};
    if (isExistInLocalStorage) {
        newCard = JSON.parse(isExistInLocalStorage)
    }
    for (const value in newCard) {
        showProducts(value,newCard[value])
    }
    return newCard;
}
function saveProductInLocalStorage(product, quantity) {
    let card = isAlreadyExistInStorage();
    card[product] = quantity;
    const cardAsJson = JSON.stringify(card);
    localStorage.setItem("card",cardAsJson)
}





addBtn.addEventListener('click',getInputValue)
