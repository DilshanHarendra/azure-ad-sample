import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../authConfig.js"

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <MsalProvider instance={msalInstance}>
          <App />
      </MsalProvider>
  </React.StrictMode>
)
