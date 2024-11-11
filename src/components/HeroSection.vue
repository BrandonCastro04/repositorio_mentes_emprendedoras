<template>
  <section class="hero">
    <div class="content">
      <div class="background-overlay">
        <h1>Empoderando Mujeres, Creando Líderes</h1>
        <h2 class="title">TCU-764 Mentes Emprendedoras</h2>
        <p>Únete a nuestra comunidad y haz crecer tu negocio.</p>
        <button @click="$router.push('/secciones')">Descubre Más</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%; 
  height: 100vh; 
  background-image: url('@/assets/img/mente_emprendedora.png');
  background-size: cover; /* Asegura que la imagen cubra todo el contenedor */
  background-position: center;
  background-attachment: fixed; /* Fija la imagen al hacer scroll */
  background-repeat: no-repeat; /* No repetir la imagen */
  display: flex;
  align-items: center; /* Alinea verticalmente */
  justify-content: center; /* Alinea horizontalmente */
  text-align: center;
  overflow: hidden; /* Previene que el contenido se desborde */
}

.content {
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
}

.background-overlay {
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  width: 100%;
}

h1 {
  font-size: 3.5em;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  margin: 0;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin-top: 10px;
}

p {
  color: white;
  font-size: 1.2em;
  margin-top: 10px;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  padding: 12px 24px;
  background-color: white;
  border: none;
  color: black;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2em;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4CAF50;
  color: white;
}

/* Responsividad */
@media (max-width: 768px) {
  .hero {
    height: 80vh; 
  }

  h1 {
    font-size: 2.5em; 
  }

  .title {
    font-size: 2em; 
  }

  p {
    font-size: 1em;
  }

  button {
    font-size: 1em;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2em;
  }

  .title {
    font-size: 1.5em;
  }

  p {
    font-size: 0.9em;
  }

  button {
    font-size: 0.9em;
    padding: 8px 16px;
  }
}
</style>

