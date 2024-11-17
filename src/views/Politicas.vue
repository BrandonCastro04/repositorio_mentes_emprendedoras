<template>
  <div class="section">
    <!-- Botón de Regresar en la parte superior derecha -->
    <button class="regresar-btn" @click="goBack">Regresar</button>
    <h1 class="section-title">Objetivos y Políticas Asociadas al Proyecto</h1>
    <p class="section-description">
      Objetivos y políticas asociadas al proyecto, según catálogo de Políticas Institucionales
    </p>
    <!-- Acordeón de Objetivos y Políticas -->
    <div class="accordion">
      <div class="accordion-item" v-for="(politica, index) in politicas" :key="index">
        <button 
          @click="toggleAccordion(index)" 
          class="accordion-title"
          :class="{ active: activeSection === index }">
          <span class="objetivo-numero">{{ politica.objetivo.split(' - ')[0] }}</span>
          {{ politica.objetivo.split(' - ')[1] }}
        </button>
        <div v-show="activeSection === index" class="accordion-content">
          <h3>Política asociada:</h3>
          <p class="accordion-text">{{ politica.politica }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoliticasView',
  data() {
    return {
      activeSection: null,
      politicas: [
        {
          objetivo: 'Objetivo 1.2.3 - Desarrollar, conjuntamente con los sectores y las comunidades, las capacidades locales que permitan contribuir con soluciones a los problemas de poblaciones específicas.',
          politica: 'Eje/Política: 1.2 - Generará y ampliará espacios dialógicos, que fomenten la reflexión y la acción con diferentes sectores de la sociedad, orientados a contribuir con el bienestar nacional e internacional.'
        },
        {
          objetivo: 'Objetivo 1.3.4 - Fortalecer la acción social universitaria en beneficio de las poblaciones y comunidades más vulnerables del país.',
          politica: 'Eje/Política: 1.3 - Fomentará que todas las actividades de vinculación con el sector externo respondan a los principios, propósitos y valores institucionales, así como a las necesidades del país.'
        },
        {
          objetivo: 'Objetivo 2.1.1 - Apoyará, en todas las regiones en las que tiene presencia, la apertura de carreras y posgrados innovadores, pertinentes con las necesidades de desarrollo científico y tecnológico y las características socioeconómicas y culturales del país.',
          politica: 'Eje/Política: 2.1 - Fortalecimiento de la docencia, la investigación y la acción social.'
        },
        {
          objetivo: 'Objetivo 2.6.2 - Fomentar el aprendizaje mediado por las tecnologías de información y comunicación (TIC), de manera que favorezca el éxito académico.',
          politica: 'Eje/Política: 2.6 - Aumentará la integración de herramientas tecnológicas de información y comunicación, al igual que la actualización constante en todos sus ámbitos, para su aplicabilidad en las actividades sustantivas.'
        },
        {
          objetivo: 'Objetivo 8.1.5 - Generar condiciones para la articulación de las acciones institucionales, las cuales fomenten capacidades locales que beneficien a los grupos sociales diversos, entre ellos, las comunidades indígenas y la población afrodescendiente.',
          politica: 'Eje/Política: 8.1 - Construirá una cultura inclusiva, basada en los valores y principios humanísticos con perspectiva de género, que considere la diversidad, la no discriminación y el respeto a los derechos y la dignidad de las personas.'
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeSection = this.activeSection === index ? null : index;
    },
    goBack() {
      this.$router.go(-1);  // Esto regresa a la página anterior en el historial
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

/* Estilo para la sección */
.section {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
}

/* Botón de Regresar en la parte superior derecha */
.regresar-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.regresar-btn:hover {
  background-color: #45a049;
}

/* Título de la sección */
.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
  letter-spacing: 1px;
  margin-top: 40px;
  line-height: 1.4;
}

/* Estilo para la descripción */
.section-description {
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px; /* Aumento el margen inferior aquí */
  color: #333;
  line-height: 1.5;
}

/* Estilos del acordeón */
.accordion {
  border-top: 1px solid #ddd;
}

.accordion-item {
  margin-bottom: 15px;
}

.accordion-title {
  width: 100%;
  text-align: left;
  background: #e2f7e2;
  border: none;
  padding: 15px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  transition: background-color 0.3s, transform 0.2s;
}

.accordion-title.active {
  background-color: #81c784;
  color: white;
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

.accordion-text {
  line-height: 1.5;
  font-size: 16px;
  margin-top: 10px;
  text-align: justify;
}

/* Color verde solo para el número del objetivo */
.objetivo-numero {
  color: #4CAF50;
  font-weight: bold;
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
}
</style>
