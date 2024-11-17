<template>
  <section class="poblacion-beneficiada">
    <div class="background-overlay">
      <button class="back-button" @click="goBack">Regresar</button>
      <h1>Población Beneficiada</h1>

      <div class="card">
        <h2>Cantidad de población beneficiada:</h2>
        <p>100 personas</p>
      </div>

      <div class="card">
        <h2>¿Quiénes se benefician?</h2>
        <p>
          Grupos de mujeres emprendedoras en vulnerabilidad social de los cantones 
          de Santa Cruz, Bagaces, La Cruz, Liberia y Hojancha; todos en la provincia de Guanacaste.
        </p>
      </div>

      <div class="card expandable">
        <h2 @click="toggleSection('poblacion')">Beneficios para la población</h2>
        <p v-show="expandedSection === 'poblacion'">
          El proyecto de TCU no solo implica la producción de recursos, sino también el aprovechamiento de 
          los conocimientos adquiridos por los estudiantes a lo largo de sus estudios universitarios. Este 
          enfoque no solo abre nuevas oportunidades para el desarrollo de ideas de negocios en línea con 
          las demandas del mercado actual, sino que también fomenta el crecimiento profesional, especialmente 
          en grupos subrepresentados como el de las mujeres. Además, la integración comunitaria promovida por el proyecto no solo incrementa la competitividad de la organización, sino que también
          genera beneficios monetarios tangibles. Participar en eventos y espacios destinados a la divulgación de productos y servicios no solo aumenta la
          visibilidad, sino que también contribuye a la creación de redes de microempresarios, facilitando el intercambio de conocimientos y experiencias entre
          ellos. Es importante destacar que el proyecto también promueve el cuidado de los recursos naturales, fomentando la conciencia sobre la equidad
          social y económica. Bajo un compromiso social y sostenible, se busca generar una conciencia productiva que tenga en cuenta el impacto en la
          comunidad y el medio ambiente. En resumen, el proyecto de TCU no solo busca el éxito económico, sino que también aspira a generar un impacto
          positivo en la sociedad y el entorno natural.
        </p>
      </div>

      <div class="card expandable">
        <h2 @click="toggleSection('universidad')">Beneficios para la Universidad</h2>
        <p v-show="expandedSection === 'universidad'">
          La Universidad de Costa Rica, como institución benemérita de la patria, fundamenta su labor en 
          tres pilares fundamentales: la Docencia, la Acción Social y la Investigación. En este contexto, 
          la realización de proyectos de Acción Social adquiere una relevancia vital, pues permite comprender 
          la realidad actual de las distintas regiones del país proporciona capacitación en temas contemporáneos. Esta iniciativa cobra aún más importancia
          cuando la universidad tiene presencia directa en dichas zonas. Uno de los principales beneficios que la Universidad obtiene de este Trabajo
          Comunitario es su capacidad para demostrar a la sociedad su compromiso con el desarrollo regional. Al impulsar proyectos que fortalezcan los
          sectores productivos del país y les provean de herramientas modernas, la universidad contribuye activamente al progreso de estas áreas. Además, la
          integración de al menos 25 estudiantes de diversas disciplinas en estos proyectos cada semestre proporciona una invaluable oportunidad para que
          estos jóvenes se sumerjan en las comunidades. Esto les permite pasar de la teoría a la práctica, comprendiendo de primera mano la realidad de estas
          comunidades y preparándolos para ser agentes de cambio en su futura labor profesional. El beneficio no es unilateral, ya que el sector académico
          también se ve favorecido. Los resultados obtenidos en estos proyectos pueden ser utilizados para la implementación de nuevas iniciativas en Acción
          Social, Investigación y Docencia. Esto permite a los estudiantes conocer de manera concreta la situación actual y capacitarlos para abordar y resolver
          las problemáticas sociales presentes en estas comunidades. En resumen, el Trabajo Comunitario no solo fortalece el vínculo entre la universidad y la
          sociedad, sino que también enriquece la formación académica de los estudiantes y fomenta el desarrollo integral de las comunidades.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PoblacionBeneficiada",
  data() {
    return {
      expandedSection: null, // Para gestionar las secciones desplegables
    };
  },
  methods: {
    toggleSection(section) {
      this.expandedSection = this.expandedSection === section ? null : section;
    },
    goBack() {
      window.history.back(); // Regresa a la ventana anterior
    },
  },
};
</script>

<style scoped>
.poblacion-beneficiada {
  position: relative;
  padding: 40px 20px;
  color: white;
  font-family: Arial, sans-serif;
  background-image: url('@/assets/img/manos_en_proyecto.png'); /* Imagen de fondo */
  background-size: cover; /* La imagen cubre todo el espacio */
  background-position: center; /* Centrar la imagen */
  background-attachment: fixed; /* Fija el fondo al hacer scroll */
  text-align: center;
  min-height: 100vh; /* Asegura que cubra toda la pantalla */
}

.background-overlay {
  background-color: rgba(0, 0, 0, 0.6); /* Oscurece el fondo para resaltar el texto */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #4CAF50;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

.card {
  background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
  color: #333;
  margin: 15px auto;
  padding: 20px;
  border-radius: 8px;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.card h2 {
  font-size: 1.5em;
  color: #4CAF50;
  cursor: pointer;
}

.card p {
  font-size: 1em;
  line-height: 1.5; /* Interlineado de 1.5 */
  text-align: justify; /* Justificación del texto */
  color: #333;
}

.back-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.back-button:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .poblacion-beneficiada {
    background-attachment: scroll; /* Desactiva la fijación en pantallas pequeñas */
    padding: 20px 10px;
  }

  h1 {
    font-size: 2em;
  }

  .card {
    padding: 15px;
  }

  .back-button {
    font-size: 0.9em;
    padding: 8px 12px;
  }
}
</style>
