import React from "react";

//import Components
import DevelopmentLoadMapItem from './DevelopmentLoadMapItem';

//import CSS
import './DevelopmentLoadMap.css';
class DevelopmentLoadMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadmaps: [
                {
                    year: 2021,
                    title: 'Q4',
                    content: [
                        "The Sevens rarity data will be added to Rarity.tools as well as Rarity Sniper.",
                        "Launch of the Sevens online shop for clothes, masks and accesories..",
                        "With the treasure hunt now concluded, work on Season 2 will start.",
                        "A lot of the projects in the space are fairly siloed. We imagine a future where a lot of NFT projects do collabs with one another, like many fashion brands in the world. We’ll be looking and reaching out to potential collaboration partners.",
                    ]
                },
                {
                    year: 2022,
                    title: 'Q1',
                    content: [
                        "Season 2 launch. Season 1 holders will have priority minting (amount TBC) as well as active community members.",
                        "The Sevens to launch an incubation program working with artists that have a passion for making unique art pieces and fashion attributes. The community treasury will help fund future projects chosen by our community."
                    ]
                },
                {
                    year: 2022,
                    title: 'Q2',
                    content: [
                        "Development and release of The Sevens DAO with $ZENI token airdropped to all hodlers proportionally.",
                        "Launch of Season 3.",
                        "The Sevens collection will now be deflationary through a unique mutation mechanism."
                    ]
                },
            ]
        }
    }

    render() {
        return(
            <div className='development-loadmap-control'>
                <h2>
                    Development Roadmap
                </h2>

                {
                    this.state.loadmaps &&
                    this.state.loadmaps.map((item, index) => {
                        return (
                            <DevelopmentLoadMapItem 
                                key={index}
                                year={item.year}
                                title={item.title}
                                content={item.content}
                            />
                        );
                    })
                }
            </div>
            
        );
    }
}

export default DevelopmentLoadMap;
