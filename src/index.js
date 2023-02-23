import React from "react";
import * as ReactDom from 'react-dom/client';
import App from "./App";
import { NavigationProvider } from "./context/navigation";
import './input.css'

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>
)