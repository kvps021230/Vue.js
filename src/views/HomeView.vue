<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

import ProductCard from '../components/ProductCard.vue'
import manzanas from '../assets/Manzanas.jpg'
import bananos from '../assets/Bananos.jpg'
import uvas from '../assets/Uvas.jpeg'

const nombreCliente = ref('')
const store = useStore()

const productos = ref([
  {
    id: 1,
    nombre: 'Manzana',
    descripcion: 'Manzana roja fresca',
    precio: 750,
    imagen: manzanas
  },
  {
    id: 2,
    nombre: 'Banano',
    descripcion: 'Banano dulce y natural',
    precio: 500,
    imagen: bananos
  },
  {
    id: 3,
    nombre: 'Uvas',
    descripcion: 'Uvas verdes seleccionadas',
    precio: 1200,
    imagen: uvas
  }
])

const agregarAlCarrito = (producto) => {
  store.commit('agregarProducto', producto)
}
</script>

<template>
  <main>

    <h1>🏠 Vue Market</h1>

    <p>Una demostración práctica desarrollada con Vue.js</p>

    <label for="nombre">
      Nombre del cliente:
    </label>

    <input
      id="nombre"
      v-model="nombreCliente"
      type="text"
      placeholder="Escribe tu nombre"
    />

    <p v-if="nombreCliente">
      ¡Hola, {{ nombreCliente }}! 👋
    </p>

    <p class="contador">
      Productos en el carrito:
      <strong>{{ store.getters.cantidadProductos }}</strong>
    </p>

    <RouterLink
      to="/cart"
      class="enlace-carrito"
    >
      🛒 Ir al carrito
    </RouterLink>

    <h2>Nuestros productos</h2>

    <div class="productos">

      <ProductCard
        v-for="producto in productos"
        :key="producto.id"
        :producto="producto"
        @agregar="agregarAlCarrito"
      >

        <button
          class="btn-carrito"
          @click="agregarAlCarrito(producto)"
        >
          Agregar al carrito
        </button>

      </ProductCard>

    </div>

  </main>
</template>

<style scoped>

main{
    max-width:700px;
    margin:40px auto;
    padding:30px;
    font-family:Arial,sans-serif;
}

.productos{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
    margin-top:30px;
}

input{
    display:block;
    width:100%;
    margin-top:8px;
    padding:10px;
    font-size:1rem;
}

.contador{
    margin-top:18px;
    font-size:1.05rem;
}

.enlace-carrito{
    display:inline-block;
    margin:15px 0 25px 0;
    color:#18815d;
    font-weight:bold;
    text-decoration:none;
}

.enlace-carrito:hover{
    text-decoration:underline;
}

.btn-carrito{
    margin-top:10px;
    width:100%;
    padding:10px;
    background:#42b883;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
}

.btn-carrito:hover{
    background:#35966c;
}

</style>