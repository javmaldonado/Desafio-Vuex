<!-- El componente renderiza la tabla incluyendo los botones para modificar stock -->
<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock Disponible</th>
          <th>Precio</th>
          <th>Modificar Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="game.codigo">
          <td>{{ game.codigo }}</td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ game.precio }}</td>
          <td>
            <CounterComponent :codigo="game.codigo" @update-stock="updateStock" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CounterComponent from './components/CounterComponent.vue';

export default {
  components: {
    CounterComponent
  },
  // Conecta el estado game al componente //
  computed: {
    ...mapState({
      games: state => state.games
    })
  },
  // Define los métodos para interactuar con Vuex //
  methods: {
    ...mapActions(['modifyStock', 'fetchGames']),
    updateStock({ codigo, amount }) {
      this.modifyStock({ codigo, amount });
    }
  },
  // Carga los datos cuando se crea el componente //
  mounted() {
    this.fetchGames();
  }
}
</script>

<style>
table {
  word-break: break-all;
  border-collapse: collapse;
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
}

h1,
h2 {
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
  margin-left: 300px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

button {
  margin: auto;
  padding: auto;
}
</style>
