document.addEventListener("DOMContentLoaded", function () {
    const url = "https://jsonplaceholder.typicode.com/users";
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("lastname").value;
        const nacimiento = document.getElementById("birthday").value;

        const datos = {
            name: nombre,
            lastname: apellido,
            birthday: nacimiento
        };

        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        fetch(url, opciones)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    });
});