export const initGetUsers = async () => {
    try {
      const users = await window.api.getUsers();
      const ul = document.getElementById('lista-usuarios');
  
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.firstname} ${user.lastname} (${user.email})`;
        ul.appendChild(li);
      });
    } catch (error) {
      const content = document.getElementById('main-content');
      content.innerHTML = `<p>Error al obtener los usuarios: ${error}</p>`;
    }
};
  