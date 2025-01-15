<template>
  <header id="top">
    <div class="container">
      <img
        src="@/assets/images/escudo-de-armas.png"
        alt="Logo El Dragón Cojo"
        class="escudo-logo"
      />
      <h1 class="titulo-principal">El Dragón Cojo</h1>
      <p class="subtitulo-principal">
        El mejor lugar para disfrutar de
        <strong>juegos de mesa</strong>, <strong>rol</strong> y mucha
        imaginación. Vive aventuras épicas con dados, historias y camaradería.
      </p>

      <div style="text-align:center; margin: 10px 0;">
        <audio controls style="max-width:250px;">
          <source src="@/assets/audio/song.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>

      <!-- Botón CTA con <el-button> -->
      <el-button
        class="btn-cta"
        type="primary"
        :auto-insert-space="false"
        @click="scrollToComunidad"
      >
        Únete a la aventura
      </el-button>
    </div>
  </header>
</template>

<script setup>
function scrollToComunidad() {
  const el = document.getElementById('comunidad')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* Minimal override si quieres cambiar algo del <el-button> */
.el-button.btn-cta {
  font-weight: bold;
}
</style>
