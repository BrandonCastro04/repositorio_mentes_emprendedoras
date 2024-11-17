<template>
  <section class="ubicacion-geografica">
    <!-- Encabezado -->
    <div class="header">
      <h2>UNIVERSIDAD DE COSTA RICA</h2>
      <h3>OFICINA DE PLANIFICACIÓN UNIVERSITARIA</h3>
      <h4>SISTEMA INSTITUCIONAL PLAN PRESUPUESTO</h4>
      <hr />
    </div>

    <!-- Tabla -->
    <div class="tabla-container">
      <h1>Ubicación Geográfica del Proyecto</h1>
      <table>
        <thead>
          <tr>
            <th>País</th>
            <th>Provincia</th>
            <th>Cantón</th>
            <th>Distrito</th>
            <th>Región</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>LIBERIA</td>
            <td>LIBERIA</td>
            <td>CHOROTEGA</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>LIBERIA</td>
            <td>CAÑAS DULCES</td>
            <td>CHOROTEGA</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>SANTA CRUZ</td>
            <td>SANTA CRUZ</td>
            <td>CHOROTEGA</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>BAGACES</td>
            <td>BAGACES</td>
            <td>CHOROTEGA</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>LA CRUZ</td>
            <td>SANTA CECILIA</td>
            <td>CHOROTEGA</td>
          </tr>
          <tr>
            <td>COSTA RICA</td>
            <td>GUANACASTE</td>
            <td>HOJANCHA</td>
            <td>HOJANCHA</td>
            <td>CHOROTEGA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Botón de regresar -->
    <button class="regresar-btn" @click="goBack">Regresar</button>
  </section>
</template>

<script>
export default {
  name: "UbicacionGeografica",
  methods: {
    goBack() {
      this.$router.go(-1); // Navega a la página anterior
    },
  },
};
</script>

<style scoped>
.ubicacion-geografica {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;
  position: relative;
}

/* Encabezado */
.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
}

.header h3 {
  font-size: 1.2em;
  margin: 5px 0;
  color: #666;
}

.header h4 {
  font-size: 1em;
  margin: 5px 0;
  color: #888;
}

hr {
  width: 80%;
  margin: 10px auto;
  border: none;
  height: 1px;
  background-color: #4CAF50;
}

/* Tabla */
.tabla-container {
  overflow-x: auto;
  margin: 0 auto;
  max-width: 800px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

thead {
  background-color: #4CAF50;
  color: white;
}

th, td {
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #ddd;
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

/* Botón de regresar */
.regresar-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.regresar-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .ubicacion-geografica {
    padding: 10px;
  }

  .header h2 {
    font-size: 1.2em;
  }

  .header h3 {
    font-size: 1em;
  }

  .regresar-btn {
    top: 10px;
    right: 10px;
    font-size: 12px;
    padding: 8px 15px;
  }
}
</style>
