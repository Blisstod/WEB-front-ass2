const basketList = document.getElementById('basket-list');
const totalElement = document.getElementById('total');

function updateBasketDisplay() {
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
	});

	totalElement.textContent = total;
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

document.getElementById('checkoutButton').addEventListener('click', () => {
	if(localStorage.getItem('basket')) {
		localStorage.clear();
		updateBasketDisplay();
	} else {
		alert('Your basket is empty!');
	}
});

updateBasketDisplay();

$('#closeButton').on('click', function() {
    window.location.href = 'index.html';
});
