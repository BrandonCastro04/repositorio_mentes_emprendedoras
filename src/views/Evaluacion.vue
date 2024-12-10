<template>
  <div class="section">
    <button class="back-button" @click="goBack">Regresar</button>
    <h1>Evaluación</h1>

    <div v-for="(evaluacion, index) in evaluaciones" :key="index" class="evaluacion-item">
      <button class="toggle-button" @click="toggleEvaluacion(index)">
        {{ evaluacion.titulo }}
      </button>
      <div v-if="visibleEvaluaciones[index]" class="info-content">
        <p>{{ evaluacion.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EvaluacionView',
  data() {
    return {
      evaluaciones: [
        {
          titulo: 'Evaluación de la propuesta',
          descripcion: `
            El proyecto implementará un instrumento de evaluación para determinar la relevancia del mismo para los participantes, 
            así como el nivel de aprovechamiento académico que éstos obtienen. Este análisis permitirá no solo medir el impacto 
            directo en los participantes, sino también evaluar su contribución al ámbito académico.
            Además, como parte de sus objetivos, el proyecto se compromete a generar material académico de alta calidad. 
            Este material no solo servirá como un recurso valioso para la comunidad universitaria, sino que también estará destinado 
            a brindar información detallada sobre la realidad local, centrándose especialmente en temas relacionados con la tecnología 
            y su aplicación en el desarrollo empresarial.
            La publicación de este material académico no solo facilitará la generación de nuevos proyectos dentro de la comunidad 
            universitaria, sino que también contribuirá a mejorar la comprensión y el conocimiento sobre el entorno empresarial 
            local, promoviendo así un mayor aprovechamiento de la tecnología para el crecimiento y la innovación en las empresas de la región.
          `
        },
        {
          titulo: 'Evaluación por parte de los participantes',
          descripcion: `
            Mediante un instrumento de evaluación se conocerá la importancia del proyecto para los participantes, así como el 
            grado de aprovechamiento en calidad de aporte académico. Por otra parte, el proyecto debe dar como resultados la publicación 
            de material académico, que pueda ser utilizado por la comunidad universitaria para proponer nuevos proyectos o dar información 
            más precisa en temas de realidad local, enfocados a tecnología y su aprovechamiento para el desarrollo de las empresas.
          `
        }
      ],
      visibleEvaluaciones: {}
    };
  },
  methods: {
    toggleEvaluacion(index) {
      this.visibleEvaluaciones = {
        ...this.visibleEvaluaciones,
        [index]: !this.visibleEvaluaciones[index]
      };
    },
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style scoped>
.section {
  position: relative;
  padding: 20px;
  font-size: 14px;
  text-align: justify;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
}

.back-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 15px;
  font-size: 14px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #0056b3;
}

.evaluacion-item {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.toggle-button {
  width: 100%;
  text-align: left;
  background-color: #188f4d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.info-content {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f1f1f1;
}

@media (max-width: 768px) {
  .section {
    padding: 15px;
    font-size: 12px;
  }

  .back-button {
    top: 5px;
    right: 5px;
    padding: 8px 12px;
    font-size: 12px;
  }

  .toggle-button {
    font-size: 14px;
    padding: 8px;
  }

  .info-content {
    padding: 8px;
  }
}
</style>
