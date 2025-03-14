<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field type="text" id="nombre" name="nombre" v-model="nombre"/>
        <ErrorMessage name="nombre"></ErrorMessage>
      </div>

      <div class="form">
        <label for="email">Email: </label>
        <Field type="email" id="email" name="email" v-model="email"/>
        <ErrorMessage name="email"></ErrorMessage>
      </div>

      <div class="form">
        <button type="submit">Registrar</button>
      </div>

    </Form>
  </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import {schema} from '../schemas/validationSchema';
import { useResgistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useResgistrarStore();

const nombre = ref('');
const email = ref('');

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value)
  console.log("Se ha enviado el formulario");
}
</script>

<style scoped>
.form{
  margin-bottom: 10px;
}
</style>
