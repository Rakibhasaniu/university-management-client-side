import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../features/store";


const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:5000/api/v1', credentials:'include',
    prepareHeaders:(headers,{getState}) => {
        const token = (getState() as RootState).auth.token;
        console.log(getState())
        if(token){
            headers.set('authorization',`${token}`)
        }
        return headers;
    }
})
const basequeryWithRefreshToken = async(args,api,extraOptions) => {
    const result = await baseQuery(args,api,extraOptions);
    console.log(result)
    if(result.error?.status === 401){
        const res = fetch('/auth/refresh-token',{
            method:'POST',
            credentials:'include',
        })
    }
} 
export const baseApi = createApi({
    reducerPath:'baseApi',
    baseQuery: basequeryWithRefreshToken,
    endpoints:() => ({
        
    })
})