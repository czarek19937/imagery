import {useEffect, useState} from "react";

import {Photo} from "./Photo";
import {PhotosContainer} from "./components/PhotosContainer";
import {Spinner} from "./components/Spinner";
import {PhotosError} from "./components/PhotosError";
import {api} from "./utils/unsplashApiDetails";
import {ApiResponse} from "unsplash-js/dist/helpers/response";
import {Photos} from "unsplash-js/dist/methods/search/types/response";

export const Overview = () => {
    const [photosResponse, setPhotosResponse] = useState<ApiResponse<Photos> | null>(null);

    useEffect(() => {
        api.search
            .getPhotos({ query: "cat", orientation: "landscape" })
            .then(result => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (photosResponse === null) {
        return <Spinner />;
    }
    if (photosResponse.errors) {
        return <PhotosError errors={photosResponse.errors} />
    }

    return (
        <PhotosContainer>
            {photosResponse.response.results.map(photo => (
                <Photo photo={photo} key={photo.id} />
            ))}
        </PhotosContainer>
    );
};