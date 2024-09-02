<script setup lang="ts">
import { useCurrencyStore } from "../store/currency.ts"
import { useUserStore } from "../store/user.ts"
import { storeToRefs } from 'pinia'
const currencyStore = useCurrencyStore()

// store methods, promises
const {
    updateAll,
    convertation
} = currencyStore

// store getters
const {
    currenciesList,
    currenciesHash
} = storeToRefs(currencyStore)


// user store getter
const {
  currentCurrency
} = storeToRefs(useUserStore())



</script>

<template>
    <div class="main">

        <ul class="list-group">
            <li class="list-group-item"  v-for="currency, key in currenciesList">
                1 {{ currentCurrency }} =  {{ convertation(1, currentCurrency, currency) }} {{ currency }}
            </li>
        </ul>
        <button class="btn btn-primary mt-3" @click="updateAll">
            Update
        </button>
    </div>
</template>

<style lang="scss">
.main {
}

</style>
