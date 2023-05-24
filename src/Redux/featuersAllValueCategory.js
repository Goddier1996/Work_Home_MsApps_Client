import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoadData } from "../Api/LoadDataDataBase";


const initialState = {
    loading: false,
    ValueCategory: [],
    error: ''
}


export const fetchValueItemsCategory = createAsyncThunk('valueCategoryID/fetchValue', (data) => {

    return LoadData(data.typeCategory, data.pageNum);
})



const CommentsSlice = createSlice({
    name: 'valueCategoryId',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchValueItemsCategory.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchValueItemsCategory.fulfilled, (state, action) => {
            state.loading = false
            state.ValueCategory = action.payload
            state.error = ''
        })
        builder.addCase(fetchValueItemsCategory.rejected, (state, action) => {
            state.loading = false
            state.ValueCategory = []
            state.error = action.error.message
        })
    }
})



export default CommentsSlice.reducer