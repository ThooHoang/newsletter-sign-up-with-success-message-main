const newsletter = document.querySelector('.newsletter');
const errorMessage = document.querySelector('.error-message');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('subscribe');
const successMessage = document.querySelector('.success-message');
const dismissBtn = document.getElementById('dismiss');
const yourEmail = document.getElementById('your-email')

function submit () {
    const email = emailInput.value.trim();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!email) {
        errorMessage.classList.remove('hidden')
       
    }
    else if (!isEmailValid) {
        errorMessage.classList.remove('hidden')
      

    }
    else {
        yourEmail.innerHTML = email
        newsletter.classList.add('hidden')
        successMessage.classList.remove('hidden')
       
    }
}


submitBtn.addEventListener('click', (event) => {
    event.preventDefault()
    submit()
})


emailInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        submit()
    }
})


dismissBtn.addEventListener('click', () => {
    newsletter.classList.remove('hidden')
    successMessage.classList.add('hidden')
    emailInput.value = ''
    errorMessage.classList.add('hidden')

})