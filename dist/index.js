"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const enviroment_1 = require("./global/enviroment");
const router_1 = __importDefault(require("./Routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Asignando Servidor de Rutas
server.app.use('/ruta', router_1.default);
//Configuración
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.start(() => {
    console.log(`Servdior Corriendo en el puerto ${enviroment_1.SERVER_PORT}`);
});
