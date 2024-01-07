import { create } from "zustand";

export const useStoreText = create((set) => 
({
    transLate: '',
    translateText: (value) => set(state => ({
        transLate: state.transLate = value
    }))
}))