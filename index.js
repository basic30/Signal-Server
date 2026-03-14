const { PeerServer } = require('peer');
const peerServer = PeerServer({ port: process.env.PORT || 9000, path: '/myapp' });
console.log('PeerJS server is running');