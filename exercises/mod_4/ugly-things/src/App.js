import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import UglyThingsList from './components/UglyThingsList';
import UglyThingsContextProvider from './contexts/UglyThingsContext';

const styles = {
    background: '#36648b',
    maxWidth: 700,
    color: 'whitesmoke',
    fontFamily: 'sans-serif',
    textAlign: 'center'
};

const App = () => (
    <div style={ styles }>
        <UglyThingsContextProvider>
            <Navbar />
            <Form />
            <UglyThingsList />
        </UglyThingsContextProvider>
    </div>
);

export default App;