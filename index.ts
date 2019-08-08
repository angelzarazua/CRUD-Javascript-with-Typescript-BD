import Server from './classes/server';
import { SERVER_PORT } from './global/enviroment';
import router from './Routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = Server.instance;
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//Asignando Servidor de Rutas
server.app.use('/ruta', router);

//Configuración
server.app.use(cors({origin:true, credentials:true}))

server.start(() =>{
    console.log(`Servdior Corriendo en el puerto ${SERVER_PORT}`);
});