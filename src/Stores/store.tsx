import CommentStore from "./commentStore";
import {createContext, useContext} from "react";

interface Store{
    commentStore: CommentStore;
}

export const store: Store = {
    commentStore: new CommentStore()
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}

