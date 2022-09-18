const form = document.querySelector('.login-form');

form.addEventListener('submit', a => {
    a.preventDefault();

    const {
        elements: { email, password },
    } = a.currentTarget;


    if (email.value === '' || password.value === '') {
        return alert('Not all form fields are filled!');
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    a.currentTarget.reset();
});