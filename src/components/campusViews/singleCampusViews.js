import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteSingleStudent, fetchSingleCampus, selectSingleCampus } from '../feats/singleCampusSlices'



const SingleCampus = () => {
  const campus = useSelector(selectSingleCampus);
  const { name, imageUrl, address, description, students } = campus;
  const dispatch = useDispatch();
  const { campusId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  return (
    <>
    <div className ='container'>
    <div id='single-campus' className='campus-details' key={campusId}>
      <img src={imageUrl}/>
      <h3>Campus:</h3>
      <p>{name}</p>
      <h3>Address:</h3>
      <p>{address}</p>
      <h3>Known for:</h3>
      <p>{description}</p>
      <h3>Enrolled Students:</h3>
      <ul>
    {students && students.length ? students.map((student) => {
        let studentId = student.id
        return (
        <li className='student-link' key={student.id}>
        <Link to={`/students/${student.id}`} style={{textDecoration: 'none'}} className='linkName' >
          <p>{student.firstName}</p>
        </Link>
        <button onClick={() => dispatch(deleteSingleStudent({campusId, studentId}))}>Un-enroll Student</button>
        </li>
        )}): 'No students here'}
      </ul>
    </div>
    </div>
    <div>
    </div>
    </>
  )
};

export default SingleCampus;
