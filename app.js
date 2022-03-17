const express = require('express');

const app = express();
const PORT = 3000;
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const FileStore = require('session-file-store')(session);
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const sessionConfig = {
  name: 'cookieName',
  secret: 'keyboard cat',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
  resave: false,
  saveUnitialized: false,
};
app.use(session(sessionConfig));

app.get('/registration', (req, res) => {
  res.render('registration');
});
app.get('/home', (req, res) => {
  res.render('home');
});
app.get('/signin', (req, res) => {
  res.render('signin');
});
app.use((req, res) => {
  res.status(404).send('not found');
});
app.listen(PORT, () => console.log('started on port:', PORT));
