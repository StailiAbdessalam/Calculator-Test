<script setup>
import { ref } from 'vue';
import {CalculateEquationA} from '../apis/'

// variable
const valueA = ref('');
const valueB = ref('');
const resultat = ref(false);
const equation = ref('exemple : 3X=6 => X=2');

// method 
const Calculate = async ()=>{
    const params = {
        valueA: valueA.value,
        valueB: valueB.value
    }
    try {
        const response = await CalculateEquationA(params);
        equation.value= 'resultat: '+valueA.value+'X='+valueB.value+' => X='+response.data;
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
            <input type="number" class="border text-black" v-model="valueA" />X =
            <input type="number"  class="border text-black" v-model="valueB" />
        </div>
        <button @click="Calculate" class="bg-blue-600 text-white p-3">Calculate</button>
    </div>
</template>
