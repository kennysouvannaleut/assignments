import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import ThemeContextProvider from './contexts/ThemeContext';

const App = () => (
    <div className='App'>
        <ThemeContextProvider>
            <Navbar />
            <Main />
            <ThemeToggle />
            <Footer />
        </ThemeContextProvider>
    </div>
)

export default App;