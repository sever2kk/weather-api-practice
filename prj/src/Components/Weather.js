import React from 'react';
import '../Static/Styles/weather.css'




class Weather extends React.Component {
   render(){
       return(
        <div className="weather-box">
            <h3>Информация о текущей погоде</h3>
            <hr />
            {this.props.city !== undefined && (
            
                <div className="props-list">
                    <img src={this.props.icon} alt="..." />
                    <table border="1">
                        <thead>
                            <tr>
                                <td>№</td>
                                <td>Параметр</td>
                                <td>Значение</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Country</td>
                                <td>{this.props.country}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>City</td>
                                <td>
                                    <span className = "blue">
                                    {this.props.city}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Localtime</td>
                                <td>{this.props.localtime}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Timezone</td>
                                <td>{this.props.timezone}</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Temperature</td>
                                <td>
                                    <span className= "red">
                                    {this.props.temperature}&deg;C
                                    </span>
                                    </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Visibility</td>
                                <td>{this.props.visibility}км</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Wind_direction</td>
                                <td>{this.props.wind_direction}</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Wind_speed</td>
                                <td>{this.props.wind_speed}км/час</td>
                            </tr>
                        </tbody>
                    </table>                        
                </div>

            )}
        </div>
       );
   }
}

export default Weather;




