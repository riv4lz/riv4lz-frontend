import React, { useEffect } from 'react'
import CallToAction from '../../components/frontPage/CallToAction/CallToAction'
import Guide from '../../components/frontPage/Guide/Guide'
import MissionAndVision from '../../components/frontPage/MissionAndVision/MissionAndVision'
import Testimonies from '../../components/frontPage/Testimonies/Testimonies'
import Orgs from '../../components/frontPage/Orgs/Orgs'
import Stats from '../../components/frontPage/Stats/Stats'
import Matches from '../../components/frontPage/Matches/Matches'
import Blog from '../../components/frontPage/Blog/Blog'
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
            <MissionAndVision />
            <Guide />
            <Stats />
            <Matches />
            <Testimonies />
            <Blog />
        </>
    )
}

export default FrontPage
