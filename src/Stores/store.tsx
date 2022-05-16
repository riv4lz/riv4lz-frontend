import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";

import React, {createContext, useContext} from "react";
import { AuthStore } from "./authStore";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
    authStore: AuthStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
    authStore: new AuthStore(),
};

export const StoreContext = createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

