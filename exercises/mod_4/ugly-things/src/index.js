import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import App from './App'
import { UserContextProvider } from './userContext'

ReactDOM.render(
    <UserContextProvider>
        <App />
    </UserContextProvider>, 
    document.getElementById('root'))

