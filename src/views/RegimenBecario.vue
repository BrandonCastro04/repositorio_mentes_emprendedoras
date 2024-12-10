<template>
  <div class="section">
    <button class="back-button" @click="goBack">Regresar</button>
    <h1>Régimen Becario</h1>
    

    <div v-for="(item, index) in regimenBecario" :key="index" class="becario-info">
      <button class="toggle-button" @click="togglePeriod(index)">
        Periodo: {{ item.periodo }}
      </button>
      <div v-show="visiblePeriods[index]" class="info-content">
        <p><strong>Tipo de horas:</strong> {{ item.tipoHoras }}</p>
        <p><strong>Cantidad de horas:</strong> {{ item.cantidadHoras }}</p>
        <p><strong>Meses:</strong> {{ item.meses }}</p>
        <p><strong>Solicitado a:</strong> {{ item.solicitadoA }}</p>
        <p><strong>Justificación:</strong> {{ item.justificacion }}</p>

        <h3>Actividades:</h3>
        <div v-for="(actividad, i) in item.actividades" :key="i">
          <p><strong>{{ actividad.titulo }}</strong></p>
          <ul>
            <li v-for="(detalle, j) in actividad.detalles" :key="j">{{ detalle }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegimenBecario',
  data() {
    return {
      regimenBecario: [
        {
          periodo: 2025,
          tipoHoras: 'Asistente',
          cantidadHoras: '15.00',
          meses: '12.00',
          solicitadoA: 'Acción Social',
          justificacion:
            'Para la puesta en marcha del Trabajo Comunal Universitario se necesitaran 15 horas asistente cada mes, durante el tiempo de realización del proyecto, ya que es importante dar apoyo con estudiantes avanzados de las diferentes carreras a las comunidades y a los demás estudiantes que participan dentro del TCU.',
          actividades: [
            {
              titulo: 'Elaboración de Actividades',
              detalles: [
                'Planificación y organización de talleres y actividades comunitarias.',
                'Coordinación de horarios y recursos necesarios para cada actividad.',
                'Evaluación de la efectividad y participación en las actividades realizadas.',
              ],
            },
            {
              titulo: 'Seguimiento al Desarrollo de Mujeres Empresarias',
              detalles: [
                'Asesoramiento continuo y personalizado a mujeres empresarias de la comunidad.',
                'Monitoreo del progreso de sus negocios y proyectos.',
                'Identificación de necesidades y áreas de mejora para ofrecer apoyo adicional.',
              ],
            },
            {
              titulo: 'Creación de Material Didáctico',
              detalles: [
                'Desarrollo de recursos educativos y formativos para las actividades del TCU.',
                'Diseño de guías, manuales y presentaciones que faciliten el aprendizaje.',
                'Adaptación del material a las necesidades específicas de cada comunidad.',
              ],
            },
            {
              titulo: 'Participación en Giras',
              detalles: [
                'Organización y logística de las visitas a las comunidades.',
                'Acompañamiento y apoyo durante las giras, asegurando una interacción efectiva entre estudiantes y comunidades.',
                'Documentación y reporte de las actividades realizadas y los resultados obtenidos durante las giras.',
              ],
            },
          ],
        },
        {
          periodo: 2026,
          tipoHoras: 'Asistente',
          cantidadHoras: '15.00',
          meses: '12.00',
          solicitadoA: 'Acción Social',
          justificacion:
            'Para la puesta en marcha del Trabajo Comunal Universitario se necesitaran 15 horas asistente cada mes, durante el tiempo de realización del proyecto, ya que es importante dar apoyo con estudiantes avanzados de las diferentes carreras a las comunidades y a los demás estudiantes que participan dentro del TCU.',
          actividades: [
            {
              titulo: 'Elaboración de Actividades',
              detalles: [
                'Planificación y organización de talleres y actividades comunitarias.',
                'Coordinación de horarios y recursos necesarios para cada actividad.',
                'Evaluación de la efectividad y participación en las actividades realizadas.',
              ],
            },
            {
              titulo: 'Seguimiento al Desarrollo de Mujeres Empresarias',
              detalles: [
                'Asesoramiento continuo y personalizado a mujeres empresarias de la comunidad.',
                'Monitoreo del progreso de sus negocios y proyectos.',
                'Identificación de necesidades y áreas de mejora para ofrecer apoyo adicional.',
              ],
            },
            {
              titulo: 'Creación de Material Didáctico',
              detalles: [
                'Desarrollo de recursos educativos y formativos para las actividades del TCU.',
                'Diseño de guías, manuales y presentaciones que faciliten el aprendizaje.',
                'Adaptación del material a las necesidades específicas de cada comunidad.',
              ],
            },
            {
              titulo: 'Participación en Giras',
              detalles: [
                'Organización y logística de las visitas a las comunidades.',
                'Acompañamiento y apoyo durante las giras, asegurando una interacción efectiva entre estudiantes y comunidades.',
                'Documentación y reporte de las actividades realizadas y los resultados obtenidos durante las giras.',
              ],
            },
          ],
        },
        {
          periodo: 2027,
          tipoHoras: 'Asistente',
          cantidadHoras: '15.00',
          meses: '12.00',
          solicitadoA: 'Acción Social',
          justificacion:
            'Para la puesta en marcha del Trabajo Comunal Universitario se necesitaran 15 horas asistente cada mes, durante el tiempo de realización del proyecto, ya que es importante dar apoyo con estudiantes avanzados de las diferentes carreras a las comunidades y a los demás estudiantes que participan dentro del TCU.',
          actividades: [
            {
              titulo: 'Elaboración de Actividades',
              detalles: [
                'Planificación y organización de talleres y actividades comunitarias.',
                'Coordinación de horarios y recursos necesarios para cada actividad.',
                'Evaluación de la efectividad y participación en las actividades realizadas.',
              ],
            },
            {
              titulo: 'Seguimiento al Desarrollo de Mujeres Empresarias',
              detalles: [
                'Asesoramiento continuo y personalizado a mujeres empresarias de la comunidad.',
                'Monitoreo del progreso de sus negocios y proyectos.',
                'Identificación de necesidades y áreas de mejora para ofrecer apoyo adicional.',
              ],
            },
            {
              titulo: 'Creación de Material Didáctico',
              detalles: [
                'Desarrollo de recursos educativos y formativos para las actividades del TCU.',
                'Diseño de guías, manuales y presentaciones que faciliten el aprendizaje.',
                'Adaptación del material a las necesidades específicas de cada comunidad.',
              ],
            },
            {
              titulo: 'Participación en Giras',
              detalles: [
                'Organización y logística de las visitas a las comunidades.',
                'Acompañamiento y apoyo durante las giras, asegurando una interacción efectiva entre estudiantes y comunidades.',
                'Documentación y reporte de las actividades realizadas y los resultados obtenidos durante las giras.',
              ],
            },
          ],
        },
      ],
      visiblePeriods: {},
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    togglePeriod(index) {
      this.visiblePeriods = {
        ...this.visiblePeriods,
        [index]: !this.visiblePeriods[index],
      };
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

h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
}

p {
  line-height: 1.6;
  margin-bottom: 10px;
  color: #555;
}

.becario-info {
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

.info-content h3 {
  margin-bottom: 10px;
  font-size: 18px;
  color: #333;
}

.info-content ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.info-content li {
  line-height: 1.6;
  color: #555;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    padding: 15px;
  }

  h1 {
    font-size: 20px;
  }

  .back-button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }

  .toggle-button {
    font-size: 14px;
  }

  .info-content {
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 10px;
  }

  h1 {
    font-size: 18px;
  }

  .toggle-button {
    font-size: 12px;
    padding: 8px;
  }

  .info-content {
    font-size: 12px;
  }
}
</style>
