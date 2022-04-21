//express
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public")); //for loading css in folder public

//body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //for selecting input attrubite name 

//ejs
const ejs = require('ejs');
app.set('view engine', 'ejs'); //for folder view

//modules
const date = require(__dirname + "/date.js");
const day = date();

//array to adding new list items  
const items = ["Buy Food", "Cook Food", "Eat Food"]; //this values are always there and everything else will be pushed behind that
const workItems = ["Programming"];

//routes -----------------------------------

app.get('/', (req, res) => {
    //sending it to browser
    res.render('list', {listTitle: day, newListItems: items});
});
 
app.post('/', (req, res) => {

    //selecting tags with name = newItem
    const item = req.body.newItem; //input text
    const title = req.body.list; //button

    if (title === 'Work List') {
        //pushing input text into array 
        workItems.push(item);
        res.redirect("/work");
    } else {
        //pushing input text into array 
        items.push(item);
        res.redirect('/');
    }   
});

app.get("/work", (req, res) => {
    //sending it to browser
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", (req, res) => {
    res.render("about");
});


//---------------------------------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});