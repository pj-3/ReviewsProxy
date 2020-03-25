const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client'));
app.listen(2222, () => {
    console.log("listening on port 2222");
})

app.get('/', (req,res) => {
    
})