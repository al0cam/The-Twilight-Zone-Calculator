import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useStore = defineStore('store', () => {
    type op = {[key: string]: (a: number, b: number) => number}
    type opWithSingleArgs = {[key: string]: (a: number) => number}
    const operations: op | opWithSingleArgs = {
        '+': (a: number, b: number):number => a + b,
        '-': (a: number, b: number):number => a - b,
        '*': (a: number, b: number):number => a * b,
        '/': (a: number, b: number):number => a / b,
        '√': (a: number, b: number):number => Math.sqrt(b),
        '^2': (a: number, b: number):number => a * a,
    };

    const twilightZoneOperations: op | opWithSingleArgs = {
        '+': (a: number, b: number):number => 21,
        '-': (a: number, b: number):number => 21,
        '*': (a: number, b: number):number => 21,
        '/': (a: number, b: number):number => 21,
        '√': (a: number, b: number):number => 21,
        '^2': (a: number, b: number):number => 21,
    };

    const display = ref("");
    const ans = ref(0);
    const operator = ref("");
    const clearScreen = ref(false);
    const twilightZone = ref(false);

    function appendNumberToDisplay(number: string) {
        if(clearScreen.value)
        {
            clearDisplay();
            display.value += number;
        }
        else
            display.value += number;
    }
    function clearFunction()
    {
        display.value = '';
        ans.value = 0;
        operator.value = '';
    }
    function clearDisplay()
    {
        clearScreen.value = false;
        display.value = '';
    }
    function calculate()
    {
        let num1 = ans.value
        let num2 = parseFloat(display.value);
        clearScreen.value = true;
        if(num2 == 0)
        {
            display.value = num1.toString();
            return;
        }
        else if ( operator.value == '/' && num2 == 0)
        {
            display.value = "ERROR";
            return;
        }
        else if(operator.value == "")
        {
            display.value = num2.toString();
            return;
        }
        else
        {
            let result = twilightZone.value ? twilightZoneOperations[operator.value](num1, num2) : operations[operator.value](num1, num2)
            ans.value = result;
            display.value = result.toString();
            operator.value = '';
        }
    }

    function addOperation(op: string) {
        if(operator.value == '')
        {
            ans.value = parseFloat(display.value);
            operator.value = op;
            clearScreen.value = true;
        }
        else if (operator.value != '')
        {
            calculate();
            operator.value = op;
        }
    }

    function ansToDisplay()
    {
        display.value = ans.value.toString();
    }
    

    return {display, ans, operator, appendNumberToDisplay, clearDisplay, addOperation, ansToDisplay, calculate, twilightZone}
})