import { baseApi } from "@/redux/api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
        getAllSemesters: builder.query({
            query:() => ({
                url:'/academic-semesters',
                method:"GET",
            })
        }),
        addAcademicSemester: builder.mutation({
            query:(data) => ({
                url:'/academic-semesters/create-academic-semester',
                method:"POST",
                data:data,
            })
        })
    })
})

export const {useGetAllSemestersQuery,useAddAcademicSemesterMutation} = academicManagementApi;