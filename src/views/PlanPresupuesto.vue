<template>
  <div class="page-container">
    <button class="back-button" @click="$router.push('/')">Regresar</button> 
    <div class="section">
      <h1>UNIVERSIDAD DE COSTA RICA</h1>
      <h2>OFICINA DE PLANIFICACIÓN UNIVERSITARIA</h2>
      <h3>SISTEMA INSTITUCIONAL PLAN PRESUPUESTO</h3>
      <hr />

      <div class="content">
        <p class="title">Costo Total del proyecto:</p>
        <table>
          <tr>
            <td>Monto estimado UCR:</td>
            <td>₡3,300,000.00</td>
          </tr>
          <tr>
            <td>Entes externos:</td>
            <td>₡0.00</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>₡3,300,000.00</td>
          </tr>
        </table>

        <p class="title">Entes externos:</p>
        <p class="info">No hay información registrada</p>

        <p class="title">Unidades participantes en el proyecto:</p>
        <p>07020103 - SEDE REGIONAL DE GUANACASTE - LIBERIA - ACCIÓN SOCIAL</p>

        <p class="title">Instituciones participantes en el proyecto:</p>
        <p><strong>Gobierno:</strong> Ministerio de Agricultura y Ganadería, Costa Rica</p>
        <p><strong>Universidad:</strong> Universidad de Costa Rica, Costa Rica</p>

        <p class="title">Adscripciones con programas inscritos en las Vicerrectorías:</p>
        <p class="info">No hay información registrada</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanPresupuesto'
}
</script>

<style scoped>
.page-container {
  position: relative;
}

.section {
  padding: 20px;
  font-size: 14px;
}

/* Botón de regresar ubicado en la esquina superior derecha de la pantalla */
.back-button {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  font-size: 12px;
  background-color: #1b1a5c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000; /* Asegura que esté encima del contenido */
}

.back-button:hover {
  background-color: #0056b3;
}

h1, h2, h3 {
  text-align: center;
  margin: 0;
}

h1 {
  font-size: 18px;
  font-weight: bold;
}

h2, h3 {
  font-size: 16px;
  font-weight: normal;
}

hr {
  border: 0;
  border-top: 2px solid #4CAF50;
  margin: 10px 0;
}

.content {
  margin-top: 20px;
}

table {
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
}

td {
  padding: 5px;
  border-top: 1px solid #ddd;
}

td:first-child {
  font-weight: bold;
}

.title {
  background-color: #aac0b9;
  padding: 5px;
  font-weight: bold;
  color: #333;
}

.info {
  color: #555;
  font-style: italic;
}
</style>

