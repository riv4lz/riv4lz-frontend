import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";
import { AuthStore } from "./authStore";
import React, {createContext, useContext} from "react";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    eventStore: EventStore;
    authStore: AuthStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    eventStore: new EventStore(),
    authStore: new AuthStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

