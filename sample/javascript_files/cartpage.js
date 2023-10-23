let addedBagItemsObjects; // Define the variable here and initialize as an empty array

loadItems();
displayBagItemProducts();
priceSummary();


function loadItems(){
    addedBagItemsObjects = addedBagItems.map(item => {
        for (let i = 0; i < products.length; i++) {
            if (item === products[i].id) {
                return products[i];
            }
        }
    });
}

function priceSummary() {
    let priceSummaryContainer = document.querySelector('.right_cart');
    let totalMRP = 0;
    let discountMRP = 0; // Corrected variable name
    let convenience = 99; // Corrected variable name

    addedBagItemsObjects.forEach(item => {
        totalMRP += item.original_price;
        discountMRP += item.original_price - item.discount_price;
    });

    let totalAmount = totalMRP - discountMRP + convenience;

    priceSummaryContainer.innerHTML = `
    <div class="right_container">
        <div class="top_right_container">
            <div class="summary_info">
                <p>Price Details ( ${addedBagItemsObjects.length} items )</p>
                <h4>Total MRP</h4>
                <h4>Discount on MRP</h4>
                <h4>Convenience Fee</h4>
                <h4>Total Amount</h4>
            </div>
            <div class="summary_price">
                <h4 class="product_originalPrice">&#x20B9 ${totalMRP}</h4>
                <h4>&#x20B9 ${discountMRP}</h4>
                <h4>${convenience}</h4>
                <h4>${totalAmount}</h4>
            </div>
        </div>
        <div class="bottom_right_container">
            <button>Place Your Order</button>
        </div>
    </div>`;
}



function displayBagItemProducts(){
    let container = document.querySelector('.left_cart');
    let innerHTML = '';
    addedBagItemsObjects.forEach(element => {
        innerHTML += generateHTML(element);
    });
    container.innerHTML = innerHTML;
}

// function removeItem(itemId){
//     addedBagItems = addedBagItems.filter(productsId => productsId != itemId)
//     localStorage.setItem('addedBagItems', JSON.stringify(addedBagItems));
//     loadItems();
//     displayBagItemProducts();   
//     bagCounter();
// }

function removeItem(itemId) {
    const index = addedBagItems.indexOf(itemId); // Find the index of the item to remove
    if (index > -1) {
        addedBagItems.splice(index, 1); // Remove one item at the found index
    }

    localStorage.setItem('addedBagItems', JSON.stringify(addedBagItems));
    loadItems();
    displayBagItemProducts();
    bagCounter();
    priceSummary()
}



function generateHTML(item){
    return `
    <div class="left_container">
        <div class="image_container">
            <img src="../${item.image}">
        </div>
        <div class="info_container">
            <i class="ri-close-line" onclick="removeItem(${item.id});"></i>
            <div class="left_info_container">
                <h3>${item.name}</h3>
                <p>FOR ${item.gender}</p>
                <span class="product_originalPrice">&#x20B9 ${item.original_price}</span>
                <span class="product_discountPrice">&#x20B9 ${item.discount_price}</span>
                <span class="product_discountPercentage">( ${item.discount_percentage} % OFF)</span>
                <button>Add to Wishlist</button>
            </div>
        </div>
    </div>`
}




