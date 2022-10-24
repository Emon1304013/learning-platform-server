const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const courses = require('./Data/courses.json');
const courseDetails = require('./Data/course-detail.json')

app.get('/', (req, res) => {
  res.send(courses)
})

app.get('/courses',(req,res) => {
    res.send(courseDetails)
})


app.listen(port, () => {
  console.log(`kamal's care server running on port ${port}`)
})