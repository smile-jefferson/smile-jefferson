import { createSlice } from "@reduxjs/toolkit";


export const API_USER_LIST = createSlice({
    name:"api_user_list",
    initialState:{
        user_list: []
    },
    reducers:{
        UserList: (state, action) =>{
            state.user_list = action.payload
        }
    },
});

export const selectUserList = (state) => state.api_user_list;
export default API_USER_LIST.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// export const usersArraySlice = createSlice({
//     name:"usersArray",
//     initialState:{
//         orign_users_array:[]
//     },
//     reducers:{
//         ADD_USERS_ARRAY:(state, action)=>{
//             if(action.payload!==null){
//                 state.orign_users_array=action.payload
//             }
//         }
//     },

// })

// export const {
//     ADD_USERS_ARRAY
// } = usersArraySlice.actions

// export default usersArraySlice.reducer