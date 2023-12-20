const express = require("express");

const app = express();

app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello world!</h1>')
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

const port = 8080;
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})

