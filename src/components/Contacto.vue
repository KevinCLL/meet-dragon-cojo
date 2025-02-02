<template>
  <section id="contacto" class="fade-in-section">
    <div class="container" style="text-align: center">
      <h2>{{ $t('contact') }}</h2>
      <p>{{ $t('contactFormDescription') }}</p>

      <el-form
        ref="contactForm"
        class="contact-form"
        label-position="top"
        :model="form"
        :rules="rules"
        action="https://formsubmit.co/drac.coix@gmail.com"
        method="POST"
      >
        <!-- Campos hidden para formsubmit -->
        <input type="hidden" name="_next" value="https://dragoncojo.com/gracias.html" />
        <input type="hidden" name="_captcha" value="false" />

        <el-form-item :label="$t('name')" prop="nombre">
          <el-input v-model="form.nombre" :name="$t('name')" required />
        </el-form-item>

        <el-form-item :label="$t('email')" prop="email">
          <el-input v-model="form.email" :name="$t('email')" required />
        </el-form-item>

        <el-form-item :label="$t('message')" prop="mensaje">
          <el-input
            v-model="form.mensaje"
            :name="$t('message')"
            type="textarea"
            :rows="5"
            required
          />
        </el-form-item>

        <div class="form-actions">
          <el-button class="btn-cta" type="primary" native-type="submit" :auto-insert-space="false">
            {{ $t('send') }}
          </el-button>
        </div>
      </el-form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  nombre: '',
  email: '',
  mensaje: '',
})

const rules = computed(() => ({
  nombre: [{ required: true, message: t('nameRules'), trigger: 'blur' }],
  email: [
    { required: true, message: t('emailRules'), trigger: 'blur' },
    { type: 'email', message: t('emailFail'), trigger: 'blur' },
  ],
  mensaje: [{ required: true, message: t('messageRules'), trigger: 'blur' }],
}))
</script>
