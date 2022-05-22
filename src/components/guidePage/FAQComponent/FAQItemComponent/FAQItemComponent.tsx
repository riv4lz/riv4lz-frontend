import React from 'react'
import "./FAQItemComponent.scss"
import profileImg from "../../../../assets/images/Temp/ProfileIMG_Temp.jpg";

interface Props {
    step1Text?: string;
    step2Text?: string;
    step3Text?: string;

    image?: string;
}

const FAQItemComponent: React.FC<Props> = ({ step1Text, step2Text, step3Text , image}) => {
    return (
        <div className={"FAQItemComponent"}>
            <div className={"FAQItemComponent__Wrapper"}>
                <div className={"FAQItemComponent__Text h2 font-statewideBold"}>
                    {step1Text && <p className={""}>1.</p>}
                    <p className={"p2 font-poppins"}>{step1Text}</p>
                    {step2Text && <p className={""}>2.</p>}
                    <p className={"p2 font-poppins"}>{step2Text}</p>
                    {step3Text && <p className={""}>3.</p>}
                    <p className={"p2 font-poppins"}>{step3Text}</p>
                </div>
                <img className={"FAQItemComponent__Visual"} src={image}></img>
            </div>
        </div>
    );
}

export default FAQItemComponent
