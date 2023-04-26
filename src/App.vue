<script setup lang="ts">
import Display from './components/Display.vue'

</script>

<template>
  <main>
    <div class="content">
      <h1>
        The Twilight Zone Calculator
      </h1>

      <Display></Display>
      <!-- TODO: DISPLAY COMPONENT -->
      <!-- TODO: CALCULATOR BUTTONS AND FUNCTIONS COMPONENT WITH NESTED COMPONENTS -->

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
