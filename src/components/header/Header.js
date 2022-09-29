import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* logo and heading */}
            <div className='heading'>
                <img src="../../website-icon.svg" alt="" />&nbsp;&nbsp;&nbsp;
                <div className='heading-title'>
                <h1>
                    Ultra Reading Club
                </h1>
                <h5>
                    Be a wise persone
                </h5>
                </div>
            </div>
        </div>
    );
};

export default Header;