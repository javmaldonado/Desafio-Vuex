import { createStore } from "vuex";
import gamesData from "@/assets/games.json";

export default createStore({
  state: {
    // Array que contiene la lista de juegos //
    games: [],
  },
  mutations: {
    // Recibe el estado actual y una lista de juegos //
    setGames(state, games) {
      return (state.games = games);
    },
    // Recibe el estado actual state,  y un objeto con codigo y el nuevo valor de stock //
    updateStock(state, { codigo, newStock }) {
      // Este metodo enlista los juegos con stata.game y busca el codigo//
      const game = state.games.find((game) => game.codigo === codigo);
      // SI encuentra el código//
      if (game) {
        // Actualiza el stock dandole el nuevo valor//
        game.stock = newStock;
      }
    },
  },
  actions: {
    // Permite cargar los datos del archivo JSON//
    fetchGames(context) {
      const games = gamesData.map((game) => ({
        ...game,
        stock: Number(game.stock),
      }));
      context.commit("setGames", games);
    },
    // Es la acción que modifica el stock de un juego//
    modifyStock(context, { codigo, amount }) {
      const game = context.state.games.find((game) => game.codigo === codigo);
      if (game) {
        const newStock = game.stock + Number(amount);
        context.commit("updateStock", { codigo, newStock });
      }
    },
  },
  getters: {
    games: (state) => state.games,
  },
});
