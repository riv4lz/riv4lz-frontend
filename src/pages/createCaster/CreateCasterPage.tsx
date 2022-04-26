import React from 'react'
import './CreateCasterPage.scss'
import {useObserver} from "mobx-react-lite";
import {useStore} from "../../Stores/store";
import {Caster} from "../../Stores/casterStore";

function CreateCasterPage() {
  const {casterStore} = useStore();

  let casters: Caster[] = [];

  return useObserver(() => (
          <div className=''>
            <form>
              <input value={bannerImage} type={"text"} name={"bannerImage"} placeholder={"write here"}></input>
              <input value={this.casters.description} type={"text"} name={"description"} placeholder={"write here"}></input>
              <input value={casters.discordURL} type={"text"} name={"discordURL"} placeholder={"write here"}></input>
              <input value={casters.facebookURL} type={"text"} name={"facebookURL"} placeholder={"write here"}></input>
              <input value={caster.firstName} type={"text"} name={"firstName"} placeholder={"write here"}></input>
              <input value={caster.gamerTag} type={"text"} name={"gamerTag"} placeholder={"write here"}></input>
              <input value={caster.lastName} type={"text"} name={"lastName"} placeholder={"write here"}></input>
              <input value={caster.profileImage} type={"text"} name={"profileImage"} placeholder={"write here"}></input>
              <input value={caster.twitchURL} type={"text"} name={"twitchURL"} placeholder={"write here"}></input>
              <input value={caster.twitterURL} type={"text"} name={"twitterURL"} placeholder={"write here"}></input>
            </form>
            <button onClick={() => casterStore.loadCasters()}>Load casters</button>
          </div>
  )
  );
}

export default CreateCasterPage