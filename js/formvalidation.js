document.addEventListener('DOMContentLoaded', function () {
    const subscribeButtons = document.querySelectorAll('.button'); // Select all buttons with the "button" class
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('closePopup');
    const overlay = document.getElementById('overlay');
    const popupForm = document.getElementById('popupForm');

    // Add event listeners to each "subscribe now" button
    subscribeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    popupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        validateInputs();
    });

    const validateInputs = () => {
        const phoneInput = phone.value.trim();
        const emailInput = email.value.trim();
        const cardNumberInput = cardNumber.value.trim();
        const cvvInput = cvv.value.trim();

        if (phoneInput === '') {
            setError(phone, 'Phone number is required!');
        } else {
            setSuccess(phone);
        }

        if (emailInput === '') {
            setError(email, 'Email is required!');
        } else if (!isValidEmail(emailInput)) {
            setError(email, 'Provide a valid email!');
        } else {
            setSuccess(email);
        }

        if (cardNumberInput === '') {
            setError(cardNumber, 'Card Number is required!');
        } else if (cardNumberInput.length !== 16 || !/^\d{16}$/.test(cardNumberInput)) {
            setError(cardNumber, 'Card Number should be 16 characters, containing only digits!');
        } else {
            setSuccess(cardNumber);
        }

        if (cvvInput === '') {
            setError(cvv, 'CVV is required!');
        } else if (cvvInput.length !== 3 || !/^\d{3}$/.test(cvvInput)) {
            setError(cvv, 'CVV should be 3 characters, containing only digits!');
        } else {
            setSuccess(cvv);
        }
    }

    function isValidEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }
});
