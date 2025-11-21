# Collaborative-Editor 

This is a real time collaborative editor easy to use and smooth too.

A high-performance, Google Docs-style collaborative editor built to master Distributed Systems, CRDTs, and WebSockets.

This project demonstrates how to handle real-time concurrency where multiple users can edit the same document simultaneously without conflicts, utilizing a custom WebSocket server for state synchronization.

**The UI (Renderer)**: Next.js + Tiptap

**The Brain (State)**: Y.js

**The Network (Sync)**: Hocuspocus

Run Server: node server.mjs
Run FE: pnpm dev

**Level 1**: If website is open on two diff tabs (same room id) then the texts appear same for both , 
this is achieved using a Hocuspocus server which uses Websocket two pass duplex communication change on one tab will go to server -> other rooms
