<script setup lang="ts">
import { useCurrencyStore } from "../store/currency.ts"
import { useUserStore } from "../store/user.ts"
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

// store getters
const {
    currenciesList
} = storeToRefs(useCurrencyStore())

const {
    updateAll
} = useCurrencyStore()
// user store
const {
  currentCurrency
} = storeToRefs(useUserStore())

</script>

<template>
  <div class="d-flex align-items-center">
    <span class="me-2">Current: </span>
    <select class="form-select me-3" v-model="currentCurrency">
      <option v-for="option, index in currenciesList" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>
</style>
