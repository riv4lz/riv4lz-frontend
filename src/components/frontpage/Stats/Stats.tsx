import React from 'react'
import './Stats.scss'

const Stats = () => {
    return (
        <div className='[ Stats ]    flex-flow'>
            <div className='Stats__Wrapper    flex-flow'>
                <div className='[ StatsComponent ]    flex-flow p1 font-oxanium fw-900 clr-white'>
                    <div className='StatsComponent__Title'>
                        300+
                    </div>
                    <div className='StatsComponent__Paragraph'>
                        Happy Clients
                    </div>
                </div>
                <div className='[ StatsComponent ]    flex-flow p1 font-oxanium fw-900 clr-white'>
                    <div className='StatsComponent__Title'>
                        800+
                    </div>
                    <div className='StatsComponent__Paragraph'>
                        Casters
                    </div>
                </div>
                <div className='[ StatsComponent ]    flex-flow p1 font-oxanium fw-900 clr-white'>
                    <div className='StatsComponent__Title'>
                        100+
                    </div>
                    <div className='StatsComponent__Paragraph'>
                        Organisations
                    </div>
                </div>
                <div className='[ StatsComponent ]    flex-flow P1_Oxanium Bold Text_Secondary'>
                    <div className='StatsComponent__Title'>
                        15+
                    </div>
                    <div className='StatsComponent__Paragraph'>
                        TO'S
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
