import React from "react";

//import Components
import LaunchLoadMapItem from './LaunchLoadMapItem.js';

//import CSS
import './LaunchLoadMap.css';
import { getNodeText } from "@testing-library/dom";
class LaunchLoadMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadmaps1: [
                // {
                //     percentage: '10%',
                //     header: 'Grand Skyfall',
                //     content: [
                //         "7 new characters enter the metaverse, falling from the sky. Will you be one of 7 lucky community members to receive an airdropped NFT which we guarantee to have a minimum sale value of 0.7 eth if you decide to list!",
                //         "The treasury is now also growing and contains 14ETH!",
                //         "All done!"
                //     ]
                // },
                {
                    percentage: '25%',
                    header: 'The Games Begin',
                    content: [
                        "- Randomly selected owners of $quid Games NFT's will receive 4 $quid NFTs which will be airdropped randomly to early adopters and supporters.",
                        "- This is to show appreciation for the OGs that have supported our project from Day 1.",
                    ]
                },
                {
                    percentage: '50%',
                    header: 'Halfway Done',
                    content: [
                        "- The community will be able to vote for a charity in which a donation of at least $10,000 USD will be made. $quid Players unite!"
                    ]
                },
                {
                    percentage: '70%',
                    header: 'Ojingeo Fever',
                    content: [
                        "- Custom $quid Games NFT merch will be awarded to our most active Discord members and contest winners.",
                        "- The community votes on merch type and design.",
                        "- If your $quid Player is voted on and featured in the merch, you will receive a special gift from us!"
                    ]
                },
                {
                    percentage: '80%',
                    header: 'Last Round',
                    content: [
                        "- $quid Games NFT Play 2 Earn game initialized (Hint: $quid Tokens)",
                        "- Game modes built for the community.",
                    ]
                },
                {
                    percentage: '100%',
                    header: 'Finale',
                    content: [
                        "- A buy-back wallet will be used to help stabilise the price of $quid Games NFT's.",
                        "- We do so by buying back ALL $quid Games NFT listed below the mint price every 7 days from OpenSea.",
                        "- The NFTs that we buy back will then be used for future promotions and giveaways. ",
                        "- Minters have a chance to win a LEGENDERY 1/1 out of 5687 $quid Games NFT  "
                    ]
                },
                {
                    percentage: 'PHASE 2',
                    header: 'The Future',
                    content: [
                        "- Players who hold any of $quid Games NFT will be able to participate in variety of games and have a chance to win the grand prize (more details TBA) ",
                        "- New $quid Games weapons will be airdropped for existing holders 1:1",
                        "- Release of $quid Tokens (more details to come)"
                    ]
                }
            ],
            loadmaps2:[
                "1. When is the launch?",
                "Launch Date will be 11/20/2021",
                " ‍‍",
                "2. How do I purchase a $quid Games NFT?",
                "A minting button will be available on our website when we have launched.",
                " ‍‍",
                "3. Will you have a pre-sale to reward early supporters?",
                "As the most direct way of rewarding our community in the early days, yes! 456 players will be selected for pre-sale (More information on our Discord channel)",
                " ‍‍",
                "4. Is there a limit to how many $quid Games NFT's I can mint?",
                "Presale 3 Per Wallet | Public Launch 10 Per Wallet",
                " ‍‍",
                "5. How much to mint a $quid Games NFT?",
                "0.06 ETH per $quid games NFT + gas",
                " ‍‍",
                "6. How many $quid Games NFT’s are there?",
                "There will only be 5697 $quid Games NFT’s ever created in total",
                " ‍‍",
                "7. When will the the $quids be revealed?",
                "The $quids will be revealed 2 days after the public launch. We will have a huge reveal party in the Discord too! Make sure to join the Discord for the best experience.",
                " ‍‍",
                "8. What are royalty fees?",
                "Royalty fees will be set at 4.5% on OpenSea. This excludes the 2.5% that OpenSea takes.",
                " ‍‍",
                "9. How much is the prize pool?",
                "Prize pool will be announced 10 days before the game but we can guarantee that you won't be disappointed (Hint: A lot of ETH)",
                " ‍‍",
                "10. What about the rewards $quid Tokens?",
                "$quid tokens will be used as utility. More details on our Discord server.",
                " ‍‍",
                "11. Are you concerned about copyrights?",
                "We are in NO SHAPE OR FORM ASSOCIATED with the Netflix TV show. More information on our Discord server.",
            ],
        }
    }

    render() {
        return (
            <div className='launch-loadmap-control'>
                <h2 style={{textAlign: "center", color: "#249F9C"}}>ROADMAP</h2>

                {
                    this.state.loadmaps1 && 
                    this.state.loadmaps1.map((item, index) => {
                        return (
                            <LaunchLoadMapItem 
                                key={index}
                                percentage={item.percentage}
                                header={item.header}
                                content={item.content}
                            />
                        )
                    })
                }

                <h2 style={{textAlign: "center", color: "#249F9C"}}>FAQ</h2>
                {
                    this.state.loadmaps2 &&
                            <LaunchLoadMapItem
                            style={{color: "#37F713"}}
                            percentage = "Questions"
                            header = "Check out our FAQ to answer any questions you may have."
                            content = {this.state.loadmaps2}
                            />
                }
            </div>
        );
    }
}

export default LaunchLoadMap;