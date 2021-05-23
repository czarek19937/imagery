import {createApi} from "unsplash-js";

export const api = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
});