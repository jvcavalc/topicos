let express = require('express');
let app = express();

app.get('/',function(req,res) {
    res.send('ROTA GET')
})

app.listen(3001, function() {
    console.log('Rodando na porta 3001');
})