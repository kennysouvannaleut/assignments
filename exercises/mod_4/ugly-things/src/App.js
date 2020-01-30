import React from 'react';
// import Form from './FormContainer'
import Navbar from './component/Navbar';
// import List from './components/List';
// import ThemeContextProvider from './contexts/ThemeContext';
// import ThemeToggle from './components/ThemeToggle';
// import UserContextProvider from './contexts/UserContext';
// import ListContextProvider from './contexts/ListContext';
import UglyThingContextProvider from './context/UglyThingContext';
import UglyThingList from './component/UglyThingList';
import UglyThingForm from './component/UglyThingForm';

const App = () => (
    <div className='App'>
        <UglyThingContextProvider>
            <Navbar />
            <UglyThingList />
            <UglyThingForm />
        </UglyThingContextProvider>
        {/* <ThemeContextProvider> */}
            {/* <UserContextProvider> */}
                {/* <Form /> */}
                {/* <ListContextProvider> */}
                     {/* <List /> */}
                {/* </ListContextProvider> */}
                {/* <ThemeToggle /> */}
            {/* </UserContextProvider> */}
        {/* </ThemeContextProvider>  */}
    </div>
)

export default App