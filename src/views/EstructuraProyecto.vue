<template>
  <div class="section">
    <!-- Botón de Regresar a la derecha -->
    <button class="back-button" @click="goBack">
      Regresar
    </button>

    <!-- Título animado con fondo -->
    <div class="title-container">
      <h1 class="animated-title">Mentes Emprendedoras</h1>
    </div>

    <!-- Botones para cambiar entre secciones -->
    <button 
      :class="{ active: activeTab === 'estructura' }"
      @click="activeTab = 'estructura'">
      Estructura
    </button>
    <button 
      :class="{ active: activeTab === 'impacto' }"
      @click="activeTab = 'impacto'">
      Impacto
    </button>
    <button 
      :class="{ active: activeTab === 'metodologia' }"
      @click="activeTab = 'metodologia'">
      Metodología
    </button>

    <!-- Sección de contenido dinámico -->
    <div v-show="activeTab === 'estructura'" class="tab-content estructura">
      <h2>Estructura</h2>
      <p>
        En el marco del proyecto TC- 764, titulado anteriormente como "Desarrollo de habilidades tecnológicas y empresariales en mujeres emprendedoras de
        la zona de Guanacaste", ahora renombrado como "Mentes emprendedoras", se ha consolidado como una iniciativa clave para el empoderamiento y
        desarrollo económico de las mujeres en comunidades rurales alejadas de la cabecera del cantón de Guanacaste.
      </p>
    </div>
    
    <div v-show="activeTab === 'impacto'" class="tab-content impacto">
      <h2>Impacto</h2>
      <p>
        La iniciativa ha sido inclusiva y ha beneficiado a 100 mujeres de diversas edades de entre 35 y 65 años, con distintos niveles de escolaridad, así como
        personas migrantes y en su mayoría madres en las siguientes zonas: 20 en La Cruz, específicamente en la comunidad de El Jobo, 20 en Bagaces
        Centro, 20 en Nicoya Centro, 20 en Hojancha Centro y 20 en Las Juntas de Abangares. Cada grupo ha recibido capacitación y apoyo integral para el
        desarrollo de habilidades tecnológicas y empresariales, facilitando así la creación y fortalecimiento de sus negocios. Las emprendedoras asistidas se
        encuentran en diferentes niveles de madurez empresarial, desde etapas iniciales hasta avanzadas, y han recibido asesoría para la participación en
        fondos económicos, como el Fondo de Fomento para Actividades Productivas y de Organización de las Mujeres (FOMUJERES) del INAMU.
        La ejecución de este proyecto ha contado con la colaboración de entidades públicas como el Ministerio de Agricultura y Ganadería (MAG), el Instituto
        Nacional de las Mujeres (INAMU), la Comisión de Empresariedad Femenina, la Oficina de la Mujer de cada municipalidad involucrada y entidades
        internacionales cómo la Agencia de Cooperación de Japón. Estas alianzas estratégicas han sido fundamentales para proporcionar recursos, asesoría y
        acompañamiento a las emprendedoras, garantizando un enfoque integral y sostenible para el desarrollo de sus capacidades.
        El TC-764 ha demostrado ser una herramienta eficaz para promover la equidad de género y el desarrollo económico local, fomentando un entorno de
        emprendimiento y crecimiento sostenible en Guanacaste. A través de este proyecto, no solo se han mejorado las condiciones económicas de las
        mujeres participantes, sino que también se ha fortalecido el tejido empresarial de la zona, contribuyendo significativamente al progreso y bienestar de
        las comunidades guanacastecas. Asimismo, se han creado redes de apoyo que impulsan la unión entre las empresarias existentes y motivan a nuevas
        emprendedoras a iniciar sus propios negocios, lo que aborda el tema de sororidad, superación de rivalidad y competencia.
        Asimismo, el desarrollo de habilidades tecnológicas y empresariales en mujeres emprendedoras es un tema de creciente interés a nivel global, con
        diversas publicaciones recientes destacando su importancia para el empoderamiento económico y la equidad de género. Estudios han demostrado que
        la capacitación en estas áreas puede aumentar significativamente la viabilidad y el éxito de los emprendimientos liderados por mujeres, especialmente
        en comunidades rurales y desfavorecidas. La literatura existente sugiere que el acceso a formación integral, recursos financieros y redes de apoyo son
        factores críticos para el éxito de las emprendedoras.
        Por ejemplo, la Universidad Nacional y la Universidad de Costa Rica tienen una larga trayectoria en la promoción de proyectos de desarrollo
        comunitario y empoderamiento económico. A través de programas de extensión y acción social, estas instituciones han apoyado numerosos
        emprendimientos en la región de Guanacaste, proporcionando capacitación, asesoría técnica y recursos necesarios para la creación y fortalecimiento
        de negocios locales. La experiencia acumulada en proyectos anteriores ha permitido a estas universidades desarrollar metodologías efectivas y
        adaptadas a las necesidades específicas de las comunidades rurales. Esta labor se alinea con la Política Nacional para la Igualdad Efectiva entre
        Mujeres y Hombres (PIEG, 2021), enfocándose en varios de sus ejes estratégicos, especialmente el Eje 1: Cultura de los Derechos para la Igualdad, y
        el Eje 3: Distribución de la Riqueza.
        Es por ello por lo que el proyecto TC-764 responde a la necesidad de promover la equidad de género y el desarrollo económico en comunidades
        rurales de Guanacaste, áreas que han sido históricamente desfavorecidas y que enfrentan múltiples desafíos socioeconómicos. Al proporcionar
        capacitación en habilidades tecnológicas y empresariales, el proyecto busca empoderar a las mujeres, mejorar sus oportunidades económicas y
        contribuir al desarrollo sostenible de sus comunidades. La región Chorotega, que incluye la provincia de Guanacaste, enfrenta altos niveles de
        desempleo, afectando especialmente a las mujeres. Según los datos del segundo semestre de 2022, la tasa de desempleo en la región fue del 12.4%,
        la más alta del país. Esta situación se agrava en el caso de las mujeres, con una tasa de desempleo notablemente superior en comparación con los
        hombres (Periódico Mensaje, 2022).
        En cuanto a la afectación por la pandemia, muchas mujeres en la región han experimentado dificultades para reincorporarse al mercado laboral, debido
        a la alta demanda de cuidado no remunerado de niños y personas dependientes, lo que limita sus oportunidades de empleo asalariado (Punto y Aparte,
        2023). Además, las mujeres jóvenes de 15 a 24 años enfrentan una tasa de desempleo alarmante del 58.8%, y las de 25 a 34 años, del 26.4%
        (Periódico Mensaje, 2022).
      </p>
    </div>
    
    <div v-show="activeTab === 'metodologia'" class="tab-content metodologia">
      <h2>Metodología</h2>
      <p>
        En cuanto a metodología, el proyecto adopta un enfoque integral y participativo, combinando capacitación técnica, asesoría empresarial y
        creación de redes de apoyo. Esta metodología asegura que las emprendedoras no solo adquieran conocimientos y habilidades, sino que también
        cuenten con el apoyo necesario para implementar y sostener sus emprendimientos. Además, el proyecto fomenta la colaboración interinstitucional,
        involucrando a entidades públicas para maximizar el impacto y la sostenibilidad de las intervenciones.
        Por otro lado, en cuanto a lo aprendido en las primeras etapas de ejecución del proyecto es importante destacar que lo estudiantes avanzados de las
        carreras de Dirección de Negocios, Informática Empresarial y Administración Aduanera han aportado un valor significativo al TC-764. Ya que estos han
        participado activamente en el desarrollo y aplicación de estrategias de negocio y tecnología, los cuales son campos de su conocimiento, contribuyendo
        a la capacitación de las mujeres emprendedoras y ofreciendo soluciones prácticas a los desafíos que enfrentan en sus emprendimientos. Su
        involucramiento ha sido crucial para el éxito del proyecto, proporcionando un enfoque práctico y actualizado que ha enriquecido tanto a los beneficiarios
        como a los propios estudiantes, quienes han podido aplicar sus conocimientos en un contexto real y desafiante.
        También durante esta etapa, los estudiantes y docentes realizaron visitas de campo semanales para conocer de primera mano las necesidades y
        desafíos de las emprendedoras. Estas visitas permitieron identificar áreas clave de mejora y desarrollar planes de acción específicos para cada
        comunidad. Las actividades incluyeron la elaboración de planes de marketing, estudios de mercado y propuestas de innovación tecnológica, todos
        adaptados a las realidades locales y diseñados para maximizar el impacto económico y social. Además, se llevaron a cabo sesiones de capacitación y
        talleres prácticos, donde las mujeres emprendedoras pudieron adquirir nuevas habilidades y conocimientos, así como compartir experiencias y
        establecer redes de apoyo mutuo. Estas actividades no solo fortalecieron las capacidades individuales de las participantes, sino que también
        promovieron la cohesión y la cooperación comunitaria, creando un entorno favorable para el crecimiento y la sostenibilidad de los emprendimientos
        locales.
        En síntesis, el proyecto TC-764 ha demostrado ser una iniciativa transformadora que, a través de la colaboración interinstitucional y la participación de
        la comunidad, está impulsando el desarrollo económico y social en Guanacaste, empoderando a las mujeres emprendedoras, brindándoles autonomía
        económica y fortaleciendo el tejido empresarial de la región.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstructuraProyectoView',
  data() {
    return {
      activeTab: 'estructura'
    };
  },
  methods: {
    // Método para regresar a la página anterior usando Vue Router
    goBack() {
      this.$router.go(-1); // Navega hacia la página anterior en el historial
    }
  }
};
</script>

