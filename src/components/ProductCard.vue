<script setup>

const props = defineProps({
  producto: Object
})

const emit = defineEmits(['agregar'])

</script>

<template>
  <article class="card">

    <img
      :src="producto.imagen"
      :alt="producto.nombre"
    >

    <h3>{{ producto.nombre }}</h3>

    <p>{{ producto.descripcion }}</p>

    <strong>₡{{ producto.precio }}</strong>

<slot>
  <button @click="emit('agregar', props.producto)">
    Agregar al carrito
  </button>
</slot>

  </article>
</template>

<style scoped>

.card{
    border:1px solid #ddd;
    border-radius:12px;
    padding:15px;
    text-align:center;
}

img{
    width:170px;
    height:170px;
    object-fit:cover;
    border-radius:10px;
}

button{
    margin-top:10px;
    width:100%;
    padding:10px;
    background:#42b883;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
}

button:hover{
    background:#35966c;
}

</style>