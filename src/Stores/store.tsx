import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";
import {AuthStore} from "./authStore";
import {TeamStore} from "./teamStore";
import React, {createContext, useContext} from "react";
import { OrgStore } from "./orgStore";
import { OfferStore } from "./offerStore";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    eventStore: EventStore;
    authStore: AuthStore;
    orgStore: OrgStore;
    teamStore: TeamStore;
    offerStore: OfferStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    eventStore: new EventStore(),
    authStore: new AuthStore(),
    orgStore: new OrgStore(),
    teamStore: new TeamStore(),
    offerStore: new OfferStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

