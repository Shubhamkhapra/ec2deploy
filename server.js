const express = require("express");
const app =express();


app.use(express.json());
const routeName = {
    randomNo: '/random'
};

const randomNumber = require("./router");
app.use(routeName.randomNo, randomNumber);

app.listen(3001, ()=>{
    console.log(`server is running on 3001 port`);
})