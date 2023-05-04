<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore();

</script>

<template>
    <div class="sideBySidePad">
        <div class="numberPad">
            <v-btn @click="store.appendNumberToDisplay('7')" >7</v-btn>
            <v-btn @click="store.appendNumberToDisplay('8')" >8</v-btn>
            <v-btn @click="store.appendNumberToDisplay('9')" >9</v-btn>
            <v-btn @click="store.appendNumberToDisplay('4')" >4</v-btn>
            <v-btn @click="store.appendNumberToDisplay('5')" >5</v-btn>
            <v-btn @click="store.appendNumberToDisplay('6')" >6</v-btn>
            <v-btn @click="store.appendNumberToDisplay('1')" >1</v-btn>
            <v-btn @click="store.appendNumberToDisplay('2')" >2</v-btn>
            <v-btn @click="store.appendNumberToDisplay('3')" >3</v-btn>
            <v-btn @click="store.appendNumberToDisplay('0')" >0</v-btn>
            <v-btn>,</v-btn>
            <v-btn>%</v-btn>
        </div>
        <div class="operationPad">
            <v-btn>+</v-btn>
            <v-btn>-</v-btn>
            <v-btn>*</v-btn>
            <v-btn>/</v-btn>
            <v-btn>√</v-btn>
            <v-btn>^2</v-btn>
            <v-btn>ans</v-btn>
            <v-btn class="equalsButton">=</v-btn>
        </div>
        <div>
            <v-btn @click="store.clearDisplay()">C</v-btn>
        </div>
    </div>
</template>

<style scoped>
.sideBySidePad{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.numberPad{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
}
.operationPad{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
}
.equalsButton{
    background-color: antiquewhite;
    /* grid-column: 1 / 3;
    grid-row: 4 / 6; */
}
button{
    width: 100%;
    height: 100%;
    font-size: 2rem;
    border-radius: 5px;
    background-color: rgb(150, 160, 146);
    border: 1px solid black;
    color: black;
    font-weight: bold;
    text-align: center;
}

</style>
```