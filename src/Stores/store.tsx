import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";
import {EventStore} from "./eventStore";

import React, {createContext, useContext} from "react";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    eventStore: EventStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    eventStore: new EventStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

