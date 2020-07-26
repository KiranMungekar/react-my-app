import React from 'react'

import Navigation from './Navigation';

function Header(){

    return(
        <header  className="border-b p-3 flex justify-between items-center app-header">
            <span className="font-bold"> 
                App Header
            </span>
            <Navigation />
        </header>
    )
}

export default Header;