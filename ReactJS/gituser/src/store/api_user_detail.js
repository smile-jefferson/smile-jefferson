import { createSlice } from "@reduxjs/toolkit";

const API_USER_DETAIL = createSlice({
    name: "api_user_detail",
    initialState: {
        user_detail: []
    },
    reducers: {
        UserDetail: (state, action) =>{
            state.user_detail = action.payload
        }
    },
});


export const selectUserDetail = (state) => state.api_user_detail;
export default API_USER_DETAIL.reducer