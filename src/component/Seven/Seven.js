import React from "react";
import SevenPost from "./SevenPost";
import "./Seven.css";
import sevenRight from "../../assets/images/sevenRight.gif"
class Seven extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className = "seven-control">
                <div className="seven-control-left">
                    <SevenPost/>
                    <img src= {sevenRight} alt = "" className="seven-control-image"/>
                </div>
                {/* <div className="seven-control-right">
                    
                </div> */}
            </div>
        )
    }
}

export default Seven;