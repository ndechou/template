const router = require('express').Router();
const { Campus, Student } = require('../db');

// GET api/campuses
router.get('/', async (req, res, next) => {
  try {
    const allCampus = await Campus.findAll();
    res.json(allCampus);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

//GET api/campuses/campusId/
router.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id,
      { include: [Student]});
    res.json(campus);
  } catch (err) {
    next (err);
  }
});

//POST api/campuses
router.post('/', async (req, res, next) => {
  try {
    const newCampus = await Campus.create(req.body);
    await newCampus.save();
    res.json(newCampus);
  } catch (err) {
    next(err);
  }
});

//PUT api/campuses/campusId
router.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: [{ model: Student }],
    });
    if (campus !== null) {
      let updatedCampus = await campus.update(req.body);
      res.json(updatedCampus);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE api/campuses/campusId/student
router.delete('/:campusId/:studentId', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.campusId, {
      include: [{model: Student}],
    });
    if (campus) {
      await campus.removeStudent(req.params.studentId);
      const updatedCampus = await campus.reload();
      res.json(updatedCampus);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//DELETE api/campuses/campusId
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Campus.findByPk(req.params.id);
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
