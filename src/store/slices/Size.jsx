import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'sizeState',
    initialState: {
        direction : true,
        shape : '',
        height : '380px',
        width : '240px',
        class : "rounded-full",
    },
    reducers: {
        changeSize(state, action) {

            const { height, width, shape ,direction } = action.payload;

                return { ...state , shape , height , width, direction  };
        }
    }
})

export const { changeSize } = menuSlice.actions
export default menuSlice.reducer