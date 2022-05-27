import React from 'react'
import './Blog.scss'
import Test_Blog from '../../../assets/images/test_blog.jpg'

const Blog = () => {

    const onBlog1Click = () => {
    }

    const onBlog2Click = () => {
    }

    const onBlog3Click = () => {
    }

    return (
        <div className='[ Blog ]    { width-full flex-flow flex-direction-column}'>
            <div className='Blog__Wrapper    { flex-flow clr-white margin-bottom-xxl width-content flex-direction-column }'>
                <div className='[ BlogTitle ]    { font-oxanium fw-900 margin-top-xxl }'> Our Latest Updates</div>
                <div className='[ BlogSubTitle ]    { p3 font-oxanium fw-300 }'>
                    Conveniently customize proactive services leveraged without continualliery customize continually.
                </div>
                <div className='[ BlogContainer ]    { display-grid }'>
                    <div className='[ BlogComponent ]'>
                        <div className='BlogComponent__Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='BlogComponent__Title    { flex-flow p0 font-oxanium fw-900 }'>
                            A Place where Start New Life with Peace.
                        </div>
                        <div className='BlogComponent__Paragraph    { p3 font-oxanium fw-300 }'>
                            Conveniently innovate user-centric benefit before progressive architectures
                            rapidio manufactured products distinctively.
                        </div>
                        <div className='BlogComponent__ReadMore    { p1 font-oxanium fw-900 clr-primary cursor-pointer }'
                             onClick={onBlog1Click}>Read More
                        </div>
                    </div>
                    <div className='[ BlogComponent ]'>
                        <div className='BlogComponent__Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='BlogComponent__Title    { flex-flow p0 font-oxanium fw-900 }'>
                            A Place where Start New Life with Peace.
                        </div>
                        <div className='BlogComponent__Paragraph    { p3 font-oxanium fw-300 }'>
                            Conveniently innovate user-centric benefit before progressive architectures
                            rapidio manufactured products distinctively.
                        </div>
                        <div className='BlogComponent__ReadMore    { p1 font-oxanium fw-900 clr-primary cursor-pointer }'
                             onClick={onBlog2Click}>Read More
                        </div>
                    </div>
                    <div className='[ BlogComponent ]'>
                        <div className='BlogComponent__Image'>
                            <img src={Test_Blog} alt="test" />
                        </div>
                        <div className='BlogComponent__Title    { flex-flow p0 font-oxanium fw-900 }'>
                            A Place where Start New Life with Peace.
                        </div>
                        <div className='BlogComponent__Paragraph    { p3 font-oxanium fw-300 }'>
                            Conveniently innovate user-centric benefit before progressive architectures
                            rapidio manufactured products distinctively.
                        </div>
                        <div className='BlogComponent__ReadMore    { p1 font-oxanium fw-900 clr-primary cursor-pointer }'
                             onClick={onBlog3Click}>Read More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
