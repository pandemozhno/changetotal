import { ref } from "vue";

/*
    # HOW IT USE

    import { useSwitch } from "@/composables/useSwitch";

    const {
        state: anyNameState,
        toggle: anyNameToggleState
    } = useSwitch(state: boolean)


    # USE SET FORCE VALUE TO STATE
    
    anyNameToggleState(false)

    or 

    anyNameToggleState(true)

*/
export interface ICurrency {
    flag?: string,
    raw?: string,
    value: string
} 

export function useCurrency(aCount: number = 0, aCurrency: ICurrency) {
  const currency = ref<ICurrency>(aCurrency);
  const count = ref(aCount)

  function convert() {

  }

  function raw() {

  }

  return {
    currency,
    count,
    raw
  };
}
