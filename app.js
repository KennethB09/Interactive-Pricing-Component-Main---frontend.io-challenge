const inputRange = document.getElementById('inputRange');
const pageViews = document.getElementById('pageViews');
const monthlyPrice = document.getElementById('price');
const slideBtn = document.getElementById('slideBtn');
const views = ['10K', '50K', '100K', '500K', '1M'];
const price = [8, 12, 16, 24, 36];

let monthlyBill = false;

monthlyPrice.innerHTML = price[inputRange.value];
pageViews.innerHTML = views[inputRange.value];

slideBtn.onchange = () => {
    if (monthlyBill === false) {
        monthlyBill = true;
    } else {
        monthlyBill = false;
    }
};

inputRange.addEventListener('input', () => {
    const inputValue = parseInt(inputRange.value);

    if (inputValue >= 0 && inputValue < price.length && monthlyBill === false) {
        monthlyPrice.innerHTML = price[inputRange.value];
        pageViews.innerHTML = views[inputRange.value];
    } else {
        monthlyPrice.innerHTML = price[inputRange.value] * 0.75;
        pageViews.innerHTML = views[inputRange.value];
    }
});

inputRange.oninput = function() {
    var value = (this.value-this.min) / (this.max-this.min) * 100;
    this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
};