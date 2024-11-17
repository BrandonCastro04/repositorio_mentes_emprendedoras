<template>
  <div class="section">
    <h1>Acciones por Proyecto y Objeto del Gasto</h1>
    <p>Consulta detallada de los objetos de gasto por periodo y sus justificaciones.</p>
    
    <!-- Acordeón por Periodo -->
    <div class="accordion">
      <div class="accordion-item" v-for="(periodo, index) in periodos" :key="index">
        <button 
          class="accordion-title" 
          @click="toggleAccordion(index)"
          :class="{ active: activePeriodo === index }">
          Periodo: {{ periodo.anio }}
        </button>
        <div v-show="activePeriodo === index" class="accordion-content">
          <div class="gasto-item" v-for="(gasto, gastoIndex) in periodo.objetos" :key="gastoIndex">
            <h3>Objeto del Gasto: {{ gasto.objeto }}</h3>
            <p><strong>Fuente de financiamiento:</strong> {{ gasto.fuente }}</p>
            <p><strong>Monto solicitado:</strong> ₡{{ gasto.monto.toLocaleString() }}</p>
            <p><strong>Justificación:</strong> {{ gasto.justificacion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjetoGasto",
  data() {
    return {
      activePeriodo: null,
      periodos: [
        {
          anio: 2025,
          objetos: [
            {
              objeto: "1030300 IMPRESIÓN, ENCUADERNACIÓN Y OTROS",
              fuente: "Acción Social",
              monto: 100000,
              justificacion:
                "La siguiente partida es solicitada para atender las necesidades de fotocopiado, impresión y encuadernación de material para el desarrollo de los diferentes talleres de capacitación en las comunidades donde se desarrolla el TCU.",
            },
            {
              objeto: "1050200 VIÁTICOS DENTRO DEL PAÍS",
              fuente: "Acción Social",
              monto: 200000,
              justificacion:
                "La siguiente partida es solicitada para atender las necesidades de viáticos al profesor encargado, para los viajes a los diferentes cantones de la Provincia de Guanacaste.",
            },
            {
              objeto: "2020300 ALIMENTOS Y BEBIDAS",
              fuente: "Acción Social",
              monto: 200000,
              justificacion:
                "La solicitud se da por concepto de compra de alimentos y bebidas necesarios para las capacitaciones en cada una de las comunidades participantes en el proyecto, ya que al trabajar en grupos de mujeres también es necesario contar con algunos productos de alimentación para ella y sus hijos.",
            },
            {
              objeto: "6029902 AL SECTOR PRIVADO",
              fuente: "Acción Social",
              monto: 600000,
              justificacion:
                "Esta partida se solicita por concepto de viáticos a estudiantes cuando estos viajan a los diferentes comunidades a realizar la recolección de información y a impartir talleres de capacitación. Es importante mencionar que en Guanacaste los estudiantes deben desplazarse grandes distancias por lo que esta partida es de gran relevancia para el desarrollo del proyecto.",
            },
          ],
        },
        {
          anio: 2026,
          objetos: [
            {
              objeto: "1030300 IMPRESIÓN, ENCUADERNACIÓN Y OTROS",
              fuente: "Acción Social",
              monto: 100000,
              justificacion:
                "La siguiente partida es solicitada para atender las necesidades de fotocopiado, impresión y encuadernación de material para el desarrollo de los diferentes talleres de capacitación en las comunidades donde se desarrolla el TCU.",
            },
            // Agrega los demás objetos del año 2026...
          ],
        },
        {
          anio: 2027,
          objetos: [
            {
              objeto: "1030300 IMPRESIÓN, ENCUADERNACIÓN Y OTROS",
              fuente: "Acción Social",
              monto: 100000,
              justificacion:
                "La siguiente partida es solicitada para atender las necesidades de fotocopiado, impresión y encuadernación de material para el desarrollo de los diferentes talleres de capacitación en las comunidades donde se desarrolla el TCU.",
            },
            // Agrega los demás objetos del año 2027...
          ],
        },
      ],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activePeriodo = this.activePeriodo === index ? null : index;
    },
  },
};
</script>

<style scoped>
.section {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.accordion {
  margin-top: 20px;
}

.accordion-title {
  background: #4caf50;
  color: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.accordion-title.active {
  background: #45a049;
}

.accordion-content {
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.gasto-item {
  margin-bottom: 20px;
}

.gasto-item h3 {
  margin-top: 0;
  color: #4caf50;
}
</style>
