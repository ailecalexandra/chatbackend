import {app} from './app'
const port = 3001;
const server=app.listen(port, () => {
    console.log('server is running on port', port);
});

export const io = require('socket.io')(server)


io.on('connection',(socket )=>{
    console.log('socket is connected '+ socket.id)
})

