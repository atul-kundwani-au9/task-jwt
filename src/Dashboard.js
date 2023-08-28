import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Dashboard = ({ token }) => {
  const [socket, setSocket] = useState(null);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:4000'); 
    setSocket(newSocket);

    newSocket.on('notification', (data) => {
      setNotification(data.message);
    });

    return () => newSocket.disconnect();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <p>Token: {token}</p>
      <p>Notification: {notification}</p>
    </div>
  );
};

export default Dashboard;
