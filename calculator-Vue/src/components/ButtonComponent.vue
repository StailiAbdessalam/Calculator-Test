<script setup>
import { ref, onMounted, defineProps,defineEmits } from 'vue'
const props = defineProps({
    value : String,
    styleButton : String      
});
const emit = defineEmits(['action'])
const action = () => {
      emit('action');
};
</script>

<template>
  <div @click="action()" :class="styleButton">{{ value }}</div>
</template>

<style>
.btn{
  background-color: #F2F2F2;
  border: 1px solid #999;
}
</style>