import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction } from "@reduxjs/toolkit";
import { DataForDAPI,  UserStatus } from "src/interfaces";

interface StatePerson extends DataForDAPI {
    "status": string
}

const clearState: StatePerson = {
    "email": "",
    "password": "",
    "status": UserStatus.STATUS_ANONYMOUSUSER,
    "username": ""
};

/* CHECKR Local Storage
Return false or json's strrin from data of person.
*/

const lsPerson = localStorage.getItem("person"); /** Check the local storage, return 'null' or 'b_person' */

export let initialState: typeof clearState | object = clearState;

if (lsPerson) {
    initialState  = JSON.parse(lsPerson) as object;
    (initialState as typeof clearState).status = UserStatus.STATUS_USER;
}; 

/**
 * Here, we working with a statse of the user.
 * @initialState {initialState} initialState
 */
const userSlice = createSlice({
    name:"userstate",
    initialState,
    reducers:{
        resetPerson: () => {
            localStorage.removeItem("person");
        return clearState;
        },
        setPerson:(state, action: PayloadAction<StatePerson>) => {
            state = action.payload;
            return {...state};
        },
    },
});

export const {setPerson, resetPerson} = userSlice.actions;
export default userSlice.reducer;
