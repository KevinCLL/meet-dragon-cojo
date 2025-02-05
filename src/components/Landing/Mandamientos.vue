<template>
  <section id="mandamientos" class="fade-in-section mt-4">
    <el-card>
      <template #header>
        <h2 class="text-xl text-center">{{ $t('rulesTitle') }}</h2>
      </template>

      <div class="md:flex lg:flex">
        <!-- Mandamiento I -->
        <div shadow="hover" class="px-5 rule-card anim-pop">
          <h3 class="text-lg mb-3">{{ $t('ruleI') }}</h3>
          <ul class="list-disc">
            <li>{{ $t('ruleI1') }}</li>
            <li>{{ $t('ruleI2') }}</li>
          </ul>
        </div>

        <!-- Mandamiento II -->
        <div shadow="hover" class="px-5 rule-card anim-pop">
          <h3 class="text-lg mb-3">{{ $t('ruleII') }}</h3>
          <ul class="list-disc">
            <li>{{ $t('ruleII1') }}</li>
            <li>{{ $t('ruleII2') }}</li>
          </ul>
        </div>

        <!-- Mandamiento III -->
        <div shadow="hover" class="px-5 rule-card anim-pop">
          <h3 class="text-lg mb-3">{{ $t('ruleIII') }}</h3>
          <ul class="list-disc">
            <li>{{ $t('ruleIII1') }}</li>
            <li>{{ $t('ruleIII2') }}</li>
          </ul>
        </div>
      </div>

      <p class="text-center mt-6 mb-4 text-2xl">¡Alea Iacta Est!</p>
    </el-card>
  </section>
</template>

<script setup></script>

<style scoped>
.el-card.rule-card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--color-dorado);
}
</style>
