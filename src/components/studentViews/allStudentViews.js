import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, fetchAllStudents, selectStudents } from '../feats/studentSlices';
import AddStudentForm from './addStudentViews'

const AllStudents = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudents());
  }, [dispatch]);

  return (
    <div className='container'>
      <div>
        <ul id='studentList' className='student-list'>
          {students.map((student) => (
            <li key={student.id}>
              <div>
                <Link to={`/students/${student.id}`} style={{textDecoration: 'none'}} className='linkName'>
                  <h3>{student.firstName}</h3>
                </Link>
                <div>
                  <button onClick={() => dispatch(deleteStudent(student.id))}>Remove</button>
                </div>
                <img src={student.imageUrl}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <AddStudentForm />
      </div>
    </div>
  )
};

export default AllStudents;
