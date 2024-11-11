<template>
  <div class="main-container">
    <section class="project-description">
      <button class="back-button" @click="$router.push('/')">Regresar</button>
      <h1>Descripción del Proyecto</h1>
      <p>
        El proyecto "Mentes Emprendedoras" tiene como objetivo principal fomentar una mentalidad emprendedora,
         innovadora y tecnológica para promover la independencia económica entre las mujeres en situación de 
         vulnerabilidad social en las comunidades guanacastecas. Esta iniciativa busca empoderarlas para que 
         desarrollen sus propios proyectos socio-productivos, aprovechando las herramientas de tecnología de 
         la información y las comunicaciones. Para lograr este propósito, se fortalecerán las capacidades de 
         la población seleccionada mediante la capacitación por parte de estudiantes de las carreras de 
         Dirección de Empresas e Informática Empresarial, con el respaldo de la Dirección 
         Regional del Ministerio de Agricultura y Ganadería (MAG). Estas disciplinas se ponen al servicio de 
         la comunidad con el fin de mejorar la calidad de vida de las mujeres en la provincia de Guanacaste, 
         brindándoles los conocimientos y habilidades necesarias para enfrentar los retos del mercado empresarial.
         El plan incluye el desarrollo y la consolidación de un grupo de mujeres en situación de riesgo social, 
         con el objetivo de fomentar la creación y el crecimiento de pequeñas empresas que promuevan el emprendimiento
         en sus respectivas comunidades. Este proceso se llevará a cabo mediante capacitaciones impartidas por 
         estudiantes de diversas disciplinas de la Universidad de Costa Rica, Sede de Guanacaste, y supervisadas 
         por un profesor designado. Las capacitaciones abarcarán temas clave como la gestión empresarial, la 
         planificación estratégica, el uso de tecnologías emergentes y la identificación de oportunidades de mercado. 
         Se enfatizará la importancia del manejo adecuado de los negocios y cómo las tecnologías de la información pueden 
         impulsar su crecimiento y desarrollo. Las participantes aprenderán a utilizar herramientas digitales para optimizar
         sus procesos, mejorar la eficiencia operativa y acceder a nuevos mercados. Todo esto se realizará teniendo en cuenta
         las demandas del mercado actual y de la sociedad, con el objetivo de minimizar los riesgos asociados a la toma de 
         decisiones y evitar obstáculos que puedan entorpecer el desarrollo de los proyectos productivos de las mujeres participantes. 
         Además, el proyecto contempla la creación de una red de apoyo entre las emprendedoras, facilitando el intercambio de
         experiencias y conocimientos, y promoviendo la colaboración entre ellas. De esta manera, se espera construir una comunidad 
         sólida y resiliente, capaz de enfrentar los desafíos económicos y sociales de manera conjunta, contribuyendo así al 
         desarrollo sostenible de la región.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectDescription",
};
</script>

<style scoped>
/* Fondo de pantalla completo para la sección */
.main-container {
  background-image: url('@/assets/img/manos_en_proyecto.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilo de la sección del proyecto */
.project-description {
  padding: 20px;
  max-width: 800px;
  background-color: rgba(0, 0, 0, 0.8); /* Aumentar opacidad para mayor contraste */
  color: #fff;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 40px auto;
  position: relative;
}

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
}

p {
  font-size: 14px; /* Aumentar tamaño de fuente para mejor legibilidad */
  line-height: 1.6;
  text-align: justify;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* Sombra en el texto */
}
</style>
