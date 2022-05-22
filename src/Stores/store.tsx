import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";
import {AuthStore} from "./authStore";
import {TeamStore} from "./teamStore";
import React, {createContext, useContext} from "react";
import { OrgStore } from "./orgStore";
import { OfferStore } from "./offerStore";
import { UserStore } from "./userStore";
import { ImageStore } from "./imageStore";


type Store = {
    commentStore: CommentStore;
    eventStore: EventStore;
    authStore: AuthStore;
    teamStore: TeamStore;
    offerStore: OfferStore;
    userStore: UserStore;
    imageStore: ImageStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    eventStore: new EventStore(),
    authStore: new AuthStore(),
    teamStore: new TeamStore(),
    offerStore: new OfferStore(),
    userStore: new UserStore(),
    imageStore: new ImageStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

