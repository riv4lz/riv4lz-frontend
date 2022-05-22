import React from 'react'
import "./FAQItemComponent.scss"
import profileImg from "../../../../assets/images/Temp/ProfileIMG_Temp.jpg";

interface Props {
    introText?: string;

    step1Text?: string;
    step2Text?: string;
    step3Text?: string;
    step4Text?: string;
    step5Text?: string;

    image?: string;
}

const FAQItemComponent: React.FC<Props> = ({ introText,
                                               step1Text,
                                               step2Text,
                                               step3Text,
                                               step4Text,
                                               step5Text ,
                                               image}) => {
    return (
        <div className={"FAQItemComponent"}>
            <div className={"FAQItemComponent__Wrapper margin-bottom-l"}>
                <div className={"FAQItemComponent__Text margin-left-s h2 font-statewideBold"}>
                    <p className={"p2 font-poppins"}>{introText}</p>
                    {step1Text && <p className={"margin-top-xs clr-primary"}>1.</p>}
                    <p className={"p2 font-poppins"}>{step1Text}</p>
                    {step2Text && <p className={"margin-top-xs clr-primary"}>2.</p>}
                    <p className={"p2 font-poppins"}>{step2Text}</p>
                    {step3Text && <p className={"margin-top-xs clr-primary"}>3.</p>}
                    <p className={"p2 font-poppins"}>{step3Text}</p>
                    {step4Text && <p className={"margin-top-xs clr-primary"}>4.</p>}
                    <p className={"p2 font-poppins"}>{step4Text}</p>
                    {step5Text && <p className={"margin-top-xs clr-primary"}>5.</p>}
                    <p className={"p2 font-poppins"}>{step5Text}</p>
                </div>
                <img className={"FAQItemComponent__Visual"} src={image}></img>
            </div>
        </div>
    );
}

export default FAQItemComponent
