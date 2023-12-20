const express = require("express");
const path = require("path");
const userModel = require('../src/models/user_model')

const app = express();
const testPath = path.join(__dirname, 'test')

app.get('/home', (req, res) => {
    res.contentType('.html')
    res.status(200).sendFile(`${testPath}/index.html`)
})

app.get('/users', (req, res) => {
    const users = [{
        name: 'John',
        email: 'john@gmail.com'
    },
    {
        name: 'Johana',
        email: 'johana@gmail.com'
    }
    ]

    res.status(200).json(JSON.jsonify(users))

})

app.get('/logon', (req, res) => {
    res.contentType('.html');
    res.status(200).sendFile(`${testPath}/logon.html`);
})

app.post('/logon', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user)

    } catch (error){
        res.status(500).send(error.message)
    
    }
})

app.get('/login', (req, res) => { 
    res.contentType('.html');
    res.status(200).sendFile(`${testPath}/loginpage.html`)
})

const port = 8080;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})

