import React, { useState } from 'react'
import { useStore } from '../../Stores/store'
import Btn from '../button/Btn'
import './Register.scss'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { authStore } = useStore();
    const [pageNumber, setPageNumber] = useState(0)

    const [casterState, setCasterState] = useState(true);
    const [orgState, setOrgState] = useState(false);

    const uuid = uuidv4().toString();

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
        if(localStorage.getItem("token") !== null) {
            setPageNumber(pageNumber + 1);
        } else {
            alert("Something went wrong, please try again");
        }
    }

    return (
        <div className='Register_Container Flex Justify_Between Align_Center'>
            <div className='Register_Wrapper Flex'>
                {pageNumber === 0 ? <Step0 caster={onCaster} org={onOrg} /> : null}
                {pageNumber === 1 ? casterState ? <Step1_Caster id={uuid} nextPage={nextPage} prevPage={prevPage} /> : <Step1_Org id={uuid} nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 2 ? casterState ? <Step2_Caster id={uuid} nextPage={nextPage} prevPage={prevPage} /> : <Step2_Org id={uuid} nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 3 ? casterState ? <Step3_Caster id={uuid} complete={complete} prevPage={prevPage} /> : <Step3_Org id={uuid} complete={complete} prevPage={prevPage} /> : null}
                {pageNumber === 4 ? <Done /> : null}
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

const Step1_Caster = ({ id, nextPage, prevPage }: any) => {
    const { authStore, casterStore } = useStore();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onNext = () => {
        const uuid = uuidv4().toString();
        authStore.registerCaster({
            id: uuid,
            email: email,
            password: password,
        })
        casterStore.createCasterProfile({
            id: uuid,
            name: username,
            userType: 0,
            description: '',
            profileImage: '',
            bannerImage: '',
            facebookURL: '',
            twitterURL: '',
            discordURL: '',
            twitchURL: '',
            websiteURL: ''
        })
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
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Username</span>
                        <input type="text" className='Input' placeholder='Groundpound69' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                        <input type="email" className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Password</span>
                        <input type="password" className='Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Password</span>
                        <input type="password" className='Input' placeholder='Password'></input>
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

const Step1_Org = ({ id, nextPage, prevPage }: any) => {
    const { authStore, orgStore } = useStore();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onNext = () => {
        const uuid = uuidv4().toString();
        authStore.registerCaster({
            id: uuid,
            email: email,
            password: password,
        })
        orgStore.createOrgProfile({
            id: uuid,
            name: username,
            userType: 1,
            description: '',
            profileImage: '',
            bannerImage: '',
            facebookURL: '',
            twitterURL: '',
            discordURL: '',
            twitchURL: '',
            websiteURL: ''
        })
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
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Username</span>
                        <input type="text" className='Input' placeholder='Groundpound69' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Email</span>
                        <input type="email" className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Password</span>
                        <input type="password" className='Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Password</span>
                        <input type="password" className='Input' placeholder='Password'></input>
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

const Step2_Caster = ({ id, nextPage, prevPage }: any) => {
    const { casterStore } = useStore();
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitch, setTwitch] = useState('')
    const [discord, setDiscord] = useState('')
    const [website, setWebsite] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        let caster = casterStore.caster
        const updatedCaster = {
            ...caster, twitterURL: twitter, facebookURL: facebook, twitchURL: twitch, discordURL: discord, bannerImage: '', profileImage: '', websiteURL: website
        }
        console.log(updatedCaster);

        casterStore.updateCasterProfile(updatedCaster);
        casterStore.setCaster(updatedCaster);
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
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Twitch</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={twitch} onChange={(e) => setTwitch(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Discord</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Website</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={website} onChange={(e) => setWebsite(e.target.value)}></input>
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

const Step2_Org = ({ id, nextPage, prevPage }: any) => {
    const { orgStore } = useStore();
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitch, setTwitch] = useState('')
    const [discord, setDiscord] = useState('')
    const [website, setWebsite] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        let org = orgStore.org
        const updatedOrg = {
            ...org, twitterURL: twitter, facebookURL: facebook, twitchURL: twitch, discordURL: discord, bannerImage: '', profileImage: '', websiteURL: website
        }
        console.log(updatedOrg);

        orgStore.updateOrgProfile(updatedOrg);
        orgStore.setOrg(updatedOrg);
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
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Twitch</span>
                        <input type="text" className='Input' placeholder='Uzbekistan' value={twitch} onChange={(e) => setTwitch(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Discord</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                    <div className='Register_Component'>
                        <span className='Half_opacity P4_Statewide_light Text_Secondary' >Website</span>
                        <input type="text" className='Input' placeholder='Skrrrrt lane 69' value={website} onChange={(e) => setWebsite(e.target.value)}></input>
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

const Step3_Caster = ({ id, complete, prevPage }: any) => {
    const { casterStore } = useStore();
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        let caster = casterStore.caster
        const updatedCaster = {
            ...caster, description: description
        }
        console.log(updatedCaster);

        casterStore.updateCasterProfile(updatedCaster);
        casterStore.setCaster(updatedCaster);
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

const Step3_Org = ({ id, complete, prevPage }: any) => {
    const { orgStore } = useStore();
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        let org = orgStore.org
        const updatedOrg = {
            ...org, description: description
        }
        console.log(updatedOrg);

        orgStore.updateOrgProfile(updatedOrg);
        orgStore.setOrg(updatedOrg);
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

const Done = () => {

    const navigate = useNavigate();
    const onHome = () => {
        navigate('/');
    }
    return (
        <>
            <div className='Register_Header Text_Secondary Flex Justify_Center Align_Center'>
                <div className='Title H3 Flex Justify_Center Align_Center'> Finished</div>
            </div>
            <div className='Finished_Container Flex Justify_Start Align_Center Text_Secondary P1_Oxanium Bold'>
                Congratulations! You have successfully created your account.
                To continue please press the button below, we've already logged you in to your account.
            </div>
            <div className='Register_Buttons Flex Justify_Center Align_Center'>
                <Btn onClick={onHome} classes="Btn_Login P1_Statewide_Bold Text_Secondary" children="Back to home" />
            </div>
        </>
    )
}

export default Register