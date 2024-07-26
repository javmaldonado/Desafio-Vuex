<!-- El componente incluye los botones que permiten modificar (aumentar o disminuir) la cantidad de stock de cada juego, se emite para que pueda ser renderizado po el padre App -->
<template>
    <div class="button-container">
        <!-- El evento click llama al metodo updateStock para que aumente o disminuya en 1 -->
        <button @click="updateStock(1)">+</button>
        <button @click="updateStock(-1)">-</button>
    </div>
</template>

<script>
export default {
    props: {
        // Esta propiedad espera recibir un numero, si es true modifica el stock //
        codigo: {
            type: Number,
            required: true
        }
    },
    methods: {
        // Este método representa la cantidad que se desea incrementar o disminuir el stock //
        updateStock(amount) {
            // Se emite el evento al componente padre App.vue //
            this.$emit('update-stock', { codigo: this.codigo, amount })
        }
    }
}
</script>

<style>
.button-container {
    display: flex;
    justify-content: space-around;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>