import React from 'react';
import Navbar from './components/Navbar';
import UglyThingContextProvider from './contexts/UglyThingContext';
import UglyThingList from './components/UglyThingList';
import UglyThingForm from './components/UglyThingForm';

const App = () => (
    <div className='App'>
        <UglyThingContextProvider>
            <Navbar />
            <UglyThingList />
            <UglyThingForm />
        </UglyThingContextProvider>
    </div>
)

export default App