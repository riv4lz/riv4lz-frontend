import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";
import {AuthStore} from "./authStore";
import {TeamStore} from "./teamStore";
import React, {createContext, useContext} from "react";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    eventStore: EventStore;
    authStore: AuthStore;
    teamStore: TeamStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    eventStore: new EventStore(),
    authStore: new AuthStore(),
    teamStore: new TeamStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

