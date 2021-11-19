import React from "react";
import "./MetaVerseRight.css";
class MetaVerseRight extends React.Component {

    render() {
        return (
            <div className="metaverse-right-control">
                <h3 style={{ textAlign: "center"}}>
                    Our Team
                </h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 150, margin: 20, textAlign: "center" }}>
                            <img style={{ maxHeight: 150, borderStyle: "solid", borderWidth: "3px", borderColor: "white"}} src="https://squid-games-nft.github.io/main/5.png"></img>
                            <text className="nameTitle" style={{padding: 0, marginBottom: 5, marginTop: 5}}>$quid Master</text>
                            <p style={{marginBottom: 20,}}>LEAD DEV</p>
                            <p style={{textAlign: "left"}}>- Worked for DAO ventures as a full-stack blockchain developer.
                            <br></br>
                                - In charge of the smart contract and blockchain/DeFi development.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 150, margin: 20, textAlign: "center" }}>
                            <img style={{ maxHeight: 150, borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} src="https://squid-games-nft.github.io/main/2.png"></img>
                            <text className="nameTitle" style={{padding: 0, marginBottom: 5, marginTop: 5}}>$quid God</text>
                            <p style={{marginBottom: 20,}}>MARKETING AND BUSINESS</p>
                            <p style={{textAlign: "left"}}>- In charge of Marketing, Business Development and Partnerships for $quid Games NFT project.</p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 150, margin: 20, textAlign: "center" }}>
                            <img style={{ maxHeight: 150, borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} src="https://squid-games-nft.github.io/main/3.png"></img>
                            <text className="nameTitle" style={{padding: 0, marginBottom: 5, marginTop: 5}}>$quid Frontman</text>
                            <p style={{marginBottom: 20,}}>NFT DESIGNER</p>
                            <p style={{textAlign: "left"}}>- Primarily focused on NFT designs and development for last 4 years. </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", maxWidth: 150, margin: 20, textAlign: "center" }}>
                            <img style={{ maxHeight: 150, borderStyle: "solid", borderWidth: "3px", borderColor: "white" }} src="https://squid-games-nft.github.io/main/4.png"></img>
                            <text className="nameTitle" style={{padding: 0, marginBottom: 5, marginTop: 5}}>$quid Enforcer</text>
                            <p style={{marginBottom: 20,}}>COMMUNITY MANAGEMENT</p>
                            <p style={{textAlign: "left"}}>- Working in the games industry and also an experienced moderator of several successful Discord communities.</p>
                        </div>

                    </div>
                </div>
                {/* <h3 style={{textAlign: "center", fontSize: 50}}>The Story</h3>
                <p>A dystopian future in 2077. After a huge global collapse, our counterculture is finding salvation in a digital universe: the metaverse powered by the Ethereum blockchain. There’s unlimited time for movies, games, comic books and music. While out there, the world is burning.</p>
                <p>For generations, we have been living vicariously via our virtual selves, escaping from the physical, chaotic world, reigned by corrupt governments.</p>
                <p>Hidden in the metaverse lie immense treasures. Sacrifices have to be made 
                    to find these treasures and many generations have already failed and were burned alive. 
                    We are the seventh generation (known as “The Sevens”) and we’re more powerful than ever. 
                    Will we finally be able to find the greatest treasure and gain back control over the physical world? 
                    Throughout history ‘7’ has been considered the lucky number in many cultures. Can we, The Sevens, 
                    keep the prophecy, and ourselves, alive?</p> */}
            </div>
        )
    }
}
export default MetaVerseRight;