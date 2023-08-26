import express from 'express';

const app = express();
const Router = require('./routes/index');
const port = '1245';

app.listen(port);

app.use('/', Router);
app.use('/students', Router);
app.use('/students/:major', Router);

export default app;
