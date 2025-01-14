<template>
  <section id="mandamientos" class="fade-in-section">
    <div class="container">
      <h2>Mandamientos del Club</h2>

      <div class="rules-list">
        <!-- Mandamiento I -->
        <el-card
          shadow="hover"
          class="rule-card anim-pop"
        >
          <h3>I. Creación de Eventos y Asistencia</h3>
          <ul>
            <li>Si tienes un juego en mente, házselo saber a un organizador ...</li>
            <li>Cualquier regla puede tener una excepción si el anfitrión ...</li>
            <li>Cancelaciones con menos de 24 horas => 1 strike.</li>
            <!-- etc... -->
          </ul>
        </el-card>

        <!-- Mandamiento II -->
        <el-card
          shadow="hover"
          class="rule-card anim-pop"
        >
          <h3>II. Participantes, Invitados y Privacidad</h3>
          <ul>
            <li>No se admiten menores, a menos que ...</li>
            <li>Es preferible que tus invitados se registren ...</li>
            <!-- etc... -->
          </ul>
        </el-card>

        <!-- Mandamiento III -->
        <el-card
          shadow="hover"
          class="rule-card anim-pop"
        >
          <h3>III. Resolución de Conflictos</h3>
          <ul>
            <li>Cualquier problema o duda, consulta con un organizador.</li>
            <!-- etc... -->
          </ul>
        </el-card>
      </div>

      <p class="alea-iacta-est">¡Alea Iacta Est!</p>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Minimiza aquí, lo demás que se encargue styles.css */
.el-card.rule-card {
  background-color: rgba(255, 255, 255, 0.1); /* Imitando tu CSS */
  border: 2px solid var(--color-dorado);
}
</style>
