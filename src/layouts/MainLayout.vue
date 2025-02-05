<template>
  <div class="main-layout">
    <el-header class="sticky top-0 z-50 w-full !p-0 m-0 bg-white shadow">
      <NavBar />
    </el-header>

    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <FooterComponent />
    </el-footer>
    <el-backtop :right="15" :bottom="15" />
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
