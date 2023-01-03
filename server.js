const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const { User, PostPet, Comment } = require('./models');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const session = require('express-session');
// const helpers = require('./utils/helpers');

const app = express();

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Let Express look for templates in the "views" folder.
app.set('views', './views');

// const helper = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/')));

const port = process.env.PORT || 3001;

app.use(routes);

app.get('/', (req, res) => {
    console.log('Rendering home page');
    res.render('home');
});

// app.post("/upload_files", uploadFiles);
// function uploadFiles(req, res) {
//     console.log(req.body);
// }

// Set this to true when you are ready to use the database
const shouldUseDatabase = false;

if (shouldUseDatabase) {
  sequelize.sync({force:true}).then(() => {
      app.listen(port)
      console.log(`App listening on port ${port}!`)
  });
} else {
  app.listen(port);
  console.log(`App listening on port ${port}!`)
}




