import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

const menuSlice = createSlice({
    name: 'menuState',
    initialState: {
        menuName : 'Locatie'
    },
    reducers: {
        moveTo(state, action) {
            return {...state , menuName :action.payload}
        }
    }
})

export const { moveTo } = menuSlice.actions
export default menuSlice.reducer