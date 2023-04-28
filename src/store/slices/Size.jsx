import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'sizeState',
    initialState: {
        direction : true,
        Shape : '',
        height : '380px',
        width : '250px',
        class : "rounded-full",
        Sizes : ''
    },
    reducers: {
        changeSize(state, action) {

            const { Sizes , height, width, Shape ,direction } = action.payload;

                return { ...state , Shape , height , width, direction  };
        }
    }
})

export const { changeSize } = menuSlice.actions
export default menuSlice.reducer