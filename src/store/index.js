import { configureStore } from "@reduxjs/toolkit";
import allCampusesSlice from "../components/feats/campusSlices";
import singleCampusSlice from "../components/feats/singleCampusSlices";
import allStudentsSlice from "../components/feats/studentSlices";
import singleStudentSlice from "../components/feats/singleStudentSlices";

/* Here is where you will configure the store 

*/

const store = configureStore({
  reducer: {
    campuses: allCampusesSlice,
    campus: singleCampusSlice,
    students: allStudentsSlice,
    student: singleStudentSlice,
  },
});

export default store;
