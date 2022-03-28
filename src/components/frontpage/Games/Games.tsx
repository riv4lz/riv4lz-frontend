import React from 'react'
import Btn from '../../button/Btn'
import './Games.scss'

const Games = () => {
    const onSeeAll = () => {
        console.log("SEE ALL");

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
            </div>
        </div>
    )
}

export default Games