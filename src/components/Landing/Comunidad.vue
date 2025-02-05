<template>
  <section id="comunidad" class="fade-in-section mt-12">
    <div class="text-center">
      <h2 class="text-2xl">{{ $t('joinUs') }}</h2>
      <p class="mt-2">
        {{ $t('joinUsDescription') }}
      </p>

      <div class="comunidad-links pt-2">
        <el-tag type="primary">
          <a href="https://t.me/joinchat/Ha-OPPG6MmcefDLp" target="_blank" rel="noopener">
            <i class="fab fa-telegram-plane"></i> Telegram
          </a>
        </el-tag>
        <el-tag type="success" class="ml-2">
          <a href="https://chat.whatsapp.com/CW162Jjz1VRFv0gMk9L0Qs" target="_blank" rel="noopener">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
        </el-tag>
      </div>

      <h3 class="text-xl mt-4">
        {{ $t('socialTitle') }}
      </h3>
      <p class="mt-2">
        {{ $t('socialDescription') }}
      </p>
      <div class="comunidad-links pt-2">
        <el-tag type="warning">
          <a href="https://www.instagram.com/dragon.cojo/" target="_blank" rel="noopener">
            <i class="fab fa-instagram"></i> Instagram
          </a>
        </el-tag>
        <el-tag type="danger" class="ml-2">
          <a href="https://www.youtube.com/@eldragoncojo" target="_blank" rel="noopener">
            <i class="fab fa-youtube"></i> YouTube
          </a>
        </el-tag>
      </div>
    </div>
  </section>
</template>
