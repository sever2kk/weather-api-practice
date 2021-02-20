import React from 'react';
import  "../Static/Styles/main.css"


class Main extends React.Component {
    render() {
        return (
            <div className="main-box">
                <div className="form">
                    <form onSubmit ={this.props.getWeatherMethod}>
                        <label>Город:</label>
                        <br/>
                        <input 
                        type="text" 
                        id="city" 
                        name="city"
                        placeholder="Введите название города:"/>
                        <br/>
                        <button id="run">Получить Погоду</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Main;