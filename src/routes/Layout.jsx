import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';

//The default layout that appears on every page
//NavBar appears on home page, login page, account creation etc.
function Layout() {
    return (
    <div>
    <NavBar/>
    <Outlet />
    </div>
    );
}
export default Layout;