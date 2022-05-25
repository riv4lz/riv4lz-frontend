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
        console.log(uuid);

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
        if (localStorage.getItem("token") !== null) {
            setPageNumber(pageNumber + 1);
        } else {
            alert("Something went wrong, please try again");
        }
    }

    return (
        <div className='[ Register ]    { display-flex justify-content-space-between align-items-center }'>
            <div className='Register__Wrapper    { display-flex }'>
                {pageNumber === 0 ? <Step0 caster={onCaster} org={onOrg} /> : null}
                {pageNumber === 1 ? casterState ? <Step1_Caster id={uuid} nextPage={nextPage} prevPage={prevPage} /> : <Step1_Org id={uuid} nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 2 ? casterState ? <Step2_Caster id={uuid} nextPage={nextPage} prevPage={prevPage} /> : <Step2_Org id={uuid} nextPage={nextPage} prevPage={prevPage} /> : null}
                {pageNumber === 3 ? casterState ? <Step3_Caster id={uuid} complete={complete} prevPage={prevPage} /> : <Step3_Org id={uuid} complete={complete} prevPage={prevPage} /> : null}
                {pageNumber === 4 ? <Done /> : null}
            </div>
            <div className='[ Steps ]    { display-grid }'>
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
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    1
                </div>
                <div className='Register__Header__Title    {  h3 font-statewideBold flex-flow }'> Caster or org?</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <div className='Inputs__Wrapper__CasterButtons    { display-grid justify-content-center align-items-center }'>
                    <div id='casterBtn' className='Inputs__Wrapper_CasterButtons    { h3 font-statewideBold cursor-pointer }' onClick={caster}>Caster</div>
                    <div id='orgBtn' className='Inputs__Wrapper_CasterButtons    { h3 font-statewideBold cursor-pointer }' onClick={org}>Organisation</div>
                </div>
            </div>
        </>
    )
}

const Step1_Caster = ({ id, nextPage, prevPage }: any) => {
    const { authStore, userStore } = useStore();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const onNext = async () => {
        if (username.length <= 0) {
            alert("Username cannot be empty");
            return;
        }
        if (email.length <= 0) {
            alert("Email cannot be empty");
            return;
        }
        if (password.length <= 0) {
            alert("Password cannot be empty");
            return
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number");
            return;
        }
        if (username.length < 3) {
            alert("Username must be at least 3 characters long");
            return;
        }
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert("Email is not valid");
            return;
        }
        if (await authStore.isEmailTaken(email)) {
            alert("Email already taken");
            return;
        }
        await authStore.registerUser({
            id: id,
            email: email,
            password: password,
            userType: 0
        })
        await userStore.createUserProfile({
            id: id,
            name: username,
            userType: 0,
            description: '',
            profileImageUrl: '',
            bannerImageUrl: '',
            facebookUrl: '',
            twitterUrl: '',
            discordUrl: '',
            twitchUrl: '',
            websiteUrl: ''
        })

        await authStore.attemptLogin({ email: email, password: password });
        const loadedUser = await userStore.loadUser(authStore.user?.id);
        if (loadedUser.userType === 0) {
            authStore.isCaster = true;
            authStore.isOrg = false;
        } else {
            authStore.isCaster = false;
            authStore.isOrg = true;
        }

        console.log(loadedUser);

        if (authStore.user) {
            localStorage.setItem("token", authStore.user.token);
        }

        nextPage()
    }

    const onPrev = () => {
        prevPage();
    }

    return (
        <>
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    2
                </div>
                <div className='Register__Header__Title    { H2 flex-flow }'> BASIC INFO</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <form className="Inputs__Form    { display-grid justify-content-space-around align-items-center }" onSubmit={onNext}>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Username</span>
                        <input type="text" id='inputUsername' className='Input' placeholder='Groundpound69' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Email</span>
                        <input type="email" id='inputEmail' className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Password</span>
                        <input type="password" id='inputPassword' className='Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Password</span>
                        <input type="password" id='inputRepeatPassword' className='Input' placeholder='Password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onNext} classes="Btn_Login { p1 font-statewideBold clr-white }" children="NEXT Step" />
            </div>
        </>
    )
}

