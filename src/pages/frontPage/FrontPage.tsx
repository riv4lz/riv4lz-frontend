import React from 'react'
import CallToAction from '../../components/frontpage/CallToAction/CallToAction'
import Games from '../../components/frontpage/Games/Games'
import Guide from '../../components/frontpage/Guide/Guide'
import Mission from '../../components/frontpage/Mission/Mission'

const FrontPage = () => {
    return (
        <>
            <CallToAction />
            <Guide />
            <Mission />
            <Games />
        </>
    )
}

export default FrontPage