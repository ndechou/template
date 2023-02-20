import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk('students/fetchAll',
  async () => {
    try {
      const { data } = await axios.get('/api/students');
      return [data];
    } catch (error) {
      return error.message;
    }
  }
);

export const addStudent = createAsyncThunk('students/addStudent',
  async ({firstName, lastName, email}) => {
    try {
      const { data } = await axios.post('api/students', {
        firstName,
        lastName,
        email,
      });
      return [data];
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteStudent = createAsyncThunk('students/delete',
  async (studentId) => {
    try {
      const { data } = await axios.delete(`/api/students/${studentId}`);
      return [data];
    } catch (error) {
      return error.message;
    }
  }
);

const allStudentsSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllStudents.fulfilled, (state, action) => {
      return action.payload[0];
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.push(action.payload[0]);
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      return state.filter(student => student.id !== action.payload[0].id);
    });
  }
});

export const selectStudents = (state) => {
  return state.students;
}

export default allStudentsSlice.reducer;
