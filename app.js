function updateProductNumber(product, price, isIncensing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncensing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // Update price
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;
}

// Handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// Handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});