const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const courses = require('./Data/courses.json');
const courseDetails = require('./Data/course-detail.json')

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.get('/courses',(req,res) => {
    res.send(courses)
})

app.get('/courses/:id',(req,res)=>{
    const cid = req.params.id;
    const selected_course = 
    courseDetails.find(course => course.id === cid);
    res.send(selected_course);
})
app.get('/checkout/:id',(req,res)=>{
    const cid = req.params.id;
    const selected_course = 
    courses.find(course => course.id === cid);
    res.send(selected_course);
})


app.listen(port, () => {
  console.log(`kamal's care server running on port ${port}`)
})