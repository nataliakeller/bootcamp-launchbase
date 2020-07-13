const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses_data = require('./data');

nunjucks.configure('views', {
    express: server
});

server.use(express.static('public'));

server.set('view engine', 'njk');

server.get('/', function (req, res) {
    const about = {
        title: "RocketSeat",
        description: " Transforme sua carreira e seja um programador desejado no mercado, dominando as ferramentas mais modernas de desenvolvimento web e mobile.",
        image_url: "/rocket.png"
    }
    return res.render('about' , { about });
});


server.get('/content', function (req, res) {
    return res.render('content', { items: courses_data }); // adicionando os dados do data.js
});

server.get('/courses/:id', function(req, res) {                 // !!!!!
    const id = req.params.id;

    const course_name = courses_data.find(function(course) {
        return course.id == id;
    })

    if (!course_name) {
        return res.send('Course Not Found');
    };

    return res.render('courses', {course: course_name});
});

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function() {
    console.log('server is running');
});