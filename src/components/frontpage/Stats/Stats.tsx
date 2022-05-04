import React from 'react'
import './Stats.scss'

const Stats = () => {
    return (
        <div className='stats_Container Flex Justify_Center Align_Center'>
            <div className='stats_Wrapper Flex Justify_Center Align_Center'>
                <div className='stats_Component Flex Justify_Center Align_Center P1_Oxanium Bold Text_Secondary'>
                    <div className='Title '>
                        300+
                    </div>
                    <div className='Paragraph '>
                        Happy Clients
                    </div>
                </div>
                <div className='stats_Component Flex Justify_Center Align_Center P1_Oxanium Bold Text_Secondary'>
                    <div className='Title'>
                        800+
                    </div>
                    <div className='Paragraph'>
                        casters
                    </div>
                </div>
                <div className='stats_Component Flex Justify_Center Align_Center P1_Oxanium Bold Text_Secondary'>
                    <div className='Title'>
                        100+
                    </div>
                    <div className='Paragraph'>
                        Organisations
                    </div>
                </div>
                <div className='stats_Component Flex Justify_Center Align_Center P1_Oxanium Bold Text_Secondary'>
                    <div className='Title'>
                        15+
                    </div>
                    <div className='Paragraph'>
                        TO's
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats