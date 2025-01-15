<template>
  <section id="contacto" class="fade-in-section">
    <div class="container" style="text-align:center;">
      <h2>Contáctame</h2>
      <p>Si deseas más información o tienes alguna duda, por favor rellena el siguiente formulario.</p>

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

        <el-form-item label="Nombre:" prop="nombre">
          <el-input
            v-model="form.nombre"
            name="Nombre"
            required
          />
        </el-form-item>

        <el-form-item label="Tu email:" prop="email">
          <el-input
            v-model="form.email"
            name="Email"
            required
          />
        </el-form-item>

        <el-form-item label="Mensaje:" prop="mensaje">
          <el-input
            v-model="form.mensaje"
            name="Mensaje"
            type="textarea"
            :rows="5"
            required
          />
        </el-form-item>

        <div class="form-actions">
          <el-button
            class="btn-cta"
            type="primary"
            native-type="submit"
            :auto-insert-space="false"
          >
            Enviar
          </el-button>
        </div>
      </el-form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const rules = {
  nombre: [{ required: true, message: 'Por favor ingresa tu nombre', trigger: 'blur' }],
  email: [
    { required: true, message: 'Por favor ingresa tu email', trigger: 'blur' },
    { type: 'email', message: 'Formato de email inválido', trigger: 'blur' }
  ],
  mensaje: [{ required: true, message: 'Por favor escribe un mensaje', trigger: 'blur' }]
}
</script>

<style scoped>
/* Si necesitas un override sutil al .el-form, etc. */
</style>
