import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    
    const currentCurrency = ref("rub");
    
    return { 
        currentCurrency
    }
})