import React from 'react';
import { createRoot } from 'react-dom/client';
import OwnerApp from './owner/OwnerApp.jsx';
import Choose from './Choose.jsx';
import UserApp from './user/UserApp.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp />
  </React.StrictMode>
);
