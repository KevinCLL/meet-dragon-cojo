<template>
  <footer>
    <div class="text-center text-sm mt-6 border-t border-gray-500">
      <p>{{ $t('footer', { currentYear: currentYear }) }}</p>
      <p>
        {{ $t('footerCreated') }}
        <a
          href="http://malkevnia.com/"
          target="_blank"
          rel="noopener"
          style="color: var(--color-dorado)"
        >
          Malkev
        </a>
        {{ $t('footerWith') }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>

<style scoped></style>
