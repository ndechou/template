import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//fetch single student
export const fetchSingleStudent = createAsyncThunk('fetchSingleStudent',
  async (studentId) => {
    try {
      const { data } = await axios.get(`/api/students/${studentId}`);
      return data;
    } catch (error) {
      return error.messsage;
    }
  }
);

//edit single student
export const editSingleStudent = createAsyncThunk('editSingleStudent',
  async ({studentId, firstName, lastName}) => {
    try {
      const { data } = await axios.put(`/api/students/${studentId}`, {
        firstName,
        lastName,
      });
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {}

const singleStudentSlice = createSlice({
  name: 'student',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectSingleStudent = (state) => {
  return state.student;
}

export default singleStudentSlice.reducer;
