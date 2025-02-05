<template>
  <div class="max-w-4xl w-full mx-auto px-4 py-8 flex flex-col items-center text-center">
    <img
      src="@/assets/images/escudo-de-armas.png"
      alt="Logo El Dragón Cojo"
      class="max-w-full h-auto w-60 sm:w-90 md:w-100 lg:w-150"
    />
    <h1 class="text-3xl sm:text-4xl font-bold mt-4 titulo-principal">
      {{ $t('dragonCojo') }}
    </h1>
    <p class="text-lg sm:text-xl mt-2 subtitulo-principal">
      {{ $t('tagline') }}
    </p>

    <p class="text-lg sm:text-xl mt-2 subtitulo-principal">
      {{ $t('tagline2') }}
    </p>
    <div class="mt-4">
      <audio controls class="max-w-xs">
        <source src="@/assets/audio/song.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>

    <el-button
      class="btn-cta font-bold mt-4"
      type="primary"
      :auto-insert-space="false"
      @click="scrollToComunidad"
    >
      {{ $t('joinus') }}
    </el-button>
  </div>
</template>

<script setup>
function scrollToComunidad() {
  const el = document.getElementById('comunidad')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
