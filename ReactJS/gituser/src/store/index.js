import { configureStore } from "@reduxjs/toolkit";

import API_USER_LIST from "./api_user_list";
import API_USER_DETAIL from "./api_user_detail";
export default configureStore({
    reducer:{
        list: API_USER_LIST,
        detail: API_USER_DETAIL,
    },
});