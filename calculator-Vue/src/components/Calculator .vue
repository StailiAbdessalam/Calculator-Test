<template>
  <div class="grid w-[60vw] h-[300px] cursor-pointer">
    <div class="display">
      <div v-if="state">
        {{ current || 0}}
      </div>
      <div v-else>
        <ul>
          <li v-for="hist in history">
            {{ hist }}
          </li>
        </ul>
      </div>

    </div>
    
    <ButtonComponents @action="clear" value="C" styleButton="btn" />
    <ButtonComponents @action="sign" styleButton="btn operator" value="+/-" />
    <ButtonComponents @action="persent('%')" value="%" styleButton="btn operator"/>
    <ButtonComponents @action="append('/')" value="/" styleButton="btn operator"/>
    <ButtonComponents @action="append('7')" value="7" styleButton="btn "/>
    <ButtonComponents @action="append('8')" value="8" styleButton="btn "/>
    <ButtonComponents @action="append('9')" value="9" styleButton="btn "/>
    <ButtonComponents @action="append('*')" value="*" styleButton="btn operator"/>
    <ButtonComponents @action="append('4')" value="4" styleButton="btn "/>
    <ButtonComponents @action="append('5')" value="5" styleButton="btn "/>
    <ButtonComponents @action="append('6')" value="6" styleButton="btn "/>
    <ButtonComponents @action="append('-')" value="-" styleButton="btn operator"/> 
    <ButtonComponents @action="append('1')" value="1" styleButton="btn "/>
    <ButtonComponents @action="append('2')" value="2" styleButton="btn "/>
    <ButtonComponents @action="append('3')" value="3" styleButton="btn "/>
    <ButtonComponents @action="append('+')" value="+" styleButton="btn operator"/>
    <ButtonComponents @action="append('0')" value="0" styleButton="btn zero"/>
    <ButtonComponents @action="dot()" value="." styleButton="btn"/>
    <ButtonComponents @action="equal()" value="=" styleButton="btn operator"/>
    <ButtonComponents @action="histories" value="history" styleButton="btn "/>

  </div>
</template>

<script setup>
import ButtonComponents from '../components/ButtonComponent.vue'
import { ref } from 'vue';
import axios from 'axios';

let current=ref('');
let operator=null;
let history =[];
let solve='';
let state=true;

    const clear=()=>{
      state=true
      current.value=''
    };
    const sign=()=>{
         current.value = current.value.toString().charAt(0) === '-' ?
        current.value.toString().slice(1) : `-${current.value}`;
    };
    const persent=()=>{
      current.value = `${parseFloat(current.value)/100}`
    };
    const append=(number)=>{
      current.value = `${current.value}${number}`
    };
    const dot=()=>{
      const lastIndex = current.value.length - 1;
      if (lastIndex >= 0 && current.value[lastIndex] !== '.') {
        append('.');
      }
    };


    const equal = async ()=>{
      try {
        const response = await axios.post('http://127.0.0.1:8000/calculator', {
          current: current.value,
        });
        console.log(response);
        solve = current.value + '='
        solve = solve + response.data;
        current.value = response.data;
        history.push(solve)
        console.log(solve)
      } catch (error) {
        console.error(error); // Handle the error
      }
    }

    const histories=()=>{
      state = false
      current.value = history
    }


</script>


<style scoped>

.calculator{
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display{
  display: flex;
  align-items: center;
  padding-left: 15px;
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  border: 1px solid #999;
}
.zero{
  grid-column: 1 / 3;
}
.operator{
  background-color: green;
  color: white;
}



</style>
