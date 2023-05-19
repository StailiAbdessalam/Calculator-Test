<script setup>
import { ref } from 'vue';
import {CalculateEquationB} from '../apis/';

// variable

const valueA = ref('');
const valueB = ref('');
const valueC = ref('');
const resultat = ref(false);
const equation = ref('exemple : 3X² + -6X + -2 =0 ===> X1 = -2.61 and X2 = 20.61  ');

// method 

const Calculate = async ()=>{
    const params = {
        valueA: valueA.value,
        valueB: valueB.value,
        valueC: valueC.value
    };
    
    try {
        const response = await CalculateEquationB(params);
        equation.value= 'resultat: '+valueA.value+'X² + '+valueB.value+'X +'+valueC.value+'=0  ===> X='+response.data;
        resultat.value = true;
      } catch (error) {
        console.error(error); 
      }
}
</script>

<template>
    <div class="flex flex-col gap-4 h-[300px]">
        <div :class="resultat ? 'bg-green-600 text-white w-full p-6':'bg-blue-600 text-white w-full p-6'">
            {{ equation }}
        </div>
        <div class="flex gap-4 bg-blue-600 p-3 text-white">
            <input type="number" class="border text-black" v-model="valueA" />X² +
            <input type="number" class="border text-black" v-model="valueB" />X +
            <input type="number" class="border text-black" v-model="valueC" />=
            <input type="number"  class="border text-black pl-4" value="0" disabled />
        </div>
        <button @click="Calculate" class="bg-blue-600 text-white p-3">Calculate</button>
    </div>
</template>
