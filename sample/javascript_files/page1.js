let addedBagItems;

let savedBagItems = localStorage.getItem('addedBagItems')

if(savedBagItems){
    addedBagItems = JSON.parse(savedBagItems);
} else {
    addedBagItems = [];
}

displayProductsOnPage();
bagCounter();

function addToBag(id){
    addedBagItems.push(id);
    bagCounter();
    localStorage.setItem('addedBagItems', JSON.stringify(addedBagItems));
}

function bagCounter(){
    let addToBagCounter = document.querySelector('.add_to_bag_counter');
    addToBagCounter.innerText = addedBagItems.length
}

function displayProductsOnPage(){

    let productContainerEl = document.querySelector('.product_container');
    if(!productContainerEl){
        return;
    }
    let innerHTML=' ';
    products.forEach(element => {
        innerHTML+=`
        <div class="product_box">
            <div class="product_image"><img src="${element.image}"></div>
            <div class="product_info">
                <div class="product_rating"> ${element.rating} ⭐ (${element.rating_count})</div>
                <div class="product_company"><h2>${element.company}</h2></div>
                <div class="product_name"> ${element.name}</div>
                <div class="productGender_category"> For ${element.gender}</div>
                <div class="product_pricing">
                    <span class="product_originalPrice">&#x20B9 ${element.original_price}</span>
                    <span class="product_discountPrice">&#x20B9 ${element.discount_price}</span>
                    <span class="product_discountPercentage">( ${element.discount_percentage} % OFF)</span>
                </div>
            </div>
            <button onclick="addToBag(${element.id});">Add To Bag</button>
        </div>`
    
    });
    
    productContainerEl.innerHTML=innerHTML
}

// // Function to show the sorting options dropdown
// function showSortOptions() {
//     var sortOptions = document.getElementById('sortOptions');
//     if (sortOptions.style.display === 'block') {
//         sortOptions.style.display = 'none';
//     } else {
//         sortOptions.style.display = 'block';
//     }
// }

// // Function to sort products by price (asc for lowest, desc for highest)
// function sortByPrice(order) {
//     if (order === 'asc') {
//         products.sort((a, b) => a.original_price - b.original_price);
//     } else if (order === 'desc') {
//         products.sort((a, b) => b.original_price - a.original_price);
//     }

//     // Update the displayed products after sorting
//     displayProductsOnPage();
// }

// function sortByRecommended() {
//     products.sort((a, b) => {
//         // Sort by rating in descending order (higher rating first)
//         if (a.rating > b.rating) return -1;
//         if (a.rating < b.rating) return 1;

//         // If ratings are equal, sort by rating counts in descending order
//         if (a.rating_count > b.rating_count) return -1;
//         if (a.rating_count < b.rating_count) return 1;

//         return 0; // Products have the same rating and rating counts
//     });

//     // Re-display products on the page with the new order
//     displayProductsOnPage();
// }