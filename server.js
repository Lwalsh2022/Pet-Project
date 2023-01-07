const path = require('path');
const sequelize = require('./config/connection');
const { User, PostPet, Comment } = require('./models');
const routes = require('./controllers');
const multer = require("multer");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const express = require('express');

const app = express();

const upload = multer({ dest: "uploads/" });

const sess = {
    secret: 'Petprojectrocks',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));


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

app.get('/login', (req, res) => {
    res.render('login');
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




