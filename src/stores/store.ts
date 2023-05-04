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

 
    // TODO: write a way to add numbers to the display and convert them into stored values
    // TODO: write a function which will try to calculate the result of the stored values based on the operator
    // TODO: if the operator is empty the last entered number should be returned uppon pressing equals
    // TODO: if the operator is not empty the last entered number should be used as the second operand if its not null
    const display = ref("");
    const ans = ref(0);
    const operator = ref("");

    function appendNumberToDisplay(number: string) {
        display.value += number;
    }
    function clearDisplay()
    {
        display.value = '';
        ans.value = 0;
        operator.value = '';
    }
    function calculate()
    {
        let num1 = ans.value
        let num2 = parseFloat(display.value);
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
            ans.value = operations[operator.value](num1, num2);
            display.value = operations[operator.value](num1, num2).toString();
            operator.value = '';
        }
    }

    function addOperation(op: string) {
        if(operator.value == '')
            operator.value = op;
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
    

    return {display, ans, operator, appendNumberToDisplay, clearDisplay, addOperation, ansToDisplay}
})