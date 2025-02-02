<template>
  <section id="mandamientos" class="fade-in-section">
    <div class="container">
      <h2>{{ $t('rulesTitle') }}</h2>

      <div class="rules-list">
        <!-- Mandamiento I -->
        <el-card shadow="hover" class="rule-card anim-pop">
          <h3>{{ $t('ruleI') }}</h3>
          <ul>
            <li>{{ $t('ruleI1') }}</li>
            <li>{{ $t('ruleI2') }}</li>
          </ul>
        </el-card>

        <!-- Mandamiento II -->
        <el-card shadow="hover" class="rule-card anim-pop">
          <h3>{{ $t('ruleII') }}</h3>
          <ul>
            <li>{{ $t('ruleII1') }}</li>
            <li>{{ $t('ruleII2') }}</li>
          </ul>
        </el-card>

        <!-- Mandamiento III -->
        <el-card shadow="hover" class="rule-card anim-pop">
          <h3>{{ $t('ruleIII') }}</h3>
          <ul>
            <li>{{ $t('ruleIII1') }}</li>
            <li>{{ $t('ruleIII2') }}</li>
          </ul>
        </el-card>
      </div>

      <p class="alea-iacta-est">¡Alea Iacta Est!</p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.el-card.rule-card {
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--color-dorado);
}
</style>
