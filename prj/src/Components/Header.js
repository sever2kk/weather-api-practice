import React from 'react';
import "../Static/Styles/header.css"


class Header extends React.Component {
    render() {
        return (
            <div className="header-box">
                <h2>Погодный информер</h2>
                <h3>Получение прогноза погоды по городам мира</h3>
                
            </div>
        );
    }
}

export default Header;