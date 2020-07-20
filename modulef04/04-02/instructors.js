const fs = require('fs');
const data = require('./data.json');

exports.post = function (req, res) {
    const keys = Object.keys(req.body); // IMPORTANTE

    for (key of keys) {
        
        if (req.body[key] == '') { // Se algum campo do body está vazio...
            return res.send('Please enter the required fields.');
        };
    };
    req.body.id = Number(data.instructor.length) + 1

    req.body.birth = Date.parse(req.body.birth); 
    // Pegando a data de nascimento e transformando no tempo do timestamp
    req.body.created_at = Date.now(); 
    // Pegando a informação da data de criação
    
    const { avatar_url, gender } = req.body;
    console.log(avatar_url, gender);


    data.instructors.push(req.body); // Empurrando req.body no array do data.json
    // escrevendo os dados no arquivo data.json
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) { 

        if (err) return res.send("writeFile error!");

        return res.redirect('instructors');
    });
    // return res.send(req.body);
};