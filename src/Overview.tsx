import {useEffect, useState} from "react";

import {ApiResponse} from "./types/ApiResponse";
import {Photos} from "./types/Photos";

import {Photo} from "./Photo";
import {PhotosContainer} from "./components/PhotosContainer";
import {Spinner} from "./components/Spinner";
import {PhotosError} from "./components/PhotosError";
import {api} from "./utils/unsplashApiDetails";

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