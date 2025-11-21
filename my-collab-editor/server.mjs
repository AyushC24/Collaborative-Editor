import {Server} from '@hocuspocus/server'

// CHANGE: Use 'new Server' instead of 'Server.configure'
const server = new Server({
    port: 1234,
    name: 'hocuspocus-fra1-01',
    onConnect() {
        console.log('✨ A user connected!')
    },
})

server.listen()
console.log('🚀 WebSocket Server running on ws://0.0.0.0:1234')