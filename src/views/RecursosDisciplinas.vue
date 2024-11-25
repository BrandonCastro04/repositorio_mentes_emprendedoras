<template>
  <div class="resources-container">
    <h1 class="title">Recursos y Disciplinas del Proyecto</h1>

    <!-- Sección de Recursos -->
    <div class="section">
      <h2 @click="toggleSection('resources')" class="section-header">
        Recursos con que cuenta el proyecto
        <span :class="{ 'rotate': openSections.resources }" class="arrow">▼</span>
      </h2>
      <transition name="fade">
        <p v-if="openSections.resources" class="section-content">
          El proyecto, respaldado por la carrera de Dirección de Empresas e Informática Empresarial en la Sede de Guanacaste, se fortalece con la participación
          de tres docentes especializados en administración, con habilidades en tecnología de la información, mercadeo y finanzas, y con una sólida trayectoria
          en proyectos relacionados con negocios en la región de Guanacaste.<br /><br />
          Además, se han asegurado recursos audiovisuales y tecnológicos para garantizar el desarrollo fluido de las capacitaciones. En términos de alcance, se
          ha definido admitir un máximo de 25 estudiantes procedentes de diversas disciplinas, según las pautas establecidas para cada ciclo lectivo.<br /><br />
          Es esencial destacar que el proyecto cuenta con el respaldo del departamento de Transportes de la sede, lo que facilita la logística de las giras
          educativas. Esto es crucial, considerando que las ubicaciones de estas actividades suelen ser distantes del cantón de Liberia.
        </p>
      </transition>
    </div>

    <!-- Sección de Disciplinas -->
    <div class="section">
      <h2 @click="toggleSection('disciplines')" class="section-header">
        Disciplinas agregadas al proyecto
        <span :class="{ 'rotate': openSections.disciplines }" class="arrow">▼</span>
      </h2>
      <transition name="fade">
        <div v-if="openSections.disciplines" class="discipline-cards">
          <div class="discipline-card" v-for="(discipline, index) in disciplines" :key="index">
            <h3>{{ discipline.code }} - {{ discipline.title }}</h3>
            <p>{{ discipline.tasks }}</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecursosDisciplinas",
  data() {
    return {
      openSections: {
        resources: false,
        disciplines: false,
      },
      disciplines: [
        {
          code: "330102",
          title: "BACH. Y LIC. EN DIRECCION DE EMPRESAS",
          tasks: "Importancia para las capacitaciones de empresariedad e innovación a las comunidades que desean realizar su propia empresa.",
        },
        {
          code: "330208",
          title: "DIPL.ADM.ADUANERA Y BACH.Y LIC.ADM.ADUANERA Y COM.",
          tasks: "Los estudiantes de esta carrera son importantes en este proyecto ya que pueden generar importantes estrategias de comercialización enfocadas a la expansión de las empresas en la zona.",
        },
        {
          code: "600002",
          title: "BACHILLERATO EN INFORMATICA EMPRESARIAL",
          tasks: "Los estudiantes de esta carrera son importantes en este proyecto ya que pueden contribuir al diseño de soluciones tecnológicas innovadoras.",
        },
      ],
    };
  },
  methods: {
    toggleSection(section) {
      this.openSections[section] = !this.openSections[section];
    },
  },
};
</script>

<style scoped>
/* Contenedor general */
.resources-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Título principal */
.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Sección general */
.section {
  margin-bottom: 20px;
}

/* Encabezado de cada sección */
.section-header {
  cursor: pointer;
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  transition: transform 0.3s ease;
}
.arrow.rotate {
  transform: rotate(180deg);
}

/* Contenido de las secciones */
.section-content {
  margin-top: 10px;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
}

/* Tarjetas de disciplinas */
.discipline-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}
@media (min-width: 768px) {
  .discipline-cards {
    grid-template-columns: 1fr 1fr;
  }
}

.discipline-card {
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.discipline-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
