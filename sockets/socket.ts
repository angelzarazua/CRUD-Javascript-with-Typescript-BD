import { Socket } from 'socket.io';

export const desconectar = (Cliente: Socket) => {
    Cliente.on('desconnect', ()=>{
        console.log('Te desconectaste');
    });
}

export const mensajes = (Cliente: Socket, io: SocketIO.Server) => {
    Cliente.on('mensajes', (payload: { de: string, cuerpo: string})=>{
        console.log('Mensaje Recibido', payload);
        io.emit('mensaje-nuevo',  payload)
    });
}