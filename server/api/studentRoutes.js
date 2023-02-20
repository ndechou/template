const router = require('express').Router();
const Campus = require('../db/models/campuses');
const Student = require('../db/models/students');


// GET api/students


// GET api/students/all
router.get('/all', async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    res.json(allStudents);
  } catch (err) {
    console.log(err);
    next(err);
  }
});
//GET api/students/studentId
router.get('/:id', async (req, res, next) => {
  try {
    const singleStudent = await Student.findByPk(req.params.id,
      {include: [{ model: Campus, as: "campus" }],
      });
  } catch (err) {
    next(err);
  }
});

//POST api/students
router.post('/', async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    next(err);
  }
});

//PUT api/students/studentId
router.put('/:id', async (req, res, next) => {
  try {
    const student = await student.findByPk(req.params.id, {
      include: [{model: Campus}]
    });
    if (student !== null) {
      let updatedStudent = await student.update(req.body);
      res.json(updatedStudent);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE api/students/studentId
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Student.findByPk(req.params.id);
    if (deleted) {
      await deleted.destroy();
      res.send(deleted);
    } else {
      console.log('nothing to be deleted');
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
