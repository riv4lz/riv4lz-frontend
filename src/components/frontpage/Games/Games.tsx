import React from 'react'
import Btn from '../../button/Btn'
import './Games.scss'
import CSGO from '../../../assets/images/CSGO.png'
import League from '../../../assets/images/League.png'
import Valo from '../../../assets/images/Valo.png'

const Games = () => {
    const onSeeAll = () => {
        console.log("SEE ALL");

    }

    const onClickLeft = () => {
        console.log("Clicked Left");
    }

    const onClickRight = () => {
        console.log("Clicked Right");
    }

    return (
        <div className='games_Container'>
            <div className='games_Wrapper'>
                <div className='games_titleWrapper'>
                    <div className='title H2 Text_Secondary'>
                        CURRENTLY SUPPORTED GAMES
                    </div>
                    <Btn onClick={onSeeAll} children='See All' classes='btn_CallToAction_Solid P4_Statewide_Bold Text_Secondary' />
                </div>
                <div className='games_Carousel'>
                    <div className='games_CarouselArrow A2 Text_Secondary'>
                        <Btn classes='pointer' children="&lt;" onClick={onClickLeft}></Btn>
                    </div>
                    <div className='games_Carousel_GamesContainer'>
                        <div className='games_Carousel_GameComponent'>
                            <div className='image'>
                                <img src={CSGO}></img>
                            </div>
                            <div className='title P2_Statewide_Bold Text_Secondary'>
                                CS:GO
                            </div>
                        </div>
                        <div className='games_Carousel_GameComponent'>
                            <div className='image'>
                                <img src={League}></img>
                            </div>
                            <div className='title P2_Statewide_Bold Text_Secondary'>
                                League of Legends
                            </div>
                        </div>
                        <div className='games_Carousel_GameComponent'>
                            <div className='image'>
                                <img src={Valo}></img>
                            </div>
                            <div className='title P2_Statewide_Bold Text_Secondary'>
                                Valorant
                            </div>
                        </div>
                    </div>
                    <div className='games_CarouselArrow A2 Text_Secondary'>
                        <Btn classes='pointer' children="&gt;" onClick={onClickRight}></Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Games