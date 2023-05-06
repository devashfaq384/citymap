import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'sizeState',
    initialState: {
        direction : true,
        shape : 'rectangle-Y',
        material: 'basic',
        height : '380px',
        width : '240px',
        class : "rounded-full",
        sizes : [
            {
                name:'S',
                measures:'(50x70 CM)',
                priceBasic:'€209',
                pricePro : '€259',
                changeAmount : 10
            },
            {
                name:'M',
                measures:'(60x85 CM)',
                priceBasic:'€232',
                pricePro : '€288',
                changeAmount : 20
            },
            {
                name:'L',
                measures:'(72x100 CM)',
                priceBasic:'€282',
                pricePro : '€338',
                changeAmount : 30
            },
            {
                name:'XL',
                measures:'(86x120 CM)',
                priceBasic:'€339',
                pricePro : '€419',
                changeAmount : 40
            },
            {
                name:'XXL',
                measures:'(107x150 CM)',
                priceBasic:'€444',
                pricePro : '€569',
                changeAmount : 50
            },
           
        ]
    },
    reducers: {
        changeSize(state, action) {

            const { height, width, shape ,direction, sizes , material } = action.payload;
                return { ...state , shape , height , width, direction , sizes , material };
        }
    }
})

export const { changeSize } = menuSlice.actions
export default menuSlice.reducer