const express       = require('express');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');

const limiter       = require('./middlewares/rateLimit');

const app = express();

app.use(helmet());//Prevent aboout atacks like about XSS

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(limiter);

const user = require('./routes/v1/user');
app.use('/user', user);

module.exports= app;