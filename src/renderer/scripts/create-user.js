// forms/crearUsuario.js

export const initCrearUsuarioForm = () => {
    const form = document.getElementById('form-crear-usuario');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const data = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        password: form.password.value,
        phone: form.phone.value,
      };
  
      try {
        await window.api.createUser(data); // este método debería estar expuesto en preload.js
        alert('Usuario creado con éxito');
        form.reset();
      } catch (error) {
        alert('Error al crear usuario: ' + error.message);
      }
    });
  }

  