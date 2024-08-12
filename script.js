let missles;

const addMissile = () => {
    const missile = missiles.shift();
    publishMessage(missile)
}


const loadMissilesJson = async() => {
    const response = await fetch('/missileData.json');
    const result = await response.json();
    missiles = result
}


const socket = new WebSocket('ws://localhost:3108/MissileHandler');


const publishMessage = (missile) => {
  socket.send(JSON.stringify(missile));
}

// Handle messages from the backend
socket.onmessage = (event) => {
  console.log('got message', JSON.stringify(event.data));
}




