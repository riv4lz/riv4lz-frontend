import React from 'react'
import { Tweet } from 'react-twitter-widgets';
import './News.scss'
import more from '../../../assets/icons/SeeMore.svg'

const News = () => {
    const tweetid: string = '1506617195626995712';
    return (
        <div className='news_Container'>
            <div className='news_Wrapper'>
                <div className='news_TweetsContainer'>
                    <Tweet tweetId={tweetid} options={{ conversation: 'none', align: 'left', width: '550', height: '350', theme: 'dark', cards: 'hidden' }} />
                    <Tweet tweetId={tweetid} options={{ conversation: 'none', align: 'left', width: '550', height: '350', theme: 'dark', cards: 'hidden' }} />
                    <Tweet tweetId={tweetid} options={{ conversation: 'none', align: 'left', width: '550', height: '350', theme: 'dark', cards: 'hidden' }} />
                    <div className='news_SeeMore H3 Text_Light_Grey'>
                        See even more
                        <img src={more} className='pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News