<style scoped>
/* Estilos previos */

/* Botón de "Regresar" más pequeño y a la derecha */
.back-button {
  position: fixed;
  top: 20px;
  right: 20px; /* Lo mueve a la derecha */
  background-color: #4CAF50;
  color: white;
  padding: 8px 15px; /* Tamaño más pequeño */
  border: none;
  font-size: 14px; /* Texto más pequeño */
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}

.back-button:focus {
  outline: none;
}

/* Título con fondo animado y borde dinámico */
.title-container {
  position: relative;
  height: 150px; /* Menos grueso el fondo */
  background-color: #7a7a7a; /* Gris más claro */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 60px; /* Más espacio entre el título y los botones */
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  animation: borderAnimation 4s infinite; /* Animación para el borde */
}

@keyframes borderAnimation {
  0% {
    border-top-color: #4CAF50;
    border-bottom-color: #4CAF50;
  }
  50% {
    border-top-color: #616161; /* Gris oscuro */
    border-bottom-color: #616161; /* Gris oscuro */
  }
  100% {
    border-top-color: #4CAF50;
    border-bottom-color: #4CAF50;
  }
}

.animated-title {
  font-size: 48px;
  color: #f7f7f7; /* Blanco suave */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: moveTitle 10s linear infinite, fadeIn 3s ease-out forwards;
}

