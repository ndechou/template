import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// fetch single campus
export const fetchSingleCampus = createAsyncThunk('fetchSingleCampus',
  async (campusId) => {
    try {
      const { data } = await axios.get(`/api/campuses/${campusId}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//edit single campus
export const editSingleCampus = createAsyncThunk('editSingleCampus',
  async ({campusId, name, address}) => {
    try {
      const { data } = await axios.put(`/api/campuses/${campusId}`, {
        name,
        address,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

//delete single student
export const deleteSingleStudent = createAsyncThunk('deleteSingleStudent',
  async ({campusId, studentId}) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}/${studentId}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {}

const singleCampusSlice = createSlice({
  name: 'campus',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleCampus = (state) => {
  return state.campus;
}

export default singleCampusSlice.reducer;
