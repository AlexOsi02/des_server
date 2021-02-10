//console.log('Hello World');

const express = require("express");
const bodyParser = require('body-parser');

const courses = require("./data/courses")
const profile = require("./data/profile")
const marks = require("./data/marks")

const PORT = process.env.PORT || 5000;
const app = express();

//console.log(courses)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let musiclist = [
    {
        id: 1,
        name: "Valery Miladze"
    },
    {
        id: 2,
        name: "Iron Maiden"
    },
    {
        id: 3,
        name: "Freddie Mercury"
    }
]

app.get('/music/:id', (req, res) =>{
    console.log(req.params)
    let singer = musiclist.find(function (music){
        return music.id===+req.params.id
    })
    res.send(singer)
    res.sendStatus(200)
})

app.get('/music', (req, res) =>{
    res.send(musiclist)
    res.sendStatus(200)
})

app.get('/', (req, res) =>{
    res.send("Hello World!")
})

app.post('/music', (req, res) =>{
    let newSinger = {
        id: req.body.id,
        name: req.body.name
    }
    console.log(req.body)
    musiclist.push(newSinger)

    res.sendStatus(200)
})

app.get('/courses-jopa', (req, res) =>{
    res.send(courses)
})

app.get('/profile', (req, res) =>{
    res.send(profile)
})

app.get('/marks', (req, res) =>{
    res.send(marks)
})

app.listen(PORT, function() {
    console.log('server-------ok')
})