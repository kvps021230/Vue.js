<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterLink } from 'vue-router'

const store = useStore()

const carrito = computed(() => store.state.carrito)
const total = computed(() => store.getters.totalCarrito)
</script>

<template>
  <main>
    <h1>🛒 Carrito de compras</h1>

    <RouterLink to="/" class="enlace">
      ← Volver al inicio
    </RouterLink>

    <p v-if="carrito.length === 0" class="vacio">
      El carrito está vacío.
    </p>

    <section v-else>
      <article
        v-for="(producto, indice) in carrito"
        :key="`${producto.id}-${indice}`"
        class="producto-carrito"
      >
        <img
          :src="producto.imagen"
          :alt="producto.nombre"
        />

        <div>
          <h2>{{ producto.nombre }}</h2>
          <p>{{ producto.descripcion }}</p>
          <strong>₡{{ producto.precio }}</strong>
        </div>
      </article>

      <div class="resumen">
        <p>
          Cantidad de productos:
          <strong>{{ carrito.length }}</strong>
        </p>

        <p>
          Total:
          <strong>₡{{ total }}</strong>
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.enlace {
  display: inline-block;
  margin-bottom: 25px;
  color: #18815d;
  font-weight: bold;
  text-decoration: none;
}

.enlace:hover {
  text-decoration: underline;
}

.vacio {
  padding: 25px;
  border-radius: 10px;
  background: #f2f8f5;
  text-align: center;
}

.producto-carrito {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.producto-carrito img {
  width: 110px;
  height: 90px;
  border-radius: 8px;
  object-fit: cover;
}

.producto-carrito h2 {
  margin-top: 0;
  margin-bottom: 5px;
}

.resumen {
  margin-top: 25px;
  padding: 20px;
  border-radius: 12px;
  background: #f2f8f5;
  font-size: 1.1rem;
}
</style>