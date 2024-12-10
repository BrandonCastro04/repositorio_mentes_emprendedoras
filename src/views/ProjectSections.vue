<template>
  <div class="main-container">
    <div class="project-sections">
      <h1>Secciones del Proyecto</h1>
      <!-- Menú desplegable con diseño vibrante -->
      <div class="dropdown">
        <button class="dropdown-toggle" @click="toggleDropdown">
          Explorar Secciones
        </button>
        <ul v-show="dropdownVisible" class="dropdown-menu">
          <li v-for="section in sections" :key="section.name">
            <button @click="navigateToSection(section.path)">
              {{ section.name }}
            </button>
          </li>
        </ul>
      </div>
      <!-- Botón para volver a la página principal -->
      <button class="home-button" @click="navigateToHome">
        Volver a la Página Principal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSections",
  data() {
    return {
      dropdownVisible: false,
      sections: [
        { name: "Descripción", path: "/descripcion" },
        { name: "Observaciones", path: "/observaciones" },
        { name: "Plan de Presupuesto", path: "/plan-presupuesto" },
        { name: "Encargados", path: "/encargados" },
        { name: "Estructura del Proyecto", path: "/estructura" },
        { name: "Población Beneficiada", path: "/poblacion" },
        { name: "Objetivos y Metas", path: "/objetivos-metas" },
        { name: "Ubicación Geográfica", path: "/ubicacion-geografica" },
        { name: "Políticas", path: "/politicas" },
        { name: "Metodología", path: "/metodologia" },
        { name: "Recursos y Disciplinas", path: "/recursos-disciplinas" },
        { name: "Evaluación", path: "/evaluacion" },
        { name: "Acciones por Proyecto", path: "/acciones-proyecto" },
        { name: "Objeto del Gasto", path: "/objeto-gasto" },
        { name: "Régimen Becario", path: "/regimen-becario" },
        { name: "Cronograma de Actividades", path: "/cronograma" },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    navigateToSection(path) {
      this.$router.push(path);
      this.dropdownVisible = false; // Cierra el menú al navegar
    },
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Fondo general con imagen */
.main-container {
  background-image: url('@/assets/img/mujer_emprendedora.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
}

/* Contenedor principal */
.project-sections {
  padding: 30px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semitransparente */
  border-radius: 15px;
  color: #333;
  max-width: 700px;
  margin: 20px auto;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

/* Título */
.project-sections h1 {
  font-size: 2em;
  color: #4a90e2; /* Azul vibrante */
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

/* Botón principal del menú */
.dropdown-toggle {
  padding: 12px 25px;
  font-size: 1.2em;
  background: linear-gradient(45deg, #ff7e5f, #feb47b); /* Degradado vibrante */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.dropdown-toggle:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}

/* Menú desplegable */
.dropdown-menu {
  list-style: none;
  padding: 0;
  margin-top: 15px;
  background: linear-gradient(45deg, #43cea2, #185a9d); /* Degradado verde-azul */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu button {
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 1em;
  text-align: left;
  background: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dropdown-menu button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Botón para volver */
.home-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background: linear-gradient(45deg, #4a90e2, #007bff); /* Degradado azul */
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s, box-shadow 0.2s;
}

.home-button:hover {
  transform: translateY(-3px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
}
</style>
