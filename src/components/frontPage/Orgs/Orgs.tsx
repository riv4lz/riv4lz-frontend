import React from 'react'
import './Orgs.scss'
import Astralis from '../../../assets/images/Esports-orgs/Astralis.svg'
import Cepter from '../../../assets/images/Esports-orgs/Cepter.svg'
import Tricked from '../../../assets/images/Esports-orgs/Tricked.svg'
import CPHFlames from '../../../assets/images/Esports-orgs/CPHFlames.svg'
import M from '../../../assets/images/Esports-orgs/M.svg'
import Wave from '../../../assets/images/Esports-orgs/Wave.svg'
import AGF from '../../../assets/images/Esports-orgs/AGF.svg'

const Orgs = () => {
  return (
      <div className='[ Orgs ]    { width-full flex-flow }'>
          <div className='[ OrgsContent ]    { flex-direction-column width-content flex-flow }'>
              <div className='OrgsContent__Title    { margin-bottom-xl h2 clr-white font-statewideBold flex-flow }'>
              Organisations already signed up
              </div>
              <div className='OrgsContent__Logos    { flex-direction-row flex-flow }'>
                  <img src={Astralis} alt="Astralis" />
                  <img src={Cepter} alt="Cepter" />
                  <img src={Tricked} alt="Astralis" />
                  <img src={CPHFlames} alt="CPHFlames" />
                  <img src={M} alt="M" />
                  <img src={Wave} alt="Wave" />
                  <img src={AGF} alt="AGF" />
              </div>
          </div>
      </div>
  )
}

export default Orgs
