import React from 'react'
import Btn from '../../button/Btn'
import './Guide.scss'
import "../../../index.scss";

const Guide = () => {
    var caster: boolean = true;
    var org: boolean = false;

    const test = () => {
        console.log("TEST 1");

    }

    const onCaster = () => {
        caster = !caster;

        console.log(caster);
        console.log(org);


    }

    const onOrg = () => {
        caster = false;
        org = true;
    }


    return (
        <div id="Features" className='guide_Container'>
            <div className='guide_Wrapper'>
                <div>
                    <div className='guide_Title H2 Text_Secondary'> how does it work?</div>
                    <div className='guide_Buttons'>
                        <div>Caster</div>
                        <div>Organisation</div>
                    </div>
                    <div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                        <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                            1
                        </div>
                        <div className='text_Wrapper Flex'>
                            <div className='title P1_Poppins Text_Secondary'>
                                Register
                            </div>
                            <div className='paragraph P3_Poppins Text_Secondary'>
                                For business which a product online
                                product listings in the
                            </div>
                        </div>
                    </div>
                    <div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                        <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                            2
                        </div>
                        <div className='text_Wrapper Flex'>
                            <div className='title P1_Poppins Text_Secondary'>
                                Find Match
                            </div>
                            <div className='paragraph P3_Poppins Text_Secondary'>
                                For business which a product online
                                product listings in the
                            </div>
                        </div>
                    </div>
                    <div className='guide_ComponentContainer Flex Justify_Center Align_Center'>
                        <div className='number A4 Text_Secondary Flex Justify_Center Align_Center'>
                            3
                        </div>
                        <div className='text_Wrapper Flex'>
                            <div className='title P1_Poppins Text_Secondary'>
                                Make Offer
                            </div>
                            <div className='paragraph P3_Poppins Text_Secondary'>
                                For business which a product online
                                product listings in the
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Guide