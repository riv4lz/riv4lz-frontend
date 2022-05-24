import React from 'react'
import './Testimonies.scss'
import testPic from '../../../assets/images/testimonie_pic.png'
import Star from '../../../assets/icons/star.svg'

const Testimonies = () => {
    return (
        <div className='[ Testimonies ]    { flex-flow }'>
            <div className='Testimonies__Wrapper    { flex-flow }'>
                <div className='[ TestimoniesTitle ]    { p1 font-oxanium fw-900 clr-white'>
                    What Our Customer Say
                </div>
                <div className='[ TestimoniesComponentContainer ]'>
                    <div className='TestimoniesComponentContainer__Wrapper    { flex-flow clr-white }'>
                        <div className='[ TestimoniesComponent ]    { flex-flow }'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name    { p1 font-oxanium fw-900 }'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status    { p3 font-oxanium fw-300 }'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating    { display-flex align-items-center}'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='TestimoniesComponent__Text    { p3 font-oxanium}'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='[ TestimoniesComponent ]    { flex-flow }'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name    { p1 font-oxanium fw-900 }'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status    { p3 font-oxanium fw-300 }'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating    { display-flex align-items-center}'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='TestimoniesComponent__Text    { p3 font-oxanium}'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='[ TestimoniesComponent ]    { flex-flow }'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name    { p1 font-oxanium fw-900 }'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status    { p3 font-oxanium fw-300 }'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating    { display-flex align-items-center}'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='TestimoniesComponent__Text    { p3 font-oxanium}'>
                                Conveniently customize proactive web services fofeveragedwithout continualliery aggregate
                            </div>
                        </div>
                        <div className='[ TestimoniesComponent ]    { flex-flow }'>

                            <div className='TestimoniesComponent__Image'>
                                <img src={testPic} alt="test" />
                            </div>
                            <div className='TestimoniesComponent__Name    { p1 font-oxanium fw-900 }'>
                                Theresa Jordan
                            </div>
                            <div className='TestimoniesComponent__Status    { p3 font-oxanium fw-300 }'>
                                Pro Player
                            </div>
                            <div className='TestimoniesComponent__Rating    { display-flex align-items-center}'>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                            </div>
                            <div className='TestimoniesComponent__Text    { p3 font-oxanium}'>
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
