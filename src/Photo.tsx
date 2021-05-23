import {Basic} from "unsplash-js/dist/methods/photos/types";
import {
    ImageContainer,
    ImageContent,
    ImageContentContainer,
    ImageLink,
    ImageSubtitle,
    ImageSubtitleDataContent,
    ImageSubtitleExtraContent,
    ImageTitle,
} from "./components/Image";

export const Photo = ({ photo} : { photo: Basic}) => {
    const { user, urls, created_at } = photo;
    const createdFormattedDate = new Intl.DateTimeFormat('en-US').format(new Date(created_at))
    return (
        <ImageContainer photoUrl={urls.regular}>
            <ImageContentContainer>
                <ImageContent>
                    <ImageTitle>Description</ImageTitle>
                    <ImageSubtitle>
                        <ImageSubtitleExtraContent>
                            by
                        </ImageSubtitleExtraContent>
                        <ImageSubtitleDataContent>
                            <ImageLink href={`https://unsplash.com/${user.username}`}>{user.name}</ImageLink>
                        </ImageSubtitleDataContent>
                        <ImageSubtitleExtraContent>
                            on
                        </ImageSubtitleExtraContent>
                        <ImageSubtitleDataContent>
                            {createdFormattedDate}
                        </ImageSubtitleDataContent>
                    </ImageSubtitle>
                </ImageContent>
            </ImageContentContainer>
        </ImageContainer>
    );
}