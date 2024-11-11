<template>
  <div class="section">
    <!-- Botón de Regresar -->
    <button class="back-button" @click="goBack">Regresar</button>

    <h1>Universidad de Costa Rica</h1>
    <h2>Oficina de Planificación Universitaria</h2>
    <h3>Sistema Institucional Plan Presupuesto</h3>

    <!-- Información de los encargados del proyecto -->
    <div class="table-responsive">
      <table class="project-info">
        <thead>
          <tr>
            <th>Tipo Participación</th>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Grado</th>
            <th>Unidad/Inst. Pertenece</th>
            <th>Estado en Régimen</th>
            <th>Nombramiento</th>
            <th>Horas Propias</th>
            <th>Horas Adicional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Tipo Participación">Colaborador / Asociado</td>
            <td data-label="Identificación">502390868</td>
            <td data-label="Nombre">Rafael Ant. Martínez Villarreal</td>
            <td data-label="Grado">Maestría académica</td>
            <td data-label="Unidad/Inst. Pertenece">Sede de Guanacaste</td>
            <td data-label="Estado en Régimen">Instructor (A)</td>
            <td data-label="Nombramiento">Del 28/02/2025 al 25/02/2028</td>
            <td data-label="Horas Propias">3</td>
            <td data-label="Horas Adicional"></td>
          </tr>
          <tr>
            <td data-label="Tipo Participación">Colaborador / Asociado</td>
            <td data-label="Identificación">502420668</td>
            <td data-label="Nombre">Carlos Alberto Vega Alvarado</td>
            <td data-label="Grado">Maestría profesional</td>
            <td data-label="Unidad/Inst. Pertenece">Sede Regional de Guanacaste - Liberia - Acción Social</td>
            <td data-label="Estado en Régimen">Instructor (A)</td>
            <td data-label="Nombramiento">Del 28/02/2025 al 25/02/2028</td>
            <td data-label="Horas Propias">5</td>
            <td data-label="Horas Adicional"></td>
          </tr>
          <tr>
            <td data-label="Tipo Participación">Investigador principal / Responsable</td>
            <td data-label="Identificación">504505256</td>
            <td data-label="Nombre">Beyker Stefan Obando Zambrano</td>
            <td data-label="Grado">Maestría</td>
            <td data-label="Unidad/Inst. Pertenece">Sede Regional de Guanacaste - Liberia - Acción Social</td>
            <td data-label="Estado en Régimen">Interno Licenciado (A)</td>
            <td data-label="Nombramiento">Del 28/02/2025 al 25/02/2028</td>
            <td data-label="Horas Propias">10</td>
            <td data-label="Horas Adicional"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Cargas totales por Actividad Sustantiva -->
    <h4>Cargas totales por Actividad Sustantiva</h4>
    <div class="table-responsive">
      <table class="activity-load">
        <thead>
          <tr>
            <th>Actividad</th>
            <th>Subactividad</th>
            <th>Total horas propias</th>
            <th>Total horas adicionales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Actividad">Acción Social</td>
            <td data-label="Subactividad">Trabajo Comunal Universitario (T.C.U)</td>
            <td data-label="Total horas propias">10</td>
            <td data-label="Total horas adicionales">8</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Observaciones -->
    <h4>Observaciones</h4>
    <ul class="observations">
      <li>Observaciones realizadas al participante: Rafael Ant. Martínez Villarreal. Colaborador del Trabajo Comunal Universitario con 3 horas en sobrecarga, l asociado cuenta con amplia experiencia en las áreas de tecnología y
      computación. Su apoyo brindara solidez a los programas de capacitación, así como un vínculo directo entre las carreras de Dirección de Empresas e
      Informática Empresarial.</li>
      <li>Observaciones realizadas al participante: Carlos Alberto Vega Alvarado. Colaborador del proyecto de Trabajo Comunal Universitario y coordinador de la carrera de Dirección de Empresas, especialista en tecnologías de
información aplicada al crecimiento de las micro y pequeñas empresas. La participación ayudará a crear un vinculo directo entre las carrera de
      Dirección de Empresas e Informática Empresarial.</li>
      <li>Observaciones realizadas al participante: Beyker Stefan Obando Zambrano. Encargado del proyecto con 10 horas en su jornada laboral para atender las necesidades del proyecto. El responsable del proyecto cuenta con
      experiencia en el desarrollo de Trabajos Comunales Universitarios y ha participado en múltiples capacitaciones orientadas a mejorar la estructura de
      los emprendimientos liderados por mujeres emprendedoras.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EncargadosView',
  methods: {
    goBack() {
      window.history.back();
    }
  }
}
</script>

<style scoped>
.section {
  padding: 20px;
  font-size: 14px;
  text-align: justify;
  position: relative;
}

/* Estilos para el botón de Regresar */
.back-button {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}

.back-button:hover {
  background-color: #45a049;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}

thead th {
  background-color: #4CAF50;
  color: white;
}

h1, h2, h3 {
  text-align: center;
  margin: 0;
  padding: 5px;
}

h4 {
  margin-top: 20px;
}

.observations {
  list-style-type: none;
  padding: 0;
}

.observations li {
  margin-bottom: 10px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }

  table, th, td {
    font-size: 12px;
  }

  th, td {
    padding: 6px;
  }
}

@media (max-width: 576px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }

  th {
    display: none;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  td::before {
    content: attr(data-label);
    font-weight: bold;
    color: #333;
  }

  .project-info, .activity-load {
    border: none;
  }

  /* Ajuste de tamaño del botón en pantallas pequeñas */
  .back-button {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
