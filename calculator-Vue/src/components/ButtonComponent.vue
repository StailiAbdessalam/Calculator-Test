<script setup>
import { defineProps,defineEmits } from 'vue'
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
