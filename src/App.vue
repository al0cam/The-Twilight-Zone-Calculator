<script setup lang="ts">
import Display from './components/Display.vue'
import KeyPad from './components/KeyPad.vue';
import { useStore } from "@/stores/store"

const store = useStore();


</script>

<template>
  <main>
    <div class="content">
      <h1>
        The Twilight Zone Calculator
      </h1>

      <div>
        <v-switch v-model="store.twilightZone" class="switch" label="Twilight Zone Switch" inset></v-switch>
      </div>
      <!-- TODO: DISPLAY COMPONENT -->
      <Display></Display>
      <!-- TODO: CALCULATOR BUTTONS AND FUNCTIONS COMPONENT WITH NESTED COMPONENTS -->
      <KeyPad></KeyPad>
      
    </div>
  </main>
</template>

<style scoped>

html{
  color-scheme: light dark;
}

main{
  background-color: grey;
  height: 100vh;
  width: 100%;

}
.content{
  background-color: rgb(157, 157, 157);
  height: 100vh;
  margin-inline: auto;

  width: min(80ch, 100% - 4rem);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: start;
}
</style>