const Step1_Org = ({ id, nextPage, prevPage }: any) => {
    const { authStore, userStore } = useStore();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const onNext = async () => {
        if (username.length <= 0) {
            alert("Username cannot be empty");
            return;
        }
        if (email.length <= 0) {
            alert("Email cannot be empty");
            return;
        }
        if (password.length <= 0) {
            alert("Password cannot be empty");
            return
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
            alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number");
            return;
        }
        if (username.length < 3) {
            alert("Username must be at least 3 characters long");
            return;
        }
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert("Email is not valid");
            return;
        }
        if (await authStore.isEmailTaken(email)) {
            alert("Email already taken");
            return;
        }
        authStore.registerUser({
            id: id,
            email: email,
            password: password,
            userType: 1
        })
        userStore.createUserProfile({
            id: id,
            name: username,
            userType: 1,
            description: '',
            profileImageUrl: '',
            bannerImageUrl: '',
            facebookUrl: '',
            twitterUrl: '',
            discordUrl: '',
            twitchUrl: '',
            websiteUrl: ''
        })

        await authStore.attemptLogin({ email: email, password: password });
        const loadedUser = await userStore.loadUser(authStore.user?.id);
        if (loadedUser.userType === 0) {
            authStore.isCaster = true;
            authStore.isOrg = false;
        } else {
            authStore.isCaster = false;
            authStore.isOrg = true;
        }

        console.log(loadedUser);

        if (authStore.user) {
            localStorage.setItem("token", authStore.user.token);
        }
        nextPage()
    }

    const onPrev = () => {
        prevPage();
    }

    return (
        <>
            <div className='Register__Header    { clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    { h1 font-statewideBold flex-flow }'>
                    2
                </div>
                <div className='Register__Header__Title    { h3 font-statewideBold flex-flow }'> BASIC INFO ORG</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <form className="Inputs__Form    { display-grid justify-content-space-around align-items-center }" onSubmit={onNext}>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Username</span>
                        <input type="text" id='inputUsername' className='Input' placeholder='Groundpound69' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Email</span>
                        <input type="email" id='inputEmail' className='Input' placeholder='username@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Password</span>
                        <input type="password" id='inputPassword' className='Input' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Password</span>
                        <input type="password" id='inputRepeatPassword' className='Input' placeholder='Password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onNext} classes="Btn_Login { p1 font-statewideBold clr-white }" children="NEXT Step" />
            </div>
        </>
    )
}

