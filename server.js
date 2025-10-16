import http from 'http';
import usuarios from './usuarios.json' with { type: 'json'};

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { 'content-type': 'text/plain'});
        res.end('Bienvenida al servidor http');
    } else if (req.url === '/saludo' && req.method === 'GET'){
        res.writeHead(200, { 'content-type': 'text/plain'});
        res.end('Hola usuario!!');
    } else if (req.url === '/usuarios' && req.method === 'GET'){
        res.writeHead(200, { 'content-type': 'text/plain'});
        res.end(JSON.stringify(usuarios));
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end('Ruta no encontrada');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})