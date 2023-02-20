
const router = require('express').Router();
const studentRouter = require('./studentRoutes')
const campusRouter = require('./campusRoutes');

router.use('/students', studentRouter);
router.use('/campuses', campusRouter);

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
