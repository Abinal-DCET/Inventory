// Inventory Management System Functionalities
// DOM Elements
const searchBar = document.getElementById("searchBar");
const sortOptions  = document.getElementById("sortOptions");
const sortButton = document.getElementById("sortButton");
const inventoryBody = document.getElementById("inventory-body");
const itemModal = document.getElementById("itemModal");
const itemName = document.getElementById("itemName");
const itemDetails = document.getElementById("itemDetails");
const itemQuantity = document.getElementById("itemQuantity");
const itemPrice = document.getElementById("itemPrice");
const itemType = document.getElementById("itemType");
const searchButton = document.querySelector(".search-bar button");
const addItemButton = document.querySelector(".button-container button");
const modalAddBtn = document.querySelector("#itemModal button:nth-of-type(1)");
const modalCancelBtn = document.querySelector("#itemModal button:nth-of-type(2)");

// Event listener
document.getElementById("searchBar").addEventListener("keyup", searchItems);
document.querySelector(".search-bar button").addEventListener("click", searchItems);
document.querySelectorAll(".filterCheckbox").forEach(checkbox => {
    checkbox.addEventListener("click", filterItems);
});
document.querySelector(".button-container button").addEventListener("click", openModal);
document.querySelector("#itemModal button:nth-of-type(1)").addEventListener("click", addItem);
document.querySelector("#itemModal button:nth-of-type(2)").addEventListener("click", closeModal);

// display table with existing products
// search product
// add product
// delete product
// sort product
// upload image
// open add modal
// open edit modal
// update table
// success/error message
