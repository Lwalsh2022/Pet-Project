const path = require('path');
const sequelize = require('./config/connection');
const { User, PostPet, Comment } = require('./models');
const routes = require('./controllers');
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const session = require('express-session');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


const exphbs = require('express-handlebars');

app.use(express.static(__dirname + "/public"));


app.set('view engine', 'handlebars');

app.engine('handlebars' , exphbs.engine({
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts',
    
}));


app.get('/', (req, res) => {
    res.render('main2');
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3002;
app.use(routes);


sequelize.sync({force:true}).then(() => {
    app.listen(port)
    console.log(`App listening on port ${port}!`)
});




