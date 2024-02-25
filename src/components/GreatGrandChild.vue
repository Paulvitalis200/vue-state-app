
<script setup>

import useNumbers from '@/composables/useNumbers';
import { useNumbersStore } from '@/stores/numbers';
const {numbers, doubleNumber, filterNum} = useNumbersStore()
</script>
<template>
    <h1>This is the Great grand child</h1>
    {{ filterNum(10) }}
    <div class="line"></div>
    
</template>

