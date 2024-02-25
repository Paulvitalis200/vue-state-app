
<script setup>

import useNumbers from '@/composables/useNumbers';
const {numbers, filterNum} = useNumbers()
</script>
<template>
    <h1>This is the Great grand child</h1>
    {{ filterNum(5)}}
    <div class="line"></div>
    
</template>

