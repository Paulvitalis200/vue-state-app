<template>
    <h1>This is the child</h1>
    <div class="line"></div>
    {{ numbers }}
    <button @click="addNumber(4)">Add</button>
    <GrandChild />
</template>

<script setup>
import GrandChild from './GrandChild.vue';
import useNumber from '../composables/useNumbers'
import { useNumbersStore } from '@/stores/numbers';
const {numbers, addNumber} = useNumbersStore()

</script>