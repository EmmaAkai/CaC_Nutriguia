document.getElementById("registration_form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Busco input del html register para guardar su valor
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // aviso de casillas vacias
    if (firstname === "" || lastname === "" ||  email === "" || password === "" ) {
        let err = document.querySelector('#error');
        let html = `
                    <p style="color: red;>Hay campos sin completar</p>
                `;
                err.insertAdjacentHTML('beforeend',html); 
    } else {
        // aviso de registro exitoso.
        alert("¡Registro completo!");
    }
});
