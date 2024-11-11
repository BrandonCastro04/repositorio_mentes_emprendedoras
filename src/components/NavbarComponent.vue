<template>
  <div>
    <button @click="toggleSidebar" class="menu-btn">☰</button>
    <nav :class="['sidebar', { 'active': isSidebarOpen }]">
      <div class="logo">Empower</div>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotras</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Historias de Éxito</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
    <div v-if="isSidebarOpen" class="overlay" @click="toggleSidebar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Botón para abrir la barra lateral */
.menu-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000; /* Para que el botón esté por encima de la barra lateral */
}

/* Estilos de la barra lateral */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px; /* Fuera de la pantalla por defecto */
  width: 250px;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: left 0.3s ease;
  z-index: 999; /* Para estar por encima del contenido */
}

.sidebar.active {
  left: 0; /* Se mueve la barra lateral dentro de la pantalla */
}

.nav-links {
  list-style-type: none;
  padding: 0;
}

.nav-links li {
  margin: 20px 0;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Logo de la barra lateral */
.logo {
  font-size: 24px;
  margin-bottom: 30px;
}

/* Overlay cuando la barra lateral está abierta */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Por debajo de la barra lateral */
}
</style>
