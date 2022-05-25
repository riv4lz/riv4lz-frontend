import React from 'react';
import SK_Gaming from '../assets/images/Esports-orgs/SK_Gaming.png';
import Strikers from '../assets/images/Esports-orgs/Tricked.svg';
import Spirit_of_Amiga from '../assets/images/Esports-orgs/Spirit_of_Amiga.png';
import Virtus_pro from '../assets/images/Esports-orgs/Virtus_pro.svg';
import Cloud9 from '../assets/images/Esports-orgs/Cloud9.png';
import EDG from '../assets/images/Esports-orgs/EDG.png';
import Tricked from '../assets/images/Esports-orgs/Tricked.svg';

class GetImageService{

    getImage(image: string) {
        switch (image) {
            case "SK Gaming":
                return SK_Gaming;
            case "Strikers":
                return Strikers
            case "Spirit of Amiga":
                return Spirit_of_Amiga
            case "Virtus.pro":
                return Virtus_pro
            case "Cloud9":
                return Cloud9
            case "EDG":
                return EDG
            default:
                return Tricked
        }
    }

}

export default GetImageService