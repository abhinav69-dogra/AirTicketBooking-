const bodyParser = require('body-parser');
const express = require('express');
const apiRoutes = require('./routes/index');
const app = express();

const {PORT,FLIGHT_SERVICE_PATH} = require('./config/serverConfig');
const db = require('./models/index');

const setupStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);

        if(process.env.DB_SYNC){
            db.sequelize.sync({alter : true})
        }
        console.log(FLIGHT_SERVICE_PATH);
    })

}

setupStartServer();