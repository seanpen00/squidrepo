import React from "react";

class DevelopmentLoadMapItem extends React.Component {
    render() {
        return(
            <div className='loadmap-item-control'>
                <div className='loadmap-item-leftbar'>
                    {this.props.year}
                </div>
                <div className='loadmap-item-rightbar'>
                    <header>{this.props.title}</header>
                    <summary>
                        <ul>
                            {this.props.content.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                );
                            })}
                        </ul>
                    </summary>
                </div>
            </div>
        );
    }
}

export default DevelopmentLoadMapItem;