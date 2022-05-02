import CommentStore from "./commentStore";
import {CasterStore} from "./casterStore";

import React, {createContext, useContext} from "react";


type Store = {
    commentStore: CommentStore;
    casterStore: CasterStore;
}

export const store: Store = {
    commentStore: new CommentStore(),
    casterStore: new CasterStore(),
};

export const StoreContext = React.createContext<Store>({} as Store);

export function useStore() {
    return useContext(StoreContext);
}

