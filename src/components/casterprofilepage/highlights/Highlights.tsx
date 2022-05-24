import React from 'react'
import './Highlights.scss'
import VideoTemp1 from "../../../assets/images/Temp/VideoTemp1.png";
import VideoTemp2 from "../../../assets/images/Temp/VideoTemp2.png";
import VideoTemp3 from "../../../assets/images/Temp/VideoTemp3.png";
import VideoTemp4 from "../../../assets/images/Temp/VideoTemp4.png";

const Highlights = () => {
    const test = () => {
        console.log("Success");
    }

    return (
        <div className='[ Highlights ]'>
            <img src={VideoTemp1} className={"Highlights__One"}/>
            <img src={VideoTemp2} className={"Highlights__Two"}/>
            <img src={VideoTemp3} className={"Highlights__Three"}/>
            <img src={VideoTemp4} className={"Highlights__Four"}/>
        </div>
    )
}


// @ts-ignore
export default Highlights