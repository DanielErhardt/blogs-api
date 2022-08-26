const express = require('express');

const loginRouter = require('./routers/loginRouter');
const userRouter = require('./routers/userRouter');
const blogPostRouter = require('./routers/blogPostRouter');
const categoryRouter = require('./routers/categoryRouter');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/post', blogPostRouter);

app.use('/categories', categoryRouter);

app.use(errorHandler);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
