const express = require('express')
const nunjucks = require('nunjucks')
const cursos = require('./data')
const about = require('./about')

const server = express()
//arquivos estaticos 
server.use(express.static('public'))

//consfigurando template
server.set('view engine', 'njk')
nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

//rotas
server.get('/layout', function (req, res) {

    return res.render('layout', { about })
})


//rotas
server.get('/', function (req, res) {
    
    return res.render('index', { cursos, about})
})


//rotas
server.get('/course/:id', function (req, res) {
   
    const id = req.params.id; //-> params pela url
    const course = cursos.find(function (cursos) { //-> find percorrendo array
        if (cursos.id == id) {
            return true
        }
    })

    
    return res.render('course', { course, about})
})


//servidor
server.listen(5000, function () {
    console.log('server is running')
})