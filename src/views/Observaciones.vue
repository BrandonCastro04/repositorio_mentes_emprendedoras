<template>
  <div class="main-container">
    <section class="section">
      <button class="back-button" @click="$router.push('/')">Regresar</button>
      <h1>Observaciones</h1>
      <p>
        El proyecto "Mentes Emprendedoras" se implementará a través de una serie de procesos de capacitación dirigidos a grupos de mujeres
        emprendedoras en situación de riesgo social, seleccionadas con la ayuda del Ministerio de Agricultura y Ganadería (MAG). Este grupo objetivo, que
        enfrenta limitaciones tanto sociales como económicas, será potenciado mediante el uso responsable y efectivo de las tecnologías de la información
        para la creación, gestión y consolidación de emprendimientos. Para maximizar el impacto del proyecto, se llevarán a cabo diversas iniciativas,
        incluyendo la incorporación de nuevas tecnologías y un enfoque en la gestión ambiental. Este último aspecto tiene como objetivo generar conciencia
        social en las familias de las participantes, mejorando así su calidad de vida. Se fomentará el uso racional de recursos como el agua, la energía
        eléctrica y el combustible, que representan gastos significativos en el desarrollo de emprendimientos. Se destacará el impacto positivo de las
        tecnologías de la información en el desarrollo de nuevas iniciativas sociales y empresariales. Este proyecto comunitario ofrecerá una valiosa práctica
        para los estudiantes, permitiéndoles adquirir experiencia en la formulación, gestión y ejecución de proyectos sociales y empresariales en un entorno
        tecnológico. Esto contribuirá al avance de las comunidades en temas contemporáneos relevantes, beneficiando el desarrollo profesional y personal de
        los participantes. Además, se espera que este Trabajo Comunal Universitario (TCU) sirva como una plataforma de experiencia para los estudiantes,
        quienes podrán aspirar a roles como gerentes, directores y emprendedores una vez egresados de la Universidad de Costa Rica. También se
        contempla la posibilidad de establecer alianzas estratégicas con instituciones como el IMAS, las municipalidades y el INAMU, entre otras. El objetivo de
        estas alianzas es lograr un impacto significativo, tanto cualitativo como cuantitativo, en los grupos seleccionados. Esto se materializará a través de la
        generación de proyectos realistas y alcanzables, que promuevan un crecimiento tangible en las comunidades.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ObservacionesView'
}
</script>

<style scoped>
/* Fondo de pantalla completo para la sección */
.main-container {
  background-image: url('@/assets/img/manos_en_proyecto2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

/* Estilo de la sección de observaciones */
.section {
  max-width: 800px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7); 
  color: #fff;
  text-align: justify;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}

/* Estilo para el botón de regresar */
.back-button {
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 8px 16px;
  font-size: 12px;
  background-color: #1b1a5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button:hover {
  background-color: #0056b3;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 25px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

p {
  font-size: 14px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6); /* Sombra para mayor legibilidad */
}
</style>
