<template>
  <div class="main-layout">
    <el-header>
      <NavBar />
    </el-header>

    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <FooterComponent />
    </el-footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
