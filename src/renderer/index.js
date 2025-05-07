

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('link-inicio').addEventListener('click', () => navigate('get-users'));
    document.getElementById('link-createUser').addEventListener('click', () => navigate('create-user'));
});




const navigate = async(seccion) => {
    const content = document.getElementById('main-content');
    switch (seccion) {
      case 'get-users':
        await loadView('views/lista-users.html', './scripts/get-users.js', 'initGetUsers', content)
      break;

      case 'create-user':
        await loadView('views/create-user.html', './scripts/create-user.js', 'initCrearUsuarioForm', content)
      break;
    }
}

// Función reutilizable
const loadView = async (htmlPath, modulePath, initFnName, content) => {
  try {
    const res = await fetch(htmlPath);
    const html = await res.text();
    content.innerHTML = html;
    const module = await import(modulePath);
    if (module[initFnName]) {
      module[initFnName]();
    } else {
      console.error(`No se encontró la función ${initFnName} en el módulo ${modulePath}`);
    }
  } catch (error) {
    content.innerHTML = `<p>Error al cargar la vista: ${error}</p>`;
    console.error(error);
  }
};