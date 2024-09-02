import { defineStore } from 'pinia'
import { reactive, computed } from "vue"


export const useCurrencyStore = defineStore('currency', () => {
    const currencyesHashTable = reactive({ value: null });

    const currenciesList = computed(() => {
        const list = new Set();
        if (currencyesHashTable.value) {
            for (var key of Object.keys(currencyesHashTable.value)) {
                const pairs = key.split('-')
                list
                    .add(pairs[0])
                    .add(pairs[1])
            }
        }
        return Array.from(list)
    })

    const currenciesHash = computed(() => {
        return currencyesHashTable.value
    })

    async function updateAll() {
        const response = await fetch('https://status.neuralgeneration.com/api/currency')
        const json = await response.json();
        console.log(json)
        currencyesHashTable.value = json
        return json
    }

    function convertation(count: number, from: string, to: string) {
        const rate = currencyesHashTable.value[`${from}-${to}`] || 1
        console.log(`${from}-${to}`)
        console.log(rate)
        return (count * rate).toFixed(2)
    }

    updateAll()
    return { 
        currenciesList,
        currenciesHash,

        updateAll,
        convertation
    }
    
})