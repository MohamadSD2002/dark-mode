import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFond from '../pages/NotFond';

const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <NotFond /> },
];

export default routes;