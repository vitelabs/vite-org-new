import { readonly, ref } from 'vue';

// provide a function just like react useState
export function useReactState(initialState: any) {
  const state = ref(initialState);
  const setState = (newState: any) => {
    state.value = newState;
  };
  
  return [readonly(state), setState];
}