<template>
  <section id="sobre-nosotros" class="fade-in-section">
    <el-card>
      <template #header>
        <h2 class="text-xl text-center">{{ $t('aboutusTitle') }}</h2>
      </template>
      <p class="mb-2">
        {{ $t('aboutusDescription') }}
      </p>
      <p class="mb-2">
        {{ $t('aboutusInvitation') }}
      </p>
    </el-card>
  </section>
</template>
