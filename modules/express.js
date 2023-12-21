const express = require("express");
const path = require("path");
const userModel = require('../src/models/user_model')

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.body);
    next();

})

const testPath = path.join(__dirname, 'test');

app.get('/users', async (req, res) => {
    try {

        const users = await userModel.find({});
        res.status(200).json(users);

    } catch (error) {

        res.status(500).send(error.message)

    }

});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id        
        const user = await userModel.findById(id);

        return res.status(200).json(user)


    } catch (error) {
        return res.status(500).send(error.message)
    
    }
})

app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndUpdate(id, req.body, {new : true});

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).send(error.message);
    }
})

app.delete('/users/:id', async (req, res) =>{
    try {
        const id = req.params.id;
        const user = await userModel.findByIdAndDelete(id);

        return res.status(200).json(user)

    } catch(error) {
        return res.status(500).send(error.message)

    }

})

app.get('/logon', (req, res) => {
    res.contentType('.html');
    res.status(200).sendFile(`${testPath}/logon.html`);
})

app.post('/logon', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);

    } catch (error){
        res.status(500).send(error.message);
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
