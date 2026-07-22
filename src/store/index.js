import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      carrito: []
    }
  },

  mutations: {
    agregarProducto(state, producto) {
      state.carrito.push(producto)
    }
  },

  getters: {
    cantidadProductos(state) {
      return state.carrito.length
    },

    totalCarrito(state) {
      return state.carrito.reduce(
        (total, producto) => total + producto.precio,
        0
      )
    }
  }
})

export default store