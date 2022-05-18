import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";
import { AuthStore } from "./authStore";
import React, {createContext, useContext} from "react";
import { OrgStore } from "./orgStore";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    eventStore: EventStore;
    authStore: AuthStore;
    orgStore: OrgStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    eventStore: new EventStore(),
    authStore: new AuthStore(),
    orgStore: new OrgStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

