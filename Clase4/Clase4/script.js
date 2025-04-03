// Función para obtener los usuarios desde la API
async function fetchUsers(page) {   // page --> se lo pasa como parametro al url
    const API_URL = `https://reqres.in/api/users?page=${page}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();    // AWAIT --> espera a que la respuesta llegue 
        
        if (data.data) {
            displayUsers(data.data); // Llamamos a la función para mostrar los usuarios
        } else {
            console.error("No se encontraron usuarios en la respuesta.");
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para mostrar los usuarios en la tabla
function displayUsers(users) {
    const tableBody = document.getElementById("user-table");
    tableBody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos

    users.forEach(user => {
        const row = document.createElement("tr");  //agrega una fila por cada usuario
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Cargar usuarios de la página 1 por defecto al iniciar
fetchUsers(1);    // apenas se abre la pagina, se muestra la pagina 1 de usuarios automaticamente 

