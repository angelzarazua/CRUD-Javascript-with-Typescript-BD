"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.desconectar = (Cliente) => {
    Cliente.on('desconnect', () => {
        console.log('Te desconectaste');
    });
};
exports.mensajes = (Cliente, io) => {
    Cliente.on('mensajes', (payload) => {
        console.log('Mensaje Recibido', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
