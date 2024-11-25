<template>
  <div class="methodology-container">
    <h1 class="title">Metodología del Proyecto</h1>
    <div v-for="(step, index) in steps" :key="index" class="step-card">
      <div class="card-header" @click="toggleStep(index)">
        <h2>{{ step.title }}</h2>
        <button class="toggle-btn">
          {{ openSteps[index] ? 'Cerrar' : 'Abrir' }}
        </button>
      </div>
      <div v-if="openSteps[index]" class="card-content">
        <p>{{ step.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetodologiaView",
  data() {
    return {
      steps: [
        { title: "1. Identificación de los grupos beneficiarios", content: "En el marco de la implementación del proyecto y dada la experiencia de 2 años y medio en funcionamiento, se identificaron grupos cruciales de mujeres en situación de vulnerabilidad que buscan independencia económica mediante el emprendimiento para apoyar a sus familias. Estos grupos reciben apoyo del Ministerio de Agricultura y Ganadería y del Instituto Nacional de las Mujeres (INAMU), y está enfocado en desarrollar ideas productivas para su comercialización en una plataforma de comercio. Aquí es donde el proyecto de Trabajo Comunal Universitario (TCU) entra en juego, proporcionando formación en áreas empresariales y tecnológicas que les permitan potenciar sus habilidades de innovación y desarrollo económico, contribuyendo así a su crecimiento personal y familiar." },
        { title: "2. Priorización de Innovación y Selección de Participantes", content: "La innovación será priorizada mediante el uso de herramientas tecnológicas y el estímulo para fomentar iniciativas comerciales de bienes y servicios. La selección del equipo de mujeres beneficiarias se realizará con especial atención a las recomendaciones del Ministerio de Agricultura y Ganadería (MAG). Se desarrollará una agenda que acompañará a un mínimo de 25 mujeres de comunidades rurales a lo largo del proyecto de Trabajo Comunal Universitario (TCU). Un requisito indispensable para la selección es la existencia de un trabajo previo por parte de otras instituciones gubernamentales que haya permitido impacto significativo en los proyectos empresariales de las mujeres." },
        { title: "3. Formación y Organización de Equipos de Trabajo", content: "Se formarán equipos de trabajo compuestos por cinco estudiantes en cada grupo, quienes recibirán una inducción sobre las responsabilidades, obligaciones y directrices del Trabajo Comunal Universitario. Los estudiantes de la carrera de Dirección de Empresas e Informática Empresarial se encargarán de implementar tecnologías de información y comunicación, aplicándolas en la estructura empresarial, así como en el desarrollo de estudios de mercado, estudios económicos y estudios de viabilidad financiera. Asimismo, los estudiantes de Administración Aduanera analizarán estrategias para la comercialización internacional de los productos y servicios ofrecidos por los grupos de mujeres. Todos los estudiantes serán instruidos en el desarrollo de habilidades comunicativas, liderazgo, igualdad de género y desarrollo personal, con la finalidad de transmitir a las participantes estos conocimientos para mejorar sus condiciones de vida e incorporar estos aspectos a los proyectos productivos que lideran" },
        { title: "4. Desarrollo y Ejecución de Talleres", content: "Cada grupo se encargará de un tema específico relacionado con el programa de talleres, desarrollando y exponiendo los resultados a los grupos de mujeres. Los profesores supervisarán y asesorarán cada taller basándose en investigaciones de campo para generar información precisa. Los talleres se llevarán a cabo en sesiones semanales de hasta cuatro horas, a cargo de los estudiantes asignados y bajo la supervisión de los profesores. Al finalizar, se organizará una actividad para compartir y retroalimentar los puntos de vista sobre los talleres realizados, seguida de al menos dos ferias de exposición de productos y servicios relacionados con las ideas de negocios beneficiadas por el proyecto." },
        { title: "5. Estrategias de Capacitación y Contenidos", content: "Los programas de capacitación se estructurarán en módulos temáticos que aborden las siguientes áreas: Tecnologías de Información y Comunicación (TIC): Uso de software de gestión, comercio electrónico, marketing digital, y herramientas de productividad. Desarrollo Empresarial: Planificación estratégica, estudios de mercado, gestión financiera, y elaboración de planes de negocio. Habilidades Blandas: Comunicación efectiva, liderazgo, trabajo en equipo, y negociación. Igualdad de Género: Sensibilización sobre derechos de las mujeres, equidad de género en el ámbito laboral, y prevención de la violencia de género." },
        { title: "6. Implementación y Seguimiento", content: "Actividades de Campo: Se llevarán a cabo actividades prácticas con el grupo de mujeres seleccionadas, ajustando las metodologías de enseñanza según las necesidades específicas del grupo y considerando diferentes escenarios, incluyendo el trabajo remoto en caso de pandemia. Monitoreo y Evaluación: Se establecerán indicadores de desempeño y se realizarán evaluaciones periódicas para medir el avance de las participantes. Estas evaluaciones incluirán encuestas de satisfacción, análisis de progreso en habilidades adquiridas, y revisiones de los planes de negocio" },
        { title: "7. Divulgación del Conocimiento Adquirido", content: "Eventos de Difusión: Se organizarán ferias de emprendedoras y otros eventos comunitarios para compartir los resultados del proyecto. Estos eventos permitirán a las mujeres emprendedoras mostrar sus productos y servicios, establecer redes de contactos y recibir retroalimentación del público. Publicaciones y Material Académico: Se generará material académico, incluyendo guías, manuales y estudios de caso, para documentar el proceso y los resultados del proyecto. Este material será distribuido entre las participantes y otras organizaciones interesadas en replicar la iniciativa." },
        { title: "8. Sostenibilidad y Expansión del Proyecto", content: "Plan de Sostenibilidad: Se desarrollará un plan para asegurar la continuidad del apoyo a las mujeres emprendedoras más allá de la duración inicial del proyecto. Esto incluirá la creación de redes de apoyo, la identificación de fuentes de financiamiento adicionales, y la colaboración con otras instituciones y organizaciones no gubernamentales. Expansión a Otras Regiones: Basado en los resultados y las lecciones aprendidas, se explorará la posibilidad de expandir el proyecto a otras regiones del país, beneficiando a más mujeres en situación de vulnerabilidad." },
        { title: "9. Etapas del Proyecto", content: "El proyecto está diseñado para desarrollarse en varias etapas a lo largo de tres años, con el objetivo de alcanzar los objetivos y metas establecidos. Las etapas del proyecto son las siguientes: Indagación y Diagnóstico Inicial: Se investigará la situación económica y académica del grupo de mujeres seleccionadas para determinar sus necesidades, debilidades y fortalezas en tecnologías de información, con el fin de estructurar talleres de capacitación para mejorar su estabilidad económica. Desarrollo de Programas de Capacitación: Se capacitará al grupo de mujeres seleccionadas mediante la inscripción de estudiantes en el TCU y la elaboración de material de capacitación en cuatro áreas clave. Implementación de Actividades de Capacitación: Se llevarán a cabo actividades de campo con el grupo de mujeres seleccionadas, considerando diferentes escenarios, incluyendo el trabajo remoto en caso de pandemia. Divulgación del Conocimiento Adquirido: Se organizarán eventos como ferias de emprendedoras y se generará material académico para compartir los resultados del proyecto con la comunidad. Cada etapa tendrá una duración específica, con el fin de avanzar progresivamente hacia el cumplimiento de los objetivos del proyecto y garantizar el desarrollo continuo de las mujeres participantes" },
      ],
      openSteps: Array(10).fill(false), // Estado inicial: todas las tarjetas cerradas
    };
  },
  methods: {
    toggleStep(index) {
      this.openSteps[index] = !this.openSteps[index]; // Cambiar el estado de la tarjeta específica
    },
  },
};
</script>

<style scoped>
.methodology-container {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
}
.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
.step-card {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
}
.card-content {
  padding: 10px;
  background-color: #fff;
}
.toggle-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.toggle-btn:hover {
  background-color: #0056b3;
}
</style>
