<script setup lang="ts">
import { defineModel, ref } from "vue"

const {
    list
} = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})

const value = ref(0)
const model = defineModel()
const currency = defineModel('currency')

</script>

<template>
<div class="currency-input">
    <div class="input-group mb-3">
        <input type="number" class="form-control" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"/>
        <select class="form-select input-group currency-input__currency" v-model="currency">
                <option  v-for="currency in list" :value="currency"> {{ currency }}</option>
        </select>
    </div>

   
</div>
</template>

<style lang="scss">
.currency-input {
    &__currency {
        max-width: 20% !important;
        min-width: 80px !important;
    }
}

</style>
