import * as PhotoApi from "unsplash-js/src/methods/photos/types";

interface Response<A> {
    results: A[];
    total: number;
    total_pages: number;
}

export interface Photos extends Response<PhotoApi.Basic> {}