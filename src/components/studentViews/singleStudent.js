import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchSingleStudent,
  selectSingleStudent,
} from "../feats/singleStudentSlices";

const SingleStudent = () => {
  const student = useSelector(selectSingleStudent);
  const { firstName, lastName, email, imageUrl, gpa, campus } = student;
  const dispatch = useDispatch();

  const { studentId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <>
      <div class="container">
        <div id="single-student" className="student-detail" key={studentId}>
          <img src={imageUrl} />
          <h3>Student Name:</h3>
          <p>
            {firstName} {lastName}
          </p>
          <h3>Email:</h3>
          <p>{email}</p>
          <h3>GPA</h3>
          <p>{gpa}</p>
          <ul>
            {campus ? (
              <li>
                <Link to={`/campuses/${campus.id}`} className="linkName">
                  {campus.name}
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default SingleStudent;
