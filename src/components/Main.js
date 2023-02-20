import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "./Home";
import Nav from "./NavBar";
import AllCampuses from "./campusViews/campusViews";
import AllStudents from "./studentViews/singleStudent";
import SingleCampus from "./campusViews/singleCampusViews";
import SingleStudent from "./studentViews/singleStudent";    

  /*  This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
        <Nav />
            <main>
                <Routes>
                    <Route path='/' element={<HomeView /> } />
                    <Route path='/campuses' element={<AllCampuses />} />
                    <Route path='/campuses/:campusId' element={<SingleCampus />} />
                    <Route path='/students' element={<AllStudents />} />
                    <Route path='/students/:studentId' element={<SingleStudent />} />
                   
                </Routes>
            </main>
        </div>
  );
};
export default Main;
