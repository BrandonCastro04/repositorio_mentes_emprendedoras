<template>
  <div class="section">
    <button class="back-button" @click="goBack">Regresar</button>
    <h1>Cronograma de Actividades</h1>
    
    <table class="responsive-table">
      <thead>
        <tr>
          <th>Actividades</th>
          <th>Fecha Inicial</th>
          <th>Fecha Final</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actividad, index) in actividades" :key="index">
          <td>{{ actividad.descripcion }}</td>
          <td>{{ actividad.fechaInicio }}</td>
          <td>{{ actividad.fechaFin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CronogramaActividades',
  data() {
    return {
      actividades: [
        {
          descripcion:
            'Desarrollo de equipos de trabajo con los estudiantes pertenecientes al TCU para identificar sus fortalezas y así orientarlos a las capacitaciones donde cuenten con mayores recursos de conocimiento.',
          fechaInicio: '28/02/2025',
          fechaFin: '30/03/2025',
        },
        {
          descripcion:
            'Capacitación a estudiantes sobre temas relevantes del TCU, para su vinculación directa y actualizada con las poblaciones.',
          fechaInicio: '01/04/2025',
          fechaFin: '30/04/2025',
        },
        {
          descripcion:
            'Reuniones iniciales de convivencia y desarrollo socioeconómico con grupos de mujeres en riesgo social, con la finalidad de conocer su situación actual y expectativas a futuro en temas de desarrollo de conocimientos y emprendimientos.',
          fechaInicio: '01/05/2025',
          fechaFin: '30/06/2025',
        },
        {
          descripcion:
            'Preselección de grupos de mujeres, tomando en consideración sus necesidades actuales, conocimientos y sugerencia del Ministerio de Agricultura y Ganadería.',
          fechaInicio: '01/07/2025',
          fechaFin: '31/07/2025',
        },
        {
          descripcion:
            'Charlas a las poblaciones seleccionadas, para indicarles los alcances del TCU y en la forma en la que se realizarán las capacitaciones a lo largo del proyecto.',
          fechaInicio: '01/08/2025',
          fechaFin: '31/10/2025',
        },
        {
          descripcion:
            'Formulación y capacitación inicial para el desarrollo de destrezas en tecnologías de información, así como planteamiento de las ideas de negocios para la escogencia de la que tenga más valor agregado.',
          fechaInicio: '01/11/2025',
          fechaFin: '28/02/2026',
        },
        {
          descripcion:
            'Formulación y capacitación en habilidades cuantitativas y cualitativas para el desarrollo profesional. Se utilizarán herramientas prácticas para el desarrollo de talento en áreas como Marketing digital y habilidades en liderazgo, con el objetivo de dar sustento a lo que conforma la idea de negocios.',
          fechaInicio: '01/03/2026',
          fechaFin: '30/06/2026',
        },
        {
          descripcion:
            'Formulación y capacitación que permitan el desarrollo de capacidades y conocimiento en el manejo de nuevos negocios basados en los elementos de mercadeo, manejo de recurso humano y economía actual..',
          fechaInicio: '01/07/2026',
          fechaFin: '31/10/2026',
        },
        {
          descripcion:
            'Formulación y capacitación en los elementos contables y financieros de las ideas de negocios, a fin de establecer sus rentabilidades y posibles estrategias de acción. Cabe resaltar que igual que en los pasos anteriores se explotará al máximo el uso de la tecnología para estos elementos.',
          fechaInicio: '01/11/2026',
          fechaFin: '28/02/2027',
        },
        {
          descripcion:
            'Formulación y capacitación en los elementos de tecnologías de información para la gestión de negocios, a fin de establecer herramientas que permitan la administración de una forma innovadora y organizada.',
          fechaInicio: '01/03/2027',
          fechaFin: '31/07/2027',
        },
        {
          descripcion:
            'Revisión de los proyectos en su quehacer a fin de verificar su accionar en el mercado y definir de ser necesario nuevas estrategias empresariales, relacionadas a las tecnologías de información, marketing, producción y finanzas, capaces de desarrollar un crecimiento y desarrollo exitoso en las nuevas PYMES.',
          fechaInicio: '01/08/2027',
          fechaFin: '30/11/2027',
        },
        {
          descripcion:
            'Desarrollo de material académico (guías, publicaciones, videos, presentaciones) de la experiencia recolectada en el TCU, así como la presentación de indicadores que evidencien el nivel de cumplimiento de la propuesta, así como los retos que aún deben ser abordados para mejorar las condiciones de las poblaciones capacitadas.',
          fechaInicio: '01/12/2027',
          fechaFin: '25/02/2028',
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Asume que Vue Router está configurado
    },
  },
};
</script>

<style scoped>
.section {
  padding: 20px;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: 0 auto;
}

.back-button {
  float: right;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 14px;
}

.back-button:hover {
  background-color: #45a049;
}

h1 {
  text-align: center;
  color: #333;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
}

.responsive-table thead {
  background-color: #4CAF50;
  color: white;
}

.responsive-table th,
.responsive-table td {
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
}

.responsive-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

@media (max-width: 600px) {
  .responsive-table thead {
    display: none;
  }

  .responsive-table tbody td {
    display: block;
    width: 100%;
    text-align: right;
    position: relative;
    padding-left: 50%;
  }

  .responsive-table tbody td:before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    width: 45%;
    text-align: left;
    font-weight: bold;
  }
}
</style>
