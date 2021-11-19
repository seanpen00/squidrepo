import React from "react";
import "./Announcement.css";

class Announcement extends React.Component {
    render() {
        return (

            <div className="cont"style={{textAlign: "center"}}>
                <h1>A collection of <text style={{color: "#ED1B76"}}>5697</text> unique $quid Games NFTs are on their way to <text style={{color: "#249F9C"}}>Jeju island</text>.<br></br> 
                    By owning a $quid Games NFT you will be granted access to participate in our games which will include <text style={{color: "#ED1B76"}}>unimaginable prizes.</text></h1>
                    <br></br>
                    <h1 style={{fontSize: 40}}>Full Release:</h1>
                    <img className="countdown" src="https://gen.sendtric.com/countdown/76txy77p0f"/>
            <br></br>
            <div className="cont">
            
            </div>
            <h1>
            <a href="https://discord.gg/aHWQTjv9"><img className="linkpic" src="https://squid-games-nft.github.io/main/discordpic.png"></img></a>
            <a href="https://etherscan.io/address/0xe9f8ae2ddbe7b6ecc1e68699e2e9030278aed2f0"><img className="linkpic" src="https://squid-games-nft.github.io/main/etherscanpic.png"></img></a>
            <a href="https://twitter.com/squidsgamenft"><img className="linkpic" src="https://squid-games-nft.github.io/main/twitterpic.png"></img></a>
            <a href="https://opensea.io"><img className="linkpic" src="https://squid-games-nft.github.io/main/openseapic.png"></img></a>
            
            </h1>
            </div>
        );
    }
}

export default Announcement;