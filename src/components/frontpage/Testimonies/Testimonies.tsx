import React from 'react'
import './Testimonies.scss'
import testPic from '../../../assets/images/testimonie_pic.png'
import Star from '../../../assets/icons/star.svg'

const Testimonies = () => {
    return (
        <div className='testimonies_Container Flex Justify_Center Align_Center'>
            <div className='testimonies_Wrapper Flex Justify_Center Align_Center'>
                <div className='testimonies_Title P1_Oxanium Extra_Bold Text_Secondary'>
                    What Our Customer Say
                </div>
                <div className='testimonies_ComponentContainer'>
                    <div className='testimonies_ComponentWrapper Flex Justify_Center Align_Center Text_Secondary'>
                        <div className='testimonie_Component Flex Justify_Center Align_Center'>

                            <div className='testimonie_Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='testimonie_Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='testimonie_Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='testimonie_Rating Flex Align_Center'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='testimonie_Text P3_Oxanium'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='testimonie_Component Flex Justify_Center Align_Center'>

                            <div className='testimonie_Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='testimonie_Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='testimonie_Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='testimonie_Rating Flex Align_Center'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='testimonie_Text P3_Oxanium'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='testimonie_Component Flex Justify_Center Align_Center'>

                            <div className='testimonie_Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='testimonie_Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='testimonie_Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='testimonie_Rating Flex Align_Center'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='testimonie_Text P3_Oxanium'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='testimonie_Component Flex Justify_Center Align_Center'>

                            <div className='testimonie_Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='testimonie_Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='testimonie_Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='testimonie_Rating Flex Align_Center'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='testimonie_Text P3_Oxanium'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>'

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies