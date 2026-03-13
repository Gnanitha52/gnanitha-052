const express = require("express");
const app = express();

app.get(Express.json());

app.get('/', (req, res)) =>{
    res.json({message: 'Hello from Express REST API'});
});
app.get('/about', (req, res)) => {
    res.json({message: 'This is about us page'});

});
p.get('/Welcome', (req, res)) => {
    res.json({message: 'This is Welcome page'});
)};

const PORT = Process.env.PORT ||  3000;
app.listen(PORT, () => {
    console.log("Welcome to 6csn1");
