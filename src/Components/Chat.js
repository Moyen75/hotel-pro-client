import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";

const socket = io("http://localhost:3001/");

export default function Chat() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, [isConnected]);
    return (
        <div>
            <h1>{isConnected}</h1>
        </div>
    )
}
