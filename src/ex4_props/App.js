import React from 'react';
import Header, { Nav } from './Header';

const App = () => {

    const headerText = "Marketplace UI!";
    const logo = "logo.jpg";
    const links = ["Login", "Sign Up", "About"];

    return (
        <div>
            <Nav logo = {logo} links={links}/>
            <Header text={headerText} bgColor='info' />
            <br/>
            <Header />
        </div>
    );
};

export default App;