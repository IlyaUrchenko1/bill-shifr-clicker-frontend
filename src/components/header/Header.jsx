import React from 'react';
import './Header.css';
import info from '../../image/img_button/info.png'
import crown from '../../image/img_button/crown.png'

const Header = () => {
    return (
        <header className="header">
            <div className="info-btn">
                <button>
                    <img src={info} alt="Информация"/>
                </button>
            </div>
            <div className="top-btn">
                <button>
                    <img src={crown} alt="Топ"/>
                </button>
            </div>
        </header>
    );
};

export default Header;