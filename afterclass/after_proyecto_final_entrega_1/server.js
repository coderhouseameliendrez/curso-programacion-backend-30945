const express = require('express');
const app = express();
const playerRouter = require('./src/routes/PlayerRoutes');
const teamRouter = require('./src/routes/TeamRoutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/players', playerRouter);
app.use('/api/teams', teamRouter);

app.listen(8080, () => {
    console.log('Server on port 8080');
})