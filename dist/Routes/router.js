'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const { Client } = require('pg');
const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'node',
    password: 'admin',
    port: 5432,
};
const client = new Client(connectionData);
client.connect();
router.get('/mensajes', (req, res) => {
    client.query('SELECT * FROM mensajes').then((response) => {
        const todo = response.rows;
        res.json({
            ok: true,
            mensaje: 'Get Ok',
            todo
        });
        console.log(response.rows);
        console.log('Todo chido');
        //client.end()
    })
        .catch((err) => {
        client.end();
    });
});
router.get('/mensajes/:id', (req, res) => {
    const id = req.params.id;
    const query = "SELECT * FROM mensajes WHERE id = ('" + id + "')";
    client.query(query).then((response) => {
        const item = response.rows;
        res.json({
            ok: true,
            post: item
        });
    }).catch((err) => {
        res.json({
            status: 'error'
        });
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const body = req.body;
    const query = "INSERT INTO mensajes (mensaje, fecha) VALUES('" + req.body.mensaje + "','" + req.body.fecha + "')";
    /*res.json({
        ok:true,
        cuerpo,
        de,
        body
    });*/
    client.query(query).then(function () {
        res.json({
            ok: true,
            post: body
        });
    });
});
router.delete('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const query = "DELETE FROM mensajes WHERE id = ('" + id + "')";
    client.query(query).then((response) => {
        res.json({
            ok: true,
            id: id,
            delete: cuerpo
        });
    });
});
router.put('/mensajes/:id', (req, res) => {
    const id = req.params.id;
    const query = "UPDATE mensajes SET mensaje = ('" + req.body.mensaje + "') WHERE id = ('" + id + "')";
    client.query(query).then(function () {
        res.json({
            ok: true,
            update: req.body,
        });
    }).catch();
});
router.get('/mensajes/fecha/:fecha1/:fecha2', (req, res) => {
    const fecha1 = req.params.fecha1;
    const fecha2 = req.params.fecha2;
    const query = "SELECT * FROM mensajes WHERE fecha BETWEEN '" + fecha1 + "' AND '" + fecha2 + "' ";
    client.query(query).then((response) => {
        res.json({
            ok: true,
            fechas: response.rows,
        });
    }).catch();
});
exports.default = router;
