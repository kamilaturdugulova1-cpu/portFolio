import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Toolbar from './components/Toolbar';
import Home from './containers/Home';
import AboutUs from './containers/AboutUS';
import Contacts from './containers/Contacts';
import Portfolio from './containers/Portpholio';

const PortfolioDetailedView: React.FC = () => {
    const routerParameters = useParams<{ projectPath: string }>();

    let displayedProjectTitle: string = '';

    if (routerParameters.projectPath === 'burger-constructor') {
        displayedProjectTitle = 'Burger Constructor';
    } else if (routerParameters.projectPath === 'user-management') {
        displayedProjectTitle = 'User Management System';
    }

    return (
        <div className="p-2">
            <h4 className="text-white m-0">Лабораторная работа: {displayedProjectTitle}</h4>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <>
            <header>
                <Toolbar />
            </header>
            <main className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contacts" element={<Contacts />} />

                    <Route path="/portfolio" element={<Portfolio />}>
                        <Route path=":projectPath" element={<PortfolioDetailedView />} />
                    </Route>

                    <Route path="*" element={<h1 className="text-center text-white mt-5">Страница не найдена!</h1>} />
                </Routes>
            </main>
        </>
    );
};

export default App;