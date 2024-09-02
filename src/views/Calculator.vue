<script setup lang="ts">
// store
import { useUserStore } from "../store/user.ts"
import { useCurrencyStore } from "../store/currency.ts"
import { storeToRefs } from 'pinia'

// utils
import { ref, computed, reactive } from 'vue'

// components
import CurrencyInput from "../components/composite/CurrencyInput.vue"

// store user getters
const {
  currentCurrency
} = storeToRefs(useUserStore())


// store currency getters
const {
  currenciesList,
  currenciesHash
} = storeToRefs(useCurrencyStore())

const {
  convertation
} = useCurrencyStore()

// TODO: refactoring to composables
const firstCurrencyState = reactive({
  value: 0,
  currency: "rub"
})

const secondCurrencyState = reactive({
  value: 0,
  currency: "usd"
})

const pairCurrenciesList = computed(() => {
  return currenciesList.value?.filter(item => {
    return item !== firstCurrencyState.currency
  }) || []
})

function convert() {
  secondCurrencyState.value = convertation(firstCurrencyState.value, firstCurrencyState.currency, secondCurrencyState.currency)
}


function updatePair() {
  // update uneversal pair
  convert()
}
</script>

<template>
<div class="calculator">
  <CurrencyInput
    v-model="firstCurrencyState.value"
    v-model:currency="firstCurrencyState.currency"
    :list="currenciesList"
     @update:modelValue="updatePair"
     @update:currency="updatePair"
  />
  <CurrencyInput
    v-model="secondCurrencyState.value"
    v-model:currency="secondCurrencyState.currency"
    :list="pairCurrenciesList"
    @update:modelValue="updatePair"
    @update:currency="updatePair"
  />
  <button class="btn btn-primary" @click="convert">Convert</button>
</div>
</template>

<style lang="scss">
.calculator {
}

</style>
