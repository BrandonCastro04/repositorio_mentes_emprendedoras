<template>
  <div class="main-container">
    <div class="project-sections">
      <h1>Secciones del Proyecto</h1>
      <div class="buttons-container">
        <button
          v-for="section in sections"
          :key="section.name"
          @click="navigateToSection(section.path)"
        >
          {{ section.name }}
        </button>
        <!-- Botón para volver a la página principal -->
        <button @click="navigateToHome">
          Volver a la Página Principal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSections",
  data() {
    return {
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
    navigateToSection(path) {
      this.$router.push(path);
    },
    navigateToHome() {
      this.$router.push("/"); // Redirige a la página principal
    },
  },
};
</script>

<style scoped>
  /* Contenedor de pantalla completa con fondo */
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
    font-family: Arial, sans-serif;
  }

  .project-sections {
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    color: #fff;
    max-width: 900px;
    margin: 40px auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .buttons-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }

  button {
    padding: 12px 25px;
    font-size: 1em;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-weight: 500;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  }

  button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
</style>
