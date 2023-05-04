<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from "@/stores/store"
const store = useStore()

console.log(store.display);
</script>

<template>
    <div class="display">
        <v-field class="output">{{ store.display }}</v-field>
        <!-- TODO: ADD A BLINKING CURSOR FOR ADDIGN NUMBERS -->
    </div>
</template>

<style scoped>  
.display{
    width: 75%;
    height: 10vh;
}

.output{
    width: 100%;
    height: 100%;
    background-color: rgb(150, 160, 146);
    border: 1px solid black;
    border-radius: 5px;
    font-size: 2rem;
    text-align: right;
    padding: 10px;
}

</style>