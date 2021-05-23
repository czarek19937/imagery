import {MobileLayoutContainer} from '../../components/Layout'
import {
    ImageContent,
    ImageContentContainer,
    ImageLink,
    ImageSubtitle,
    ImageSubtitleDataContent,
    ImageSubtitleExtraContent,
    ImageTitle,
} from "../../components/Image";

interface IMobileLayout {
    photoUrl: string;
    username: string;
    name: string;
    createdFormattedDate: string;
}

export const MobileLayout = ({ photoUrl, username, name, createdFormattedDate}: IMobileLayout) => {
    return (
        <MobileLayoutContainer>
            <ImageContentContainer>
                <ImageTitle>Description</ImageTitle>
                <img src={photoUrl} alt="random test which can be alt"/>
                <ImageContent>
                    <ImageSubtitle>
                        <ImageSubtitleExtraContent>
                            by
                        </ImageSubtitleExtraContent>
                        <ImageSubtitleDataContent>
                            <ImageLink href={`https://unsplash.com/${username}`}>{name}</ImageLink>
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
        </MobileLayoutContainer>
    );
};