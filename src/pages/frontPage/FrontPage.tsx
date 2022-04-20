import React from 'react'
import CallToAction from '../../components/frontpage/CallToAction/CallToAction'
import Games from '../../components/frontpage/Games/Games'
import Guide from '../../components/frontpage/Guide/Guide'
import Mission from '../../components/frontpage/Mission/Mission'
import News from '../../components/frontpage/News/News'
import Testimonies from '../../components/frontpage/Testimonies/Testimonies'
import Footer from '../../components/frontpage/Footer/Footer'
import Orgs from '../../components/frontpage/Orgs/Orgs'

const FrontPage = () => {
    return (
        <>
            <CallToAction />
            <Orgs />
            <Guide />
            <Mission />
            <Games />
            <News />
            <Testimonies />
            <Footer />
        </>
    )
}

export default FrontPage