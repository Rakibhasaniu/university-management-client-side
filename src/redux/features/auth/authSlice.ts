/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
    user: null | OnBeforeUnloadEventHandler;
    token: null | string;
}

const initialState:TAuthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser :(state,action) => {
            const {user,token}= action.payload;
            state.user=user;
            state.token=token;
        },
        logout:(state) => {
            state.user = null;
            state.token = null;
        },
    }
})


export const {setUser,logout} = authSlice.actions;
export default authSlice.reducer;
export const CurrentUser = (state: any) => state.auth.token;