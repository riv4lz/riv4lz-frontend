import React, { useEffect } from 'react'
import CallToAction from '../../components/frontpage/CallToAction/CallToAction'
import Guide from '../../components/frontpage/Guide/Guide'
import Mission from '../../components/frontpage/Mission/Mission'
import Testimonies from '../../components/frontpage/Testimonies/Testimonies'
import Orgs from '../../components/frontpage/Orgs/Orgs'
import Stats from '../../components/frontpage/Stats/Stats'
import Matches from '../../components/frontpage/Matches/Matches'
import Blog from '../../components/frontpage/Blog/Blog'
import Footer from '../../components/shared/Footer/Footer'
import { useStore } from '../../Stores/store'

const FrontPage = () => {
    const { eventStore } = useStore();
    useEffect(() => {
        const loadMatches = async () => {
            if (eventStore.matches.length <= 0) {
                await eventStore.loadMatches();
            }
        }
        loadMatches();
    }, [])
    return (
        <>
            <CallToAction />
            <Orgs />
            <Mission />
            <Guide />
            <Stats />
            <Matches />
            <Testimonies />
            <Blog />
        </>
    )
}

export default FrontPage
