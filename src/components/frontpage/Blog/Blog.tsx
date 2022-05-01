import React from 'react'
import './Blog.scss'
import Test_Blog from '../../../assets/images/test_blog.jpg'

const Blog = () => {

    const onBlog1Click = () => {
        console.log('Blog 1 clicked')
    }

    const onBlog2Click = () => {
        console.log('Blog 2 clicked')
    }

    const onBlog3Click = () => {
        console.log('Blog 3 clicked')
    }


    return (
        <div className='Blog_Container Flex Justify_Center Align_Center'>
            <div className='Blog_Wrapper Flex Justify_Center Align_Center Text_Secondary'>
                <div className='Blog_Title H_Oxanium Extra_Bold'> Our Latest Updates</div>
                <div className='Blog_Paragraph P3_Oxanium Medium'>Conveniently customize proactive services leveraged without
                    continualliery customize continually.
                </div>
                <div className='Component_Container Grid'>
                    <div className='Component_Wrapper'>
                        <div className='Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='Title Flex Justify_Start Align_Center P0_Oxanium Bold'>A Place where Start New Life
                            with Peace.</div>
                        <div className='Paragraph P3_Oxanium Medium'>Conveniently innovate user-centric benefit before progressive architectures rapidio manufactured products distinctively. </div>
                        <div className='Read_More P1_Oxanium Bold Text_Primary Pointer' onClick={onBlog1Click}>Read More</div>
                    </div>
                    <div className='Component_Wrapper'>
                        <div className='Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='Title Flex Justify_Start Align_Center P0_Oxanium Bold'>A Place where Start New Life
                            with Peace.</div>
                        <div className='Paragraph P3_Oxanium Medium'>Conveniently innovate user-centric benefit before progressive architectures rapidio manufactured products distinctively. </div>
                        <div className='Read_More P1_Oxanium Bold Text_Primary Pointer ' onClick={onBlog2Click}>Read More</div>
                    </div>
                    <div className='Component_Wrapper'>
                        <div className='Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='Title Flex Justify_Start Align_Center P0_Oxanium Bold'>A Place where Start New Life
                            with Peace.</div>
                        <div className='Paragraph P3_Oxanium Medium'>Conveniently innovate user-centric benefit before progressive architectures rapidio manufactured products distinctively. </div>
                        <div className='Read_More P1_Oxanium Bold Text_Primary Pointer' onClick={onBlog3Click}>Read More</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog