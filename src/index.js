import React from "react";
import * as ReactDom from 'react-dom/client';
import App from "./App";
import { NavigationProvider } from "./context/navigation";
import { UsernameProvider } from "./context/username";
import './input.css'

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <NavigationProvider>
        <UsernameProvider>
            <App/>
        </UsernameProvider>
    </NavigationProvider>
)