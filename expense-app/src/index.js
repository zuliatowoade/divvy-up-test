import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotificationComponent from "./NotificationComponent";
import { FriendsProvider } from "./FriendsContext";
import App from './App';
import './index.css'; // Include global styles if you have any
import {Auth0Provider} from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
       <Router>
        <FriendsProvider>
          <App />
        </FriendsProvider>  
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);


// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// );
