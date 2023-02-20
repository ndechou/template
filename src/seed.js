
const { green, red } = require("chalk");
const { db } = require("./server/db");
const { Campus, Student } = require('./server/db');

const campuses = [
  {
    name: 'campus1',
    imageURL: '/campus.png',
    address: "placeholder",
    description: 'placeholder',
},
  {
    name: 'campus2',
    imageURL: '/campus.png',
    address: "placeholder",
    description: 'placeholder',
},
  {
    name: 'campus3',
    imageURL: '/campus.png',
    address: 'placeholder',
    description: 'placeholder',
},
  {
    name: 'campus4',
    imageURL: '/campus.png',
    address: 'placeholder',
    description: 'placeholder',
},
];

const students = [
  {
    firstName: 'studentfirst1',
    lastName: 'studentlast1',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 3.0,
  },
{
     firstName: 'studenttwo',
    lastName: 'studenttwolas',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 2.0,
  },
{
    firstName: 'studentfirst3',
    lastName: 'studentlast3',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 3.7,
  },
{
    firstName: 'studentfirst4',
    lastName: 'studentlast4',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 2.8,
  },
{
    firstName: 'studentfirst5',
    lastName: 'studentlast5',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 3.9,
  },
{
    firstName: 'studentfirst6',
    lastName: 'studentlast6',
    email: 'placeholder@aol.com',
    imageURL: '/student.jpg',
    gpa: 3.0,
  },

];


const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      campuses.map((campus) => {
        return Campus.create(campus);
      })
    );
    
    await Promise.all(
      students.map((student) => {
        return Student.create(student);
      })
    );

    console.log(green("database seed success"));

  } catch (err) {
    console.error(red("seed failed"));
    console.error(err);
 
  }
};

seed();