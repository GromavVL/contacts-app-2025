import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api";

const POSTS_SLICE_NAME = 'posts';

const initialState = {
    users: [],
    isFetching: false,
    error: null,
}

export const getUsersThunk = createAsyncThunk(
    `${POSTS_SLICE_NAME}/getUsers`, 
    async (payload, thunkAPI) => {
        try{
            const {data} = await getUsers();
            return data;
        }catch(err){
            console.log('err :>> ', err);
        }
        return thunkAPI.rejectWithValue({massage: err.massage})
    }
)

const usersSlice = createSlice({
    initialState,
    name: POSTS_SLICE_NAME,
    reducers: {},
    extraReducers: bulder => {
        bulder.addCase(getUsersThunk.pending, (state, actions) => {
            state.isFetching = true;
            state.error = null;
        })
        bulder.addCase(getUsersThunk.fulfilled, (state, {payload}) => {
            state.users = payload;
            state.isFetching = false;
        })
        bulder.addCase(getUsersThunk.rejected, (state, {payload}) => {
            state.isFetching = false;
            state.error = payload;
        })
    }
})


const {reducer, actions} = usersSlice;
export default reducer;