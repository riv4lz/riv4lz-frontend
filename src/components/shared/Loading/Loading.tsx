import React from 'react'
import './Loading.scss'
const Loading = () => {
    return (
        <div className='[ Loading ]    { flex-flow height-full width-full }'>
            <div className='Loading__Wrapper    { flex-flow }'>
                <div className='Loading__Spinner    { height-full width-full }'>
                    <svg id="loading-spinner" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle id="loading-circle-large" cx="40" cy="40" r="36" strokeWidth="8" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Loading