import React, { useState } from 'react'
import Btn from '../button/Btn'
import './Register.scss'

const Register = () => {
    const [pageNumber, setPageNumber] = useState(0)

    const [casterState, setCasterState] = useState(true);
    const [orgState, setOrgState] = useState(false);

    const onCaster = () => {
        setCasterState(true);
        setOrgState(false);
        setPageNumber(pageNumber + 1);
    }

    const onOrg = () => {
        setCasterState(false);
        setOrgState(true);
        setPageNumber(pageNumber + 1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
        console.log(pageNumber);

    }

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
        console.log(pageNumber);
    }

    const complete = () => {
        console.log("complete");
    }

    return (
        <div className='Register_Container Flex Justify_Between Align_Center'>
            <div className='Register_Wrapper'>
                {pageNumber === 0 ? <Step0 caster={onCaster} org={onOrg} /> : null}
                {pageNumber === 1 ? casterState ? <Step1_Caster nextPage={nextPage} prevPage={prevPage} /> : <Step1_Org nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 2 ? casterState ? <Step2_Caster nextPage={nextPage} prevPage={prevPage} /> : <Step2_Org nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 3 ? casterState ? <Step3_Caster complete={complete} prevPage={prevPage} /> : <Step3_Org complete={complete} prevPage={prevPage} /> : null}
            </div>
            <div className='Step_Counter Grid'>
                <div className={pageNumber === 0 ? "Step_Div_Active" : "Step_Div"}>&nbsp;</div>
                <div className={pageNumber === 1 ? "Step_Div_Active" : "Step_Div"}>&nbsp;</div>
                <div className={pageNumber === 2 ? "Step_Div_Active" : "Step_Div"}>&nbsp;</div>
                <div className={pageNumber === 3 ? "Step_Div_Active" : "Step_Div"}>&nbsp;</div>
            </div>
        </div>
    )
}

const Step0 = ({ caster, org }: any) => {


    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    1
                </div>
                <div className='Title H3 Flex Justify_Center Align_Center'> Caster or org?</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <div className='add-form_Wrapper Grid Justify_Center Align_Center '>
                    <div className='H3 CasterButtons' onClick={caster}>Caster</div>
                    <div className='H3 CasterButtons' onClick={org}>Organisation</div>
                </div>
            </div>
        </>
    )
}

const Step1_Caster = ({ nextPage, prevPage }: any) => {
    const [email, setEmail] = useState('')
    const [realName, setRealName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [gamertag, setGamertag] = useState('')

    const onNext = () => {
        nextPage()
    }

    const onPrev = () => {
        prevPage();
    }

    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    2
                </div>
                <div className='Title H2 Flex Justify_Center Align_Center'> BASIC INFO</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <form className="add-form Grid Justify_Around Align_Center" onSubmit={onNext}>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Real name</span>
                        <input type="text" className='Input' placeholder='Jane Doe' value={realName} onChange={(e) => setRealName(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                        <input type="text" className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Country</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={country} onChange={(e) => setCountry(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Address</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary'>Gamertag</span>
                        <input type="text" className='Input' placeholder='Groundpound69' value={gamertag} onChange={(e) => setGamertag(e.target.value)}></input>
                    </div>

                </form>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onNext} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="NEXT STEP" />
            </div>
        </>
    )
}

const Step1_Org = ({ nextPage, prevPage }: any) => {
    const [email, setEmail] = useState('')
    const [realName, setRealName] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [gamertag, setGamertag] = useState('')

    const onNext = () => {
        nextPage()
    }

    const onPrev = () => {
        prevPage();
    }

    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    2
                </div>
                <div className='Title H3 Flex Justify_Center Align_Center'> BASIC INFO ORG</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <form className="add-form Grid Justify_Around Align_Center" onSubmit={onNext}>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Real name</span>
                        <input type="text" className='Input' placeholder='Jane Doe' value={realName} onChange={(e) => setRealName(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                        <input type="text" className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Country</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={country} onChange={(e) => setCountry(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Address</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary'>Gamertag</span>
                        <input type="text" className='Input' placeholder='Groundpound69' value={gamertag} onChange={(e) => setGamertag(e.target.value)}></input>
                    </div>

                </form>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onNext} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="NEXT STEP" />
            </div>
        </>
    )
}

const Step2_Caster = ({ nextPage, prevPage }: any) => {
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [discord, setDiscord] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        nextPage();
    }
    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    3
                </div>
                <div className='Title H2 Flex Justify_Center Align_Center'> SOCIALS</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <form className="add-form Grid Justify_Around Align_Center" onSubmit={onNext}>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Twitter</span>
                        <input type="text" className='Input' placeholder='Jane Doe' value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Facebook</span>
                        <input type="text" className='Input' placeholder='username@gmail.com' value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Instagram</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={instagram} onChange={(e) => setInstagram(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Discord</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onNext} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="NEXT STEP" />
            </div>
        </>
    )
}

const Step2_Org = ({ nextPage, prevPage }: any) => {
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [discord, setDiscord] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        nextPage();
    }
    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    3
                </div>
                <div className='Title H2 Flex Justify_Center Align_Center'> SOCIALS ORG</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <form className="add-form Grid Justify_Around Align_Center" onSubmit={onNext}>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Twitter</span>
                        <input type="text" className='Input' placeholder='Jane Doe' value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Facebook</span>
                        <input type="text" className='Input' placeholder='username@gmail.com' value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Instagram</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={instagram} onChange={(e) => setInstagram(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Discord</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onNext} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="NEXT STEP" />
            </div>
        </>
    )
}

const Step3_Caster = ({ complete, prevPage }: any) => {
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        complete();
    }
    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    4
                </div>
                <div className='Title H2 Flex Justify_Center Align_Center'> description</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <div className='Register_Component_Description Flex'>
                    <span className='Half_opacity P4_Statewide_light Text_Secondary' >Descripe yourself</span>
                    <textarea className='Input_Description' placeholder='Tell us something great' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onComplete} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="COMPLETE" />
            </div>
        </>
    )
}

const Step3_Org = ({ complete, prevPage }: any) => {
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        complete();
    }
    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Start Align_Center'>
                <div className='Step H1 Flex Justify_Center Align_Center'>
                    4
                </div>
                <div className='Title H3 Flex Justify_Center Align_Center'> description Org</div>
            </div>
            <div className='add-form_Container Flex Justify_Start Align_Center'>
                <form className="add-form_Description Flex Justify_Start Align_Center" onSubmit={onComplete}>
                    <div className='Register_Component_Description Flex'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Descripe your organisation</span>
                        <textarea className='Input_Description' placeholder='Tell us something great' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </form>
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline P3_Statewide_Bold Text_Secondary" children="PREVIOUS STEP" />
                <Btn onClick={onComplete} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="COMPLETE" />
            </div>
        </>
    )
}

export default Register