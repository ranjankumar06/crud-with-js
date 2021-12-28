const knex = require('../db/db');

// HomePage
exports.HomePage = (req, res) => {
    console.log({ "message": "hello this is home page" });
    res.send({ "message": "hello this is home page" })
};

// create
exports.create = (req, res) => {
    knex.select('*').from('user').where({ "email": req.body.Email })
        .then((data) => {
            if (data.length < 1) {
                knex('user').insert({
                        "firstname": req.body.FirstName,
                        "lastname": req.body.lastName,
                        "email": req.body.Email,
                        "password": encoded,
                        "OrganizationName": req.body.OrganizationName
                    })
                    .then((data) => {
                        res.send({ "message": "successfull iserted data" })
                    }).catch((err) => {
                        console.log(err);
                    })
            } else {
                res.send({ "exist": "this user alredy exists.." })
            }
        })
};



// GetAllData
exports.GetAllData = (req, res) => {
    knex.select('*').from('user').then((data) => {
        console.log(data);
        res.send(data)
    }).catch((err) => {
        console.log(err);
        res.send(err)

    });
};

// GetById
exports.GetById = (req, res) => {
    knex.select('*').from('user').where('employee_id', req.params.employee_id)
        .then((data) => {
            console.log({ 'Userdata': data })
            res.send({ 'serdata': data })
        }).catch((err) => {
            res.send({ err: err.message })
            console.log(err)
        })
};

// UpdateById
exports.UpdateById = (req, res) => {
    knex('user')
        .where('employee_id', req.params.employee_id)
        .update(req.body)
        .then((data) => {
            console.log(data);
            res.send("updated successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
}

// DeleteById
exports.DeleteById = (req, res) => {
    knex('user')
        .where('employee_id', req.params.employee_id)
        .del()
        .then((data) => {
            console.log(data);
            res.send("deleted successfully")
        })
        .catch((er) => {
            console.log(er);
            res.json({ "message": er })
        });
};




