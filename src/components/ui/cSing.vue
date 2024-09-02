<template>
    <svg
        class="c-sing"
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
    >
        <path v-if="!Array.isArray(sing)" fill-rule="evenodd" clip-rule="evenodd" :d="sing"></path>
        <path v-else fill-rule="evenodd" clip-rule="evenodd" v-for="path in sing"></path>
        
    </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface singProps {
    name: string
}

const props = withDefaults(defineProps<singProps>(), {
    name: 'empty'
})


const singsData = {
  "uncheck": "M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19Z",
  "checked": "M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L18.29 8.7C18.68 8.31 18.68 7.68 18.29 7.29C17.9 6.9 17.27 6.9 16.88 7.29L10 14.17L7.12 11.29C6.73 10.9 6.1 10.9 5.71 11.29C5.52275 11.4768 5.41751 11.7305 5.41751 11.995C5.41751 12.2595 5.52275 12.5132 5.71 12.7L9.3 16.29Z",
  "parted_checked": "M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM8 13H16C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13Z",
  "arrow-down": "M2.98505 6.99814C2.49505 7.48814 2.49505 8.27814 2.98505 8.76814L11.2951 17.0781C11.6851 17.4681 12.3151 17.4681 12.7051 17.0781L21.0151 8.76814C21.5051 8.27814 21.5051 7.48813 21.0151 6.99813C20.5251 6.50813 19.7351 6.50813 19.2451 6.99813L11.9951 14.2381L4.74505 6.98814C4.26505 6.50814 3.46505 6.50814 2.98505 6.99814Z",
  "arrow-up": "M2.98505 17.0019C2.49505 16.5119 2.49505 15.7219 2.98505 15.2319L11.2951 6.92186C11.6851 6.53186 12.3151 6.53186 12.7051 6.92186L21.0151 15.2319C21.5051 15.7219 21.5051 16.5119 21.0151 17.0019C20.5251 17.4919 19.7351 17.4919 19.2451 17.0019L11.9951 9.76186L4.74505 17.0119C4.26505 17.4919 3.46505 17.4919 2.98505 17.0019Z",
  "empty": ""
}


const sing = computed(() => {
  return singsData[props.name]
})

</script>

<style scoped>
.c-sing {
    cursor: pointer;
    width: 24px;
    height: 24px;
}

</style>
