const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, '/test', 'test.txt'),'Hello world!', (error) => {
    if (error){
        return console.log(`Erro: ${error}`)
    }

    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello Jesus!', (error) => {
        if (error) {
            return   console.log(error)
        }

        return console.log('success');
    })

})
