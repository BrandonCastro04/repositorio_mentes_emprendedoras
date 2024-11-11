<template>
  <div class="section">
    <!-- Botón Regresar en la esquina superior derecha -->
    <button @click="goBack" class="back-btn">
      Regresar
    </button>

    <h1 class="section-title">Objetivos y Metas</h1>
    <p class="section-description">
      Promover el desarrollo de habilidades tecnológicas y empresariales en mujeres emprendedoras en situación de riesgo social y ruralidad en la provincia de Guanacaste.
    </p>

    <!-- Acordeón personalizado -->
    <div class="accordion">
      <div class="accordion-item">
        <button @click="toggleAccordion('general')" class="accordion-title">
          Objetivo General
        </button>
        <div v-show="activeSection === 'general'" class="accordion-content">
          <p>Fomentar el espíritu emprendedor y facilitar la inserción laboral en el ámbito digital a través de programas formativos innovadores.</p>
        </div>
      </div>

      <div class="accordion-item">
        <button @click="toggleAccordion('especificos')" class="accordion-title">
          Objetivos Específicos
        </button>
        <div v-show="activeSection === 'especificos'" class="accordion-content">
          <table>
            <thead>
              <tr>
                <th>Objetivo</th>
                <th>Meta</th>
                <th>Indicadores</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Generar conocimientos en herramientas digitales</td>
                <td>Mujeres con conocimientos básicos en tecnologías de la información</td>
                <td>
                  <ul>
                    <li>Taller de Microsoft Excel</li>
                    <li>Taller de redes sociales</li>
                    <li>Taller de herramientas audiovisuales</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Fortalecer habilidades cuantitativas y cualitativas</td>
                <td>50 horas de taller en habilidades cualitativas</td>
                <td>
                  <ul>
                    <li>Liderazgo y toma de decisiones</li>
                    <li>Comunicación asertiva</li>
                    <li>Servicio al cliente</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>50 horas de capacitación en habilidades cuantitativas</td>
                <td>Análisis de información, desarrollo de ideas de negocios</td>
                <td>
                  <ul>
                    <li>Análisis de información</li>
                    <li>Desarrollo de ideas de negocios</li>
                    <li>Toma de decisiones</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObjetivosMetas',
  data() {
    return {
      activeSection: null
    };
  },
  methods: {
    toggleAccordion(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
    goBack() {
      this.$router.go(-1);  // Regresa a la página anterior en el historial
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9; /* Fondo de color claro */
}

/* Estilo para la sección */
.section {
  position: relative; /* Esto es necesario para que el botón esté posicionado dentro de la sección */
  max-width: 800px;
  margin: 0 auto; /* Centrado en la página */
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 60px; /* Espacio en la parte superior */
}

/* Botón "Regresar" en la esquina superior derecha */
.back-btn {
  position: absolute; /* Para asegurarse de que quede en la esquina superior derecha */
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: #45a049;
}

/* Título de la sección */
.section-title {
  font-size: 36px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 40px;  /* Espacio mayor encima del título */
}

/* Descripción de la sección */
.section-description {
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;  /* Espacio entre el título y la descripción */
}

/* Estilos del acordeón */
.accordion {
  border-top: 1px solid #ddd;
}

.accordion-item {
  margin-bottom: 15px;
}

/* Estilo del título del acordeón */
.accordion-title {
  width: 100%;
  text-align: left;
  background: #e2f7e2;
  border: none;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.2s;
  border-radius: 8px;
}

.accordion-title:hover {
  background-color: #a7f7a7;
  transform: translateX(5px);
}

.accordion-content {
  padding: 15px;
  font-size: 16px;
  background-color: #ffffff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

/* Estilos para la tabla dentro del acordeón */
.accordion-content table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.accordion-content th,
.accordion-content td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.accordion-content th {
  background-color: #f1f1f1;
  font-weight: bold;
  color: #333;
}

.accordion-content tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Estilos para pantallas pequeñas */
@media (max-width: 768px) {
  .section {
    padding: 20px;
  }

  .section-title {
    font-size: 30px;
  }

  .section-description {
    font-size: 16px;
  }

  .accordion-title {
    font-size: 16px;
  }

  .accordion-content {
    font-size: 14px;
  }

  .back-btn {
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>
