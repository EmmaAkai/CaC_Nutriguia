document.getElementById("registration_form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Busco input del html register para guardar su valor
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;
    const country = document.getElementById("country").value;
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    // aviso de casillas vacias
    if (firstname === "" || lastname === "" ||  email === "" || password === ""||  birthdate=== "" || country=== "" ||weight === "" || height ===""  ) {
        alert("Por favor completa todos lo datos.");
    } else {
        // aviso de regtro exitoso.
        alert("¡Registro completo!");
    }
});
