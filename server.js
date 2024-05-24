const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/node_modules/peerjs/dist/peerjs.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'node_modules', 'peerjs', 'dist', 'peerjs.min.js'));
});

app.listen(PORT, () => console.log('listening to port ' + PORT));