document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro-form");
    const respuestaDiv = document.getElementById("response");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("lastname").value;
        const fechaNacimiento = document.getElementById("birthday").value;

        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento,
        };

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        })
            .then((response) => response.json())
            .then((data) => {
                respuestaDiv.innerHTML = `Respuesta del servidor: <pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch((error) => {
                respuestaDiv.innerHTML = `Error: ${error.message}`;
            });
    });
});
