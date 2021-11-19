import React from "react";

//import CSS
import './LaunchLoadMapItem.css';
class LaunchLoadMapItem extends React.Component {


    render() {
        return (
            <div className='loadmap-item-control'>
                <div className='loadmap-item-leftbar'>
                    <text style={{color: "#ED1B76"}}>{this.props.percentage}</text>
                    {/* <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAkCAYAAAAgh9I0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHISURBVHgB1dhBUsIwFAbgl1THGVccoUeQGXF0B5wETiKeBG6gJwB2OuAh2LpjX+DZ95hKp0JJ0pcQ/kVpk5eEb9oCRcEVpL98ekXEAShY4SYZzl++VuV+BZGn/90ZI8Lgr4EgWdIrQ6JG/AMUqUCiRZwEFClBokScBRQhSJK1E4gsxoB9WpDd/miIKJaAffRuHc3l5ARQKr+c7ttRnAlnQKZ78/b88meiESCGj1gJADfBhSIF4OZqXffzOVU323G+21KgPqadxRsIRxLAXeWD7qLzoBTO8ubWoUCNJCHSAO4udo4BDkUyEB8ALqFNHeBQ2AziC0DRfA8AvNcBKAg4ot/14BCfAIrOv7bpYSMFg7hAfAMoGnC3BovYQEIAKBruNhNAZTyAYgIJBeBhtOH7ItnNQGFqNVjBZPq4HFbbQwJ4aLEjBQkN4OHlg6aQSwB4imqDK4QeFfObJbUZIgHYL30kzhCrlWUAPNWpDq8QQQBPV9fpBSIM4CnPFYhCPAB4WpMiEYgnAE9tWtgI4hHA09sUO0E8A3gJsIwVJACAlwGHGEECAXgpcEwtJCCAl4MGOQoJDKA0+huT3ihudQ/z3fxwTa+hAZRfoCOpkTlzvEAAAAAASUVORK5CYII=" className="tablet:mb-lg" data-xblocker="passed"  /> */}
                </div>
                <div className='loadmap-item-rightbar'>
                    <header>{this.props.header}</header>
                    <summary>
                        {this.props.content.map((item, index) => {
                            return (
                                <p key={index}>{item}</p>
                            );
                        })}
                    </summary>
                </div>
            </div>
        );
    }
}

export default LaunchLoadMapItem;