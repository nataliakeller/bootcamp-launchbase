const fs = require('fs'); // File System
const data = require('../data.json');
const { create } = require('browser-sync');
const { age, date } = require('../temporary');

exports.index = function (req, res) {
    

    return res.render('instructors/index', { instructors: data.instructors });
};

// show
exports.show = function(req, res) {
    const { id } = req.params;

    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id;
    });

    // foundinstructor é os dados do instrutor solicitado dentro de um array

    if(!foundInstructor) return res.send('Instructor not found');

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(','),
        created_at:  new Intl.DateTimeFormat('en-GB').format(foundInstructor.created_at)
    };

    return res.render('instructors/show', { instructor });
};

// create
exports.create = function (req, res) {
    return res.render('instructors/create');
};

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body); // Validação

    for (key of keys) {
        
        if (req.body[key] == '') { // Se algum campo do body está vazio...
            return res.send('Please enter the required fields.');
        };
    };

    let { avatar_url, name, birth, gender, education_level, services, type_class } = req.body; // Desestruturando o req.body
    
    birth = Date.parse(birth); // Pegando a data de nascimento e transformando no tempo do timestamp
    const created_at = Date.now();  // Pegando a informação da data de criação
    const id = Number(data.instructors.length) + 1; // Criando ID
    
    
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        education_level,
        services,
        type_class,
        created_at,
    });  // Empurrando req.body no array do data.json

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) { // escrevendo os dados no arquivo data.json

        if (err) return res.send("writeFile error!");

        return res.redirect('/instructors');
    });
    
};

// edit
exports.edit = function (req, res) {
    const { id } = req.params;

    const foundInstructor = data.instructors.find(function (instructor) {
        return instructor.id == id;
    });

    // foundinstructor é os dados do instrutor solicitado dentro de um array

    if (!foundInstructor) return res.send('Instructor not found');

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)
    };

    return res.render('instructors/edit', { instructor });
};

// put 
exports.put = function (req, res) {
    const { id } = req.body;
    let index = 0;

    // Procurando o instrutor com o id enviado pelo body
    const foundInstructor = data.instructors.find(function (instructor, foundIndex) {
       if(id == instructor.id) {
           index = foundIndex;
           return true;
        };
    });

    // foundinstructor é os dados do instrutor solicitado dentro de um array

    if (!foundInstructor) return res.send('Instructor not found');

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id) //forçando o ID a vir como número
    };

    data.instructors[index] = instructor //Em vez de usarmos o metodo push, reescrevemos os dados
    // da string dentro do array

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
        if(err) return res.send('Write error!');

        return res.redirect(`instructors/${id}`);
    });
};

//delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filterInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id;
    });

    data.instructors = filterInstructors;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
        if(err) return res.send('Write error!');
        
        return res.redirect('/instructors');
    });
};