const Step2_Caster = ({ id, nextPage, prevPage }: any) => {
    const { userStore } = useStore();
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitch, setTwitch] = useState('')
    const [discord, setDiscord] = useState('')
    const [website, setWebsite] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        let caster = userStore.user
        const updatedCaster = {
            ...caster, twitterUrl: twitter, facebookUrl: facebook, twitchUrl: twitch, discordUrl: discord, bannerImageUrl: '', profileImage: '', websiteUrl: website
        }
        console.log(updatedCaster);

        userStore.updateUserProfile(updatedCaster);
        userStore.setUser(updatedCaster);
        nextPage();
    }

    return (
        <>
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    3
                </div>
                <div className='Register__Header__Title    { H2 flex-flow }'> SOCIALS</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <form className="Inputs_Wrapper   { display-grid justify-content-space-around align-items-center }" onSubmit={onNext}>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Twitter</span>
                        <input type="text" className='Input' placeholder='Twitter' value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Facebook</span>
                        <input type="text" className='Input' placeholder='Facebook' value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Twitch</span>
                        <input type="text" className='Input' placeholder='Twitch' value={twitch} onChange={(e) => setTwitch(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Discord</span>
                        <input type="text" className='Input' placeholder='Discord' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Website</span>
                        <input type="text" className='Input' placeholder='Website' value={website} onChange={(e) => setWebsite(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onNext} classes="Btn_Login { p1 font-statewideBold clr-white }" children="NEXT Step" />
            </div>
        </>
    )
}

const Step2_Org = ({ id, nextPage, prevPage }: any) => {
    const { userStore } = useStore();
    const [twitter, setTwitter] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitch, setTwitch] = useState('')
    const [discord, setDiscord] = useState('')
    const [website, setWebsite] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onNext = () => {
        let org = userStore.user
        const updatedOrg = {
            ...org, twitterUrl: twitter, facebookUrl: facebook, twitchUrl: twitch, discordUrl: discord, bannerImageUrl: '', profileImage: '', websiteUrl: website
        }
        console.log(updatedOrg);

        userStore.updateUserProfile(updatedOrg);
        userStore.setUser(updatedOrg);
        nextPage();
    }
    return (
        <>
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    3
                </div>
                <div className='Register__Header__Title    { H2 flex-flow }'> SOCIALS</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <form className="Inputs__Form    { display-grid justify-content-space-around align-items-center }" onSubmit={onNext}>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Twitter</span>
                        <input type="text" className='Input' placeholder='Twitter' value={twitter} onChange={(e) => setTwitter(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Facebook</span>
                        <input type="text" className='Input' placeholder='Facebook' value={facebook} onChange={(e) => setFacebook(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Twitch</span>
                        <input type="text" className='Input' placeholder='Twitch' value={twitch} onChange={(e) => setTwitch(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Discord</span>
                        <input type="text" className='Input' placeholder='Discord' value={discord} onChange={(e) => setDiscord(e.target.value)}></input>
                    </div>
                    <div className='Inputs__Form__Component'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Website</span>
                        <input type="text" className='Input' placeholder='Website' value={website} onChange={(e) => setWebsite(e.target.value)}></input>
                    </div>
                </form>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onNext} classes="Btn_Login { p1 font-statewideBold clr-white }" children="NEXT Step" />
            </div>
        </>
    )
}

const Step3_Caster = ({ id, complete, prevPage }: any) => {
    const { userStore } = useStore();
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        let caster = userStore.user
        const updatedCaster = {
            ...caster, description: description
        }
        console.log(updatedCaster);

        userStore.updateUserProfile(updatedCaster);
        userStore.setUser(updatedCaster);
        complete();
    }
    return (
        <>
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    4
                </div>
                <div className='Register__Header__Title    { H2 flex-flow }'> description</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <div className='Inputs__Form__Component_Description Flex'>
                    <span className='{ half-opacity p4 font-statewideLight clr-white }' >Descripe yourself</span>
                    <textarea className='Input_Description' placeholder='Tell us something great' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onComplete} classes="Btn_Login { p1 font-statewideBold clr-white }" children="COMPLETE" />
            </div>
        </>
    )
}

const Step3_Org = ({ id, complete, prevPage }: any) => {
    const { userStore } = useStore();
    const [description, setDescription] = useState('')

    const onPrev = () => {
        prevPage();
    }
    const onComplete = () => {
        let org = userStore.user
        const updatedOrg = {
            ...org, description: description
        }
        console.log(updatedOrg);

        userStore.updateUserProfile(updatedOrg);
        userStore.setUser(updatedOrg);
        complete();
    }
    return (
        <>
            <div className='Register__Header    {    clr-white display-flex justify-content-start align-items-center }'>
                <div className='Register__Header__Step    {   h1 font-statewideBold flex-flow }'>
                    4
                </div>
                <div className='Register__Header__Title    {  h3 font-statewideBold flex-flow }'> description Org</div>
            </div>
            <div className='[ Inputs ]    { display-flex justify-content-start align-items-center }'>
                <form className="Inputs__Form_Description    { display-flex justify-content-start align-items-center }" onSubmit={onComplete}>
                    <div className='Inputs__Form__Component_Description    { Flex }'>
                        <span className='{ half-opacity p4 font-statewideLight clr-white }' >Descripe your organisation</span>
                        <textarea className='Input_Description' placeholder='Tell us something great' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                </form>
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onPrev} classes="Btn_LoginOutline { p1 font-statewideBold clr-white }" children="PREVIOUS Step" />
                <Btn onClick={onComplete} classes="Btn_Login { p1 font-statewideBold clr-white }" children="COMPLETE" />
            </div>
        </>
    )
}

const Done = () => {

    const navigate = useNavigate();
    const { userStore, authStore } = useStore();
    const onHome = async () => {

        const loadedUser = await userStore.loadUser(authStore.user?.id);
        if (loadedUser.userType === 0) {
            authStore.isCaster = true;
            authStore.isOrg = false;
        } else {
            authStore.isCaster = false;
            authStore.isOrg = true;
        }
        navigate('/');
    }
    return (
        <>
            <div className='Register__Header Text_Secondary flex-flow'>
                <div className='Register__Header__Title    {  h3 font-statewideBold flex-flow }'> Finished</div>
            </div>
            <div className='Finished_Container    { display-flex justify-content-start align-items-center Text_Secondary P1_Oxanium Bold }'>
                Congratulations! You have successfully created your account.
                To continue please press the button below, we've already logged you in to your account.
            </div>
            <div className='[ Buttons ]    { flex-flow }'>
                <Btn onClick={onHome} classes="Btn_Login { p1 font-statewideBold clr-white }" children="Back to home" />
            </div>
        </>
    )
}

export default Register