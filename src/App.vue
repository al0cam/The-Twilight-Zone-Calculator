<script setup lang="ts">
import Display from './components/Display.vue'
import KeyPad from './components/KeyPad.vue';

</script>

<template>
  <main>
    <div class="content">
      <h1>
        The Twilight Zone Calculator
      </h1>

      <!-- TODO: DISPLAY COMPONENT -->
      <Display></Display>
      <!-- TODO: CALCULATOR BUTTONS AND FUNCTIONS COMPONENT WITH NESTED COMPONENTS -->
      <KeyPad></KeyPad>
      
    </div>
  </main>
</template>

<style scoped>
main{
  background-color: grey;
  height: 100vh;
  width: 100%;
}
.content{
  background-color: rgb(157, 157, 157);
  max-width: 960px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: start;
}
</style>