@keyframes moveTitle {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Estilos para la sección principal */
.section {
  padding: 20px;
}

/* Estilos para los botones */
button {
  margin-right: 10px;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  background-color: #f0f0f0;
  border-radius: 8px;
  font-size: 16px;
}

button:hover {
  background-color: #4CAF50;
  color: white;
  transform: translateY(-3px);
}

button:active {
  transform: scale(0.95);
}

button.active {
  font-weight: bold;
  background-color: #4CAF50;
  color: white;
  border: 2px solid #fff;
}

/* Estilo general para los contenidos de las secciones */
.tab-content {
  padding: 20px;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-size: 14px;
  text-align: justify;
  line-height: 1.8; /* Interlineado más espacioso */
  margin-top: 20px;
  position: relative;
  border-radius: 20px; /* Bordes redondeados */
  overflow: hidden; /* Asegura que las imágenes no se salgan del contenedor */
}

/* Fondo para cada sección con fondo más oscuro y legibilidad */
.tab-content h2, .tab-content p {
  position: relative;
  z-index: 2;
}

.tab-content:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Fondo oscuro más pronunciado para mejor legibilidad */
  z-index: 1;
}

/* Fondo para cada sección */
.estructura {
  background-image: url('@/assets/img/manos_en_proyecto.png');
}

.impacto {
  background-image: url('@/assets/img/manos_en_proyecto2.png');
}

.metodologia {
  background-image: url('@/assets/img/mujer_emprendedora.png');
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .section {
    padding: 10px;
  }

  .tab-content {
    font-size: 15px;
    padding: 15px;
  }

  button {
    padding: 10px 20px;
    font-size: 14px;
  }
}
</style>




