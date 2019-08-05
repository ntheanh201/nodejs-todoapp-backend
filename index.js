import express from 'express'
// import database from './database'
import route from './route'

const app = express()
const port = 8123

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

//nodemon -x npm start
//npm run development

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use('/todos', route)

app.listen(port, () => console.log(`App listening on port ${port}!`))