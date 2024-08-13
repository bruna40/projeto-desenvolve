const URL = 'https://back-projeto-desenvolve.onrender.com/send-email';

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function disableButton(button) {
    button.disabled = true;
}

function enableButton(button) {
    button.disabled = false;
}

export async function sendEmail(event) {
    event.preventDefault();

    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const buttonText = document.getElementById('buttonText');
    const loader = document.getElementById('loader');
    const email = emailInput.value;


    disableButton(submitBtn);
    buttonText.style.display = 'none';
    loader.style.display = 'block';

    if (!email) {
        displayErrorMessage('Parece que você esqueceu de colocar seu e-mail. Não queremos perder a chance de manter você atualizado!');

        enableButton(submitBtn);
        buttonText.style.display = 'inline';
        loader.style.display = 'none';
        return;
    }

    if (!isValidEmail(email)) {
        displayErrorMessage('Por favor, insira um endereço de e-mail válido.');

        enableButton(submitBtn);
        buttonText.style.display = 'inline';
        loader.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ to: email }),
        });

        if (response.ok) {
            emailInput.value = '';
            displaySuccessMessage("E-mail enviado com sucesso! Alguém, por favor, dê uma estrelinha para esse e-mail!");
        } else {
            const errorData = await response.json();
            displayErrorMessage(`Erro ao enviar o e-mail: ${errorData.error}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        displayErrorMessage('Erro ao enviar o e-mail.');
    } finally {

        buttonText.style.display = 'inline';
        loader.style.display = 'none';
    }
}

function displaySuccessMessage(message) {
    const successContainer = document.getElementById('successMessage');
    if (successContainer) {
        successContainer.textContent = message;
        successContainer.classList.remove('hide');
        successContainer.classList.add('show');

        setTimeout(() => {
            successContainer.classList.remove('show');
            successContainer.classList.add('hide');
        }, 5000);
    } else {
        console.error('Elemento #successMessage não encontrado.');
    }
}

function displayErrorMessage(message) {
    const errorContainer = document.getElementById('errorMessage');
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.classList.remove('hide');
        errorContainer.classList.add('show');

        setTimeout(() => {
            errorContainer.classList.remove('show');
            errorContainer.classList.add('hide');
        }, 5000);
    } else {
        console.error('Elemento #errorMessage não encontrado.');
    }
}

export function validateEmailInput() {
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const email = emailInput.value;


    submitBtn.disabled = !isValidEmail(email);
}
