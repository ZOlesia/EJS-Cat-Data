var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response)
{
    console.log("****");
    response.sendfile('index.html');
})

app.get('/cars', function(request, response)
{
    console.log("****");
    response.render('cars');
})

app.get('/cats', function(request, response)
{
    var cats_array = [
        {name: "Cuddles", fav_food: "Spaghetti", age: 3, sleep: "under the bed", img: "cat1.jpg"},
        {name: "Cutie", fav_food: "Burger", age: 2, sleep: "ina a sunbeam", img: "cat2.jpg"}
    ]
    console.log("****");
    response.render('cats', {cats: cats_array});
})

app.get('/Cuddles', function(request, response)
{
    var cuddle_dict = {name: "Cuddles", fav_food: "Spaghetti", age: 3, sleep: "under the bed", img: "cat1.jpg"};
    response.render('details', {cat: cuddle_dict});
})

app.get('/Cutie', function(request, response)
{
    var cutie_dict = {name: "Cutie", fav_food: "Burger", age: 2, sleep: "ina a sunbeam", img: "cat2.jpg"};
    response.render('details', {cat: cutie_dict});
})





app.get('/cars/new', function(request, response)
{
    console.log("****");
    response.render('form');
})


app.listen(6789, function()
{
    console.log("listening on port 6789");
})