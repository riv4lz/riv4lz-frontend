import React from 'react'
import './Testimonies.scss'
import testPic from '../../../assets/images/testimonie_pic.png'
import Star from '../../../assets/icons/star.svg'

const Testimonies = () => {
    return (
        <div className='[ Testimonies ] Flex Justify_Center Align_Center'>
            <div className='Testimonies__Wrapper Flex Justify_Center Align_Center'>
                <div className='[ TestimoniesTitle ] P1_Oxanium Extra_Bold Text_Secondary'>
                    What Our Customer Say
                </div>
                <div className='[ TestimoniesComponentContainer ]'>
                    <div className='TestimoniesComponentContainer__Wrapper Flex Justify_Center Align_Center Text_Secondary'>
                        <div className='[ TestimoniesComponent ] Flex Justify_Center Align_Center'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating Flex Align_Center'>
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
                        <div className='[ TestimoniesComponent ] Flex Justify_Center Align_Center'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating Flex Align_Center'>
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
                        <div className='[ TestimoniesComponent ] Flex Justify_Center Align_Center'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating Flex Align_Center'>
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
                        <div className='[ TestimoniesComponent ] Flex Justify_Center Align_Center'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name P1_Oxanium Bold'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status P3_Oxanium Medium'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating Flex Align_Center'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies
