import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllData = createAsyncThunk('data/fetchAll', async () => {
  try {
    const [campusesResponse, studentsResponse] = await Promise.all([
      axios.get('/api/campuses'),
      axios.get('/api/students')
    ]);
    const campuses = campusesResponse.data;
    const students = studentsResponse.data;
    return Object.values({ campuses, students });
  } catch (error) {
    return error.message;
  }
});


export const addCampus = createAsyncThunk('campuses/addCampus',
  async ({name, address, description}) => {
    try {
      const { data } = await axios.post('/api/campuses', {
        name,
        address,
        description,
      });
      return [data];
    } catch (error) {
      return error.message;
    }
});

export const deleteCampus = createAsyncThunk('campuses/delete',
  async (campusId) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${campusId}`);
      return [data];
    } catch (error) {
      return error.message;
    }
  }
);

const allCampusesSlice = createSlice({
    name: 'campuses',
    initialState: [],
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchAllData.fulfilled, (state, action) => {
        return action.payload;
      });
      builder.addCase(addCampus.fulfilled, (state, action) => {
        state.push(action.payload);
      });
      builder.addCase(deleteCampus.fulfilled, (state, action) => {
        return state.filter(campus => campus.id !== action.payload.id)
      });
    }
});

export const selectCampuses = (state) => {
  return state.campuses;
}

export default allCampusesSlice.reducer;
