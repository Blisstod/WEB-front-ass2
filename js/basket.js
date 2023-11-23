const basketList = document.getElementById('basket-list');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkoutButton');

function updateBasketItemCount() {
    const basket = localStorage.getItem('basket');
    const itemCount = basket ? basket.split(',').length : 0;
    const itemCountElement = document.getElementById('basketItemCount');
    if (itemCountElement) {
        itemCountElement.textContent = itemCount;
    }
}

function addToBasket(planName, price) {
	const item = `${planName}-${price}`;
	const currentBasket = localStorage.getItem('basket') || "";
	localStorage.setItem('basket', currentBasket ? `${currentBasket},${item}` : item);
	alert(`${planName} added to basket`);
	updateBasketItemCount();
}

document.addEventListener('DOMContentLoaded', () => {
    updateBasketItemCount();
});

function updateBasketDisplay() {
	if (!localStorage.getItem('basket')){
		checkoutButton.disabled = true;
	}
	basketList.innerHTML = '';
	const basket = (localStorage.getItem('basket') || "").split(',');
	let total = 0;

	basket.forEach((item, index) => {
		if (item) {
			const [name, price] = item.split('-');
			const listItem = document.createElement('li');
			listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
			listItem.innerHTML = `
				<div>${name}</div>
				<div class = "d-flex align-items-end flex-column">$${price}
				<a onclick="removeFromBasket(${index})" class="text-danger">Remove</a></div>
			`;
			basketList.appendChild(listItem);
			total += parseFloat(price);
		}
		total = parseFloat(total.toFixed(2));
		totalElement.textContent = total;
	});
	totalElement.textContent = total;

	if (basket.length > 6) {
        basketList.classList.add('scrollable-basket');
    } else {
        basketList.classList.remove('scrollable-basket');
    }
}

function removeAll(){
	localStorage.removeItem('basket');
	updateBasketDisplay();
}

function removeFromBasket(index) {
	let basket = (localStorage.getItem('basket') || "").split(',');
	basket.splice(index, 1);
	localStorage.setItem('basket', basket.join(','));
	updateBasketDisplay();
}

checkoutButton.addEventListener('click', () => {
	if(localStorage.getItem('basket')) {
		localStorage.clear();
		updateBasketDisplay();
	} else {
		alert('Your basket is empty!');
	}
});

updateBasketDisplay();

$('#basketClose').on('click', function() {
    window.location.href = 'index.html';
});
