<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore();

const operations = 
{
    sum: "+",
    sub: "-",
    mult: "*",
    div: "/",
    sqrt: "√",
    pow: "^2",
    ans: "ans",
    equals: "=",
}


</script>

<template>
    <div class="sideBySidePad">
        <div class="numberPad">
            <v-btn id="7" @click="store.appendNumberToDisplay('7')" >7</v-btn>
            <v-btn id="8" @click="store.appendNumberToDisplay('8')" >8</v-btn>
            <v-btn id="9" @click="store.appendNumberToDisplay('9')" >9</v-btn>
            <v-btn id="4" @click="store.appendNumberToDisplay('4')" >4</v-btn>
            <v-btn id="5" @click="store.appendNumberToDisplay('5')" >5</v-btn>
            <v-btn id="6" @click="store.appendNumberToDisplay('6')" >6</v-btn>
            <v-btn id="1" @click="store.appendNumberToDisplay('1')" >1</v-btn>
            <v-btn id="2" @click="store.appendNumberToDisplay('2')" >2</v-btn>
            <v-btn id="3" @click="store.appendNumberToDisplay('3')" >3</v-btn>
            <v-btn id="0" @click="store.appendNumberToDisplay('0')" >0</v-btn>
            <v-btn>,</v-btn>
            <v-btn>%</v-btn>
        </div>

        <!-- TODO: assign operations to operators -->
        <div class="operationPad">
            <v-btn :id="operations.sum" @click="store.addOperation(operations.sum)" >{{operations.sum}}</v-btn>
            <v-btn :id="operations.sub" @click="store.addOperation(operations.sub)" >{{operations.sub}}</v-btn>
            <v-btn :id="operations.mult" @click="store.addOperation(operations.mult)" >{{operations.mult}}</v-btn>
            <v-btn :id="operations.div" @click="store.addOperation(operations.div)" >{{operations.div}}</v-btn>
            <v-btn :id="operations.sqrt" @click="store.addOperation(operations.sqrt)" >{{operations.sqrt}}</v-btn>
            <v-btn :id="operations.pow" @click="store.addOperation(operations.pow)" >{{operations.pow}}</v-btn>
            <v-btn :id="operations.ans" @click="store.ansToDisplay" >{{operations.ans}}</v-btn>
            <v-btn :id="operations.equals" class="equalsButton" @click="store.calculate" >{{operations.equals}}</v-btn>
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