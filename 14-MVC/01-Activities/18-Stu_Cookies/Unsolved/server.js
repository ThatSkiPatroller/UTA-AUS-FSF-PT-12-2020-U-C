const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// TODO: Explain what is being initialized
// initiallizes connection between session tool and sequelize
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Add comments describing the implementation of sessions
// set of options to pass to session tool
const sess = {
  secret: 'Super secret secret',
  // TODO: Add comments describing the implementation of cookies
  // initializes cookie as something we want to maintain accross sessions
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // TODO: Add comments describing the implementation of the store
  // connection sequelize.store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
