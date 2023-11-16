import { createSlice } from "@reduxjs/toolkit";

const dietaSlice = createSlice({
    name: 'dieta',
    initialState: [],
    reducers: {
        addDieta: (state, action) => {
            return [...state, action.payload];
        },
        removeDieta: (state, action) => {
            const idRemove = action.payload;
            //dieta => !dieta.Dieta.find(item => item.descricao === descricaoToRemove)
            return state.filter(dieta => !dieta.Dieta.find(item => item === idRemove)); //dieta => dieta.dieta[0] != idRemove
        },
        updateDieta: (state, action) => {
            const { desc, newData } = action.payload;
            return state.map(dieta => {
                if (dieta.Dieta[0] == desc) {
                    return { ...dieta, ...newData };
                }
                return dieta;
            });
          },
    },
});

export const { addDieta, removeDieta, updateDieta } = dietaSlice.actions;
export default dietaSlice.reducer;