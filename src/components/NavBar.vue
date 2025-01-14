<template>
  <nav class="sticky-nav">
    <div class="nav-container">
      <!-- Logo principal -->
      <div class="nav-logo">
        <a href="#top">El Dragón Cojo</a>
      </div>

      <!-- Menú con <el-menu> -->
      <el-menu
        mode="horizontal"
        background-color="rgba(0,0,0,0)"
        text-color="#fff"
        active-text-color="var(--color-dorado)"
        :default-active="activeIndex"
        class="nav-links"
      >
        <el-menu-item index="1">
          <a href="#sobre-nosotros">Sobre Nosotros</a>
        </el-menu-item>
        <el-menu-item index="2">
          <a href="#mandamientos">Mandamientos</a>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="#comunidad">Comunidad</a>
        </el-menu-item>
        <el-menu-item index="4">
          <a href="#contacto">Contacto</a>
        </el-menu-item>
      </el-menu>

      <!-- Idiomas con <el-dropdown> -->
      <div class="nav-idiomas">
        <el-dropdown trigger="hover" placement="bottom-end">
          <span class="el-dropdown-link">
            Idiomas <i class="fas fa-caret-down"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <img
                  src="@/assets/images/banderas/es.png"
                  alt="Español"
                  class="banderita"
                />
                Español
              </el-dropdown-item>
              <el-dropdown-item>
                <img
                  src="@/assets/images/banderas/ca.png"
                  alt="Català"
                  class="banderita"
                />
                Català
              </el-dropdown-item>
              <el-dropdown-item>
                <img
                  src="@/assets/images/banderas/en.png"
                  alt="English"
                  class="banderita"
                />
                English
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
</script>

<style scoped>
/* Solo si necesitas algún ajuste particular de Element Plus dentro del nav
   (p.ej., margin, overrides). Normalmente usas styles.css global. */
.el-dropdown-link {
  cursor: pointer;
}
</style>
