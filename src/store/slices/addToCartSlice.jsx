import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const addToCartSlice = createSlice({
    name: 'cartValueState',
    initialState: {
        Location : '',
        Style : {},
        Text : {
            title : '',
            Subtitle : '',
            display : ''
        },
        Shape : '',
        Material :'',
        Size :{},
        Price : "",
        cartSize: ''
    },
    reducers: {
        cartValue(state, action) {
            const { Location , Style , TextValue , Shape , Material , Size, Price } = action.payload
            return {
                ...state,
                Location,
                Style,
                TextValue: {
                  ...state.TextValue,
                  ...TextValue,
                },
                Shape,
                Material,
                Size,
                Price
              };
        }
    }
})

export const { cartValue } = addToCartSlice.actions
export default addToCartSlice.reducer