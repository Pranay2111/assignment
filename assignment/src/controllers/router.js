const express = require('express');
const router = express.Router();
const { mySqlConnection } = require('../db/db');

//Get the employee table records 
router.get('/employee', (req, res)=> {
    mySqlConnection.query('SELECT * FROM employee', (err, rows, fields)=> {
        if(!err) res.send(rows);
        else console.log(err);
    })
})

//Get the employee details with empId
router.get('/employee/:empId', (req, res)=> {
    mySqlConnection.query(`SELECT * FROM employee WHERE empId=${req.params.empId}`, (err, rows, fields)=> {
        if(!err) res.send(rows);
        else console.log(err);
    })
})

//Delete employee if regined
router.delete('/employee/:empId', (req, res)=> {
    mySqlConnection.query(`DELETE FROM employee WHERE empId=${req.params.empId}`, (err, rows, fields)=> {
        if(!err) res.send('Employee records Deleted succesfully!');
        else console.log(err);
    })
})

//Delete projects if expired
router.delete('/projects/:projectId', (req, res)=> {
    mySqlConnection.query(`DELETE FROM project WHERE projectId=${req.params.projectId}`, (err, rows, fields)=> {
        if(!err) res.send('Projects records Deleted succesfully!');
        else console.log(err);
    })
})

//Update projects information
router.post('/projects', (req, res)=> {
    const { title, desc, startDate, endDate, projectId } = req.body;
    console.log(title, desc, startDate, endDate, projectId)
    mySqlConnection.query(`SELECT * FROM project WHERE projectId=${projectId}`, (err, rows, fields)=> {
        if(err) {
            res.status(404).send('No Project records found for given projectId');
        } else {
            const updateQuery = `update project SET title=${title}, description=${desc}, startDate=${startDate}, endDate=${endDate} where projectId=${projectId}`;
            mySqlConnection.query(updateQuery, (err, rows, fields)=> {
                if(!err) res.send('Projects records Updated succesfully!', rows);
                else console.log(err);
            })
        }
    })

    
})

module.exports = router;