const fs = require('fs'); // File System
const data = require('../data.json');
const { create } = require('browser-sync');
const { date } = require('../temporary');


// index 
exports.index = function (req, res) {
    

    return res.render('members/index', { members: data.members });
};

// create
exports.create = function (req, res) {
    return res.render('members/create');
};

// post
exports.post = function (req, res) {
    const keys = Object.keys(req.body); // Validação

    for (key of keys) {
        
        if (req.body[key] == '') { // Se algum campo do body está vazio...
            return res.send('Please enter the required fields.');
        };
    };

    
    birth = Date.parse(req.body.birth); // Pegando a data de nascimento e transformando no tempo do timestamp
     
    let id = 1;
    const lastMember = data.members[data.members.length - 1];
    
    if (lastMember) {
        id = lastMember.id + 1;
    }

    data.members.push({
        id,
        ...req.body,
        birth
    });  // Empurrando req.body no array do data.json

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) { // escrevendo os dados no arquivo data.json

        if (err) return res.send("writeFile error!");

        return res.redirect('/members');
    });
    
};

// show
exports.show = function(req, res) {
    const { id } = req.params;

    const foundMember = data.members.find(function(member) {
        return member.id == id;
    });

    // foundmember é os dados do instrutor solicitado dentro de um array

    if(!foundMember) return res.send('Member not found');

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthday
    };

    return res.render('members/show', { member });
};


// edit
exports.edit = function (req, res) {
    const { id } = req.params;

    const foundMember = data.members.find(function (member) {
        return member.id == id;
    });

    // foundmember é os dados do instrutor solicitado dentro de um array

    if (!foundMember) return res.send('Member not found');

    const member = {
        ...foundMember,
        birth: date(foundMember.birth)
    };

    return res.render('members/edit', { member });
};

// put 
exports.put = function (req, res) {
    const { id } = req.body;
    let index = 0;

    // Procurando o instrutor com o id enviado pelo body
    const foundMember = data.members.find(function (member, foundIndex) {
       if(id == member.id) {
           index = foundIndex;
           return true;
        };
    });

    // foundmember é os dados do instrutor solicitado dentro de um array

    if (!foundMember) return res.send('Member not found');

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id) //forçando o ID a vir como número
    };

    data.members[index] = member //Em vez de usarmos o metodo push, reescrevemos os dados
    // da string dentro do array

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
        if(err) return res.send('Write error!');

        return res.redirect(`members/${id}`);
    });
};

//delete
exports.delete = function(req, res) {
    const { id } = req.body;

    const filterMembers = data.members.filter(function(member){
        return member.id != id;
    });

    data.members = filterMembers;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
        if(err) return res.send('Write error!');
        
        return res.redirect('/members');
    });
};
