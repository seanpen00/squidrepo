import React from "react";
import MetaVerseRight from "./MetaVerseRight";
import './MetaVerse.css';
import metaverseLeft from "../../assets/images/metaverseLeft.png"

class MetaVerse extends React.Component{
    render(){
        return(
            <div className = "metaverse-control" style={{color: "white"}}>
                <h1 style={{height: 20}}></h1>
                <div className = "metaverse-control-row">
                    {/* <div className = "metaverse-control-left">
                        <img className= "metaverse-control-image" src = {metaverseLeft} alt = ""/>
                    </div> */}
                    <div className = "metaverse-control-right">
                        <MetaVerseRight/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default MetaVerse;