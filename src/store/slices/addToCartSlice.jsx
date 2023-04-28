import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const addToCartSlice = createSlice({
    name: 'menuState',
    initialState: {
        Location : '',
        Style : '',
        Text : {
            title : '',
            Subtitle : '',
            display : ''
        },
        Shape : '',
        Material :'',
        Size :''
    },
    reducers: {
        cartValue(state, action) {
            const { Location , Style , TextValue , Shape , Material , Size } = action.payload
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
              };
        }
    }
})

export const { cartValue } = addToCartSlice.actions
export default addToCartSlice.reducer