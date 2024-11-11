<template>
  <section class="services">
    <h2>Nuestros Servicios</h2>
    <div class="service-cards">
      <div class="card">
        <h3>Asesoría Personalizada</h3>
        <p>Posible a futuro</p>
      </div>
      <div class="card">
        <h3>Capacitación y Talleres</h3>
        <p>Aprende habilidades clave para crecer tu negocio.</p>
      </div>
      <div class="card">
        <h3>Mentorías</h3>
        <p>Posible a futuro</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background-color: #f9f9f9;
  text-align: center;
  width: 100%; /* Asegura que ocupe el 100% del ancho */
}

.service-cards {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap; /* Permite que las tarjetas se acomoden en varias filas si no hay suficiente espacio */
}

.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 30%; /* Cada tarjeta ocupará un 30% del ancho en pantallas grandes */
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .service-cards {
    flex-direction: column; /* Las tarjetas se apilarán en pantallas más pequeñas */
    align-items: center;
  }

  .card {
    width: 80%; /* Las tarjetas ocuparán un 80% del ancho en dispositivos pequeños */
  }
}

@media (max-width: 480px) {
  .card {
    width: 90%; /* Las tarjetas se ajustarán aún más en pantallas muy pequeñas */
  }
}
</style>

