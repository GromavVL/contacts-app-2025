import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../api";

const USERS_SLICE_NAME = 'users';

const initialState = {
    posts: [],
    isFetching: false,
    error: null,
}

export const getpostsThunk = createAsyncThunk(
    `${USERS_SLICE_NAME}/getPosts`, 
    async (payload, thunkAPI) => {
        try{
            const {data} = await getPosts()
            return data;
        } catch(err) {
            console.log('err :>> ', err);
        }
        return thunkAPI.rejectWithValue({messge: err.messge});
    }
)
const postsSlice = createSlice({
    initialState,
    name: USERS_SLICE_NAME,
    reducers: {},
    extraReducers: bulder => {
        bulder.addCase(getpostsThunk.pending, (state, actions) => {
            state.isFetching = true;
            state.error = null;
        })
        bulder.addCase(getpostsThunk.fulfilled, (state, {payload}) => {
            state.posts = payload;
            state.isFetching = false;
        })
        bulder.addCase(getpostsThunk.rejected, (state, {payload}) => {
            state.isFetching = false;
            state.error = payload;
        })
    }
})

const {reducer, actions} = postsSlice;

export const {} = actions

export default reducer